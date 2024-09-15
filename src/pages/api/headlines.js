const whitelisted = [
  "localhost:3000",
  "geneticpottery-1-b1461366.deta.app",
  "genetic-pottery.onrender.com/",
];

const cache = {};

export default async function handler(req, res) {
  const host = req.headers.host;
  if (whitelisted.indexOf(host) === -1) {
    res.status(401).json({ msg: "Unauth" });
  }

  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const cacheKey = `${+date}`;
  if (cache[cacheKey]) {
    res.status(200).json(cache[cacheKey]);
  } else {
    const apiKey = process.env.API_KEY;
    const apiResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${apiKey}`
    );
    const headlines = await apiResponse.json();
    cache[cacheKey] = headlines;
    res.status(200).json(headlines);
  }
}
