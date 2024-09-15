const TopPosts = ({ stories }) => {
  return (
    <ul className="pl0 ma0 list flex flex-column items-center items-start-l pb4 mh2-l">
      {stories.map((story, idx) => {
        return (
          <li className="bb b--dark-green w-100 mb4" key={`top-post-${idx}`}>
            <a
              className="dib no-underline black flex flex-column items-center"
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-100"
                src={story.urlToImage}
                alt={story.title}
                loading="lazy"
                width="100%"
                height="auto"
              />
              <div className="flex items-center justify-around w-100 pb3">
                <div className="w-70">
                  <h3 className="truncate">{story.title}</h3>
                  <p className="ma0 black-90">
                    {new Date(story.publishedAt).toDateString()}
                  </p>
                </div>
                <div className="w-30 o-40 f2 b tc">{idx + 1}</div>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TopPosts;
