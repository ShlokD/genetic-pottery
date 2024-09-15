import { useEffect, useRef, useState } from "preact/hooks";
import { useAppContext } from "../../context/app-context";

const FeaturedStoryCard = ({
  urlToImage,
  title,
  description,
  publishedAt,
  url,
}) => {
  const date = new Date(publishedAt);
  return (
    <a
      className="ma0 no-underline black w-100 w-25-l mh bg-white shadow-2 mh4-l mv2 bb bw3 b--dark-green"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      style={{ minHeight: "400px" }}>
      <div className="w-100 flex flex-column justify-center">
        <img
          className="w-100"
          src={urlToImage}
          alt={title}
          loading="lazy"
          width="100%"
          height="auto"
        />
        <div className="pa4 flex flex-column">
          <h3 className="f5 ma0 mv4">{title}</h3>
          <p className="db black-90 mw6 truncate f6 ma0 mv2">{description}</p>
          <p className="db f6 silver ma0 mv2">{date.toDateString()}</p>
        </div>
      </div>
    </a>
  );
};

const options = {
  rootMargin: "16px",
  threshold: 0.7,
};

const FeaturedStoryCarousel = ({ stories }) => {
  const [selected, setSelected] = useState(0);
  const itemsRef = useRef([]);

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        if (typeof index !== "undefined" && index !== selected) {
          setSelected(Number(index));
        }
      }
    });
  };
  const observer =
    typeof window === "undefined"
      ? null
      : new IntersectionObserver(cb, options);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, stories.length);
  }, [stories.length]);

  useEffect(() => {
    itemsRef.current.forEach((elem) => {
      if (elem && observer) {
        observer?.observe?.(elem);
      }
    });
  }, []);

  const setNextStory = () => {
    itemsRef.current[selected + 1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
    setSelected((prev) => prev + 1);
  };
  const setPrevStory = () => {
    itemsRef.current[selected - 1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
    setSelected((prev) => prev - 1);
  };

  return (
    <div
      className="dn flex-l overflow-x-scroll w-100 h-100 mv4 items-center justify-evenly no-wrap"
      style={{ minHeight: "720px" }}
      id="carousel">
      {stories?.map((story, index) => {
        const date = new Date(story.publishedAt);
        const isSelected = index === selected;
        return (
          <div
            className="w-70 flex-shrink-0 flex-grow-1 mv2 mh4 shadow-1"
            key={`carousel-story-${index}`}
            data-index={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{
              backgroundImage: `url(${story.urlToImage})`,
              backgroundSize: "cover",
              scrollSnapType: "x mandatory",
              minHeight: "600px",
              transform: `scale3d(${isSelected ? "1.1,1.1,1.1" : "1,1,1"})`,
              transition: "all 0.5s ease-in-out",
            }}>
            <a
              className="no-underline black"
              rel="noopener noreferrer"
              target="_blank"
              href={story.url}>
              <div className="pa4 absolute bottom-1 bg-black-90 flex flex-column w-80">
                <h3 className="f5 ma0 mv4 white truncate">{story.title}</h3>
                <p className="db light-gray mw6 f6 ma0 mv2 truncate">
                  {story.description}
                </p>
                <p className="db f6 silver ma0 mv2">{date.toDateString()}</p>
              </div>
            </a>

            {isSelected && (
              <div className="flex ph3 justify-end">
                <button
                  className="b--none f2 pa2 bg-transparent b white"
                  disabled={selected === 0}
                  onClick={setPrevStory}>
                  &larr;
                </button>
                <button
                  className="b--none f2 pa2 bg-transparent b white"
                  disabled={selected === stories.length}
                  onClick={setNextStory}>
                  &rarr;
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
const FeaturedStories = () => {
  const { stories } = useAppContext();

  const featuredStories = stories.filter(
    (_, idx) => idx === 8 || idx === 9 || idx === 10
  );
  const carouselStories = stories.filter((_, idx) => idx > 10 && idx < 16);
  return (
    <div className="pa4 bg-light-gray mv4 w-100 flex flex-column ">
      <div className="flex flex-row-l flex-column flex-wrap w-100 justify-center">
        {featuredStories.map((featuredStory, idx) => (
          <FeaturedStoryCard {...featuredStory} key={`featured-story-${idx}`} />
        ))}
      </div>
      <FeaturedStoryCarousel stories={carouselStories} />
    </div>
  );
};

export default FeaturedStories;
