function uuidv4() {
  if (typeof window === "undefined") return "";

  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const OtherStoriesList = ({ stories }) => {
  return (
    <>
      {stories.map((story, index) => {
        return (
          <a
            className="bw1 pv2 bb b--dark-green no-underline black mb4"
            key={`other-story-${index}-${uuidv4()}`}
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-column flex-row-l items-center w-100 pb2">
              <div className="w-100 w-30-l flex flex-column items-center justify-center">
                <img
                  className="w-100"
                  src={story.urlToImage}
                  alt={story.title}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-column items-center w-100 w-70-l ml4-l">
                <h3 className="truncate w-30 w-50-m w-100-l">{story.title}</h3>
                <p className="ma0 w-100">{story.description}</p>
                <p className="ma0 mv3 moon-gray">
                  {new Date(story.publishedAt).toDateString()}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default OtherStoriesList;
