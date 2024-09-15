const whitelisted = ["localhost:3000", "geneticpottery-1-b1461366.deta.app"];

const cache = {};

export default async function handler(req, res) {
  const host = req.headers.host;
  if (whitelisted.indexOf(host) === -1) {
    res.status(401).json({ msg: "Unauth" });
  }

  const category = req?.query?.category;
  const page = req?.query?.page;
  const searchQuery = req?.query?.q;
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const cacheKey = !!searchQuery
    ? `${+date}-${searchQuery}-${page}`
    : `${+date}-${category}-${page}`;
  if (cache[cacheKey]) {
    res.status(200).json(cache[cacheKey]);
  } else {
    const apiKey = process.env.API_KEY;
    const url = !!searchQuery
      ? `https://newsapi.org/v2/everything?pageSize=12&page=${page}&q=${searchQuery}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&page=${page}&category=${category}&apiKey=${apiKey}`;

    const apiResponse = await fetch(url);
    const headlines = await apiResponse.json();
    cache[cacheKey] = headlines;
    res.status(200).json(headlines);
  }
}
