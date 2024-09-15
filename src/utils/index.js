export const getServerUrl = () => {
  return process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : process.env.SERVER_URL;
};

export const transformArticle = (articles) => {
  return articles?.map((article) => {
    return {
      ...article,
      urlToImage: article.urlToImage || "/placeholder.jpg",
      title: article?.title.split("-")[0],
    };
  });
};
