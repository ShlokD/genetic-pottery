import { useAppContext } from "../../context/app-context";
import { useState, useEffect, useRef } from "preact/hooks";

const TopStoryCard = ({ title, description, urlToImage, url }) => {
  return (
    <a
      href={url}
      className="mv2 mh2 relative no-underline black w-90"
      rel="noreferrer noopener"
      target="_blank"
      style={{
        backgroundImage: `url(${urlToImage})`,
        backgroundSize: "cover",
        minHeight: "300px",
      }}
    >
      <div className="shadow-3 overflow-hidden">
        <h3
          className={`bg-light-gray absolute f4-l f6 b ma0 ml4 mt4 pa2 mb4 center bottom-0 left-1 w-80 o-80 ${
            title.length > 80 ? "truncate" : ""
          }`}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};

const StoryScroller = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const interval = useRef(null);
  const buttons = new Array(stories.length).fill(0);
  const handleClick = (index) => {
    setCurrentStoryIndex(() => index);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
    }, 3000);
    return () => clearInterval(interval.current);
  }, []);

  const currentStory = stories[currentStoryIndex];

  return (
    <a
      href={currentStory.url}
      className="mv2 mh2 overflow-hidden shadow-3 flex flex-column h-80 w-90-l relative no-underline black"
      style={{
        backgroundImage: `url(${currentStory.urlToImage})`,
        backgroundSize: "cover",
        height: "600px",
      }}
      rel="noopener"
      target="_blank"
    >
      <h3
        className={`bg-light-gray absolute f4-l f6 b ma0 ml4 mt4 mb4 pa4-l pa2 center bottom-0 left-1 w-80 o-80 ${
          currentStory.title > 80 ? "truncate" : ""
        }`}
      >
        {currentStory.title}
      </h3>
      <div className="absolute right-1 bottom-0 flex flex-column-l flex-row mb2">
        {buttons.map((_, idx) => {
          return (
            <button
              key={`button-${idx}`}
              className={`pointer mv2 mv0-l pa2-l pa1 br-100 b--black bw2-l bw1 b--solid mb1 ${
                currentStoryIndex === idx ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => handleClick(idx)}
              aria-label={`scroller-button-${idx}`}
            ></button>
          );
        })}
      </div>
    </a>
  );
};

const TopStories = () => {
  const { stories } = useAppContext();
  const carouselStories = stories.filter((_, idx) => idx >= 0 && idx <= 4);
  const sideStories = stories.filter((_, idx) => idx === 5 || idx === 6);
  return (
    <div className="w-100 flex flex-row-l flex-column pb4 justify-center">
      <div className="w-60-l w-100 h-60 h-100-l">
        <StoryScroller stories={carouselStories} />
      </div>
      <div
        className="w-40-l w-100 h-100 flex flex-row flex-column-l items-center justify-center"
        style={{ minHeight: "300px" }}
      >
        {sideStories.map((story, idx) => (
          <TopStoryCard key={`top-story-${idx}`} {...story} />
        ))}
      </div>
    </div>
  );
};

export default TopStories;
