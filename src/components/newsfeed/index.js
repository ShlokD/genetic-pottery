import TopStories from "./top-stories";
import FeaturedStories from "./featured-stories";
import InDepth from "./in-depth";
import StoryList from "./list";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="ma0 mv2 bw2 pb1 ml2 bb b--dark-green dib">{children}</h2>
  );
};

const NewsFeed = () => {
  return (
    <div className="pv2 w-90">
      <section>
        <SectionHeading>Top Stories </SectionHeading>
        <TopStories />
      </section>
      <section>
        <SectionHeading>Featured</SectionHeading>
        <FeaturedStories />
      </section>
      <section>
        <SectionHeading>In Depth</SectionHeading>
        <InDepth />
      </section>
      <section>
        <SectionHeading>Latest Posts</SectionHeading>
        <StoryList />
      </section>
    </div>
  );
};

export default NewsFeed;
