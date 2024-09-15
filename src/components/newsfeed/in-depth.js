import { useAppContext } from "../../context/app-context";

const InDepthCard = ({ urlToImage, title, url }) => {
  return (
    <a
      className="no-underline black w-40-l w-100 bb b--dark-green bw1 mt2 ph2"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        src={urlToImage}
        alt={title}
        loading="lazy"
        width="100%"
        height="auto"
      />
      <h3 className="truncate ma0 pv2">{title}</h3>
    </a>
  );
};
export const InDepth = () => {
  const { stories } = useAppContext();
  const inDepthStories = stories.filter((_, idx) => idx > 15 && idx <= 20);
  const first = inDepthStories[0];
  return (
    <div className="flex flex-column flex-row-l justify-center w-100 pv4 mh2-l">
      <a
        href={first.url}
        className="w-50-l w-100 no-underline black bb b--dark-green bw1"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src={first.urlToImage}
          alt={first.title}
          loading="lazy"
          width="100%"
          height="auto"
        ></img>
        <h3 className="ma0 mv2 pa2 truncate">{first.title}</h3>
        <p className="ma0 pa2">{first.description}</p>
        <p className="ma0 pa2">{new Date(first.publishedAt).toDateString()}</p>
      </a>
      <div className="w-50-l w-100 flex flex-wrap flex-column flex-row-l justify-around ml5-l">
        {inDepthStories.map((story, idx) => {
          return idx !== 0 ? (
            <InDepthCard key={`indepth-${idx}`} {...story} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default InDepth;
