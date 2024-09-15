import { useAppContext } from "@/context/app-context";
import TopPosts from "@/components/shared/top-posts";
import OtherStoriesList from "@/components/shared/other-stories";

const StoryList = () => {
  const { stories } = useAppContext();
  const otherStories = stories.filter((_, idx) => idx > 20 && idx <= 24);
  const topPosts = stories.filter((_, idx) => idx > 24 && idx <= 28);
  return (
    <div className="w-100 flex flex-column flex-row-l items-center items-start-l justify-center mh2">
      <div className="w-100 w-50-l mh4-l flex flex-column">
        <OtherStoriesList stories={otherStories} />
      </div>
      <div className="w-100 w-50-l pt2-l">
        <TopPosts stories={topPosts} />
      </div>
    </div>
  );
};

export default StoryList;
