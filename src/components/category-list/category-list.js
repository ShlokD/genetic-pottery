import { useAppContext } from "@/context/app-context";
import OtherStoriesList from "@/components/shared/other-stories";
import { transformArticle } from "@/utils";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";

const Pagination = ({ onNextClick }) => {
  const { pages } = useAppContext();
  const router = useRouter();
  const pageQuery = router?.query?.pg;
  const [currentPage, setCurrentPage] = useState(
    !!pageQuery ? Number(pageQuery) : 1
  );

  useEffect(() => {
    if (pageQuery !== currentPage) {
      setCurrentPage(!isNaN(pageQuery) ? Number(pageQuery) : 1);
    }
  }, [pageQuery]);

  const endPage = currentPage + 4 < pages ? currentPage + 4 : pages;
  const buttons = new Array(5)
    .fill(0)
    .map((_, idx) => Math.abs(idx - endPage))
    .reverse();

  const goBack = () => {
    onNextClick(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  const goForward = () => {
    onNextClick(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const goToPage = (page) => {
    onNextClick(page);
    setCurrentPage(page);
  };

  return (
    <div className="flex w-100 justify-around pv2">
      <button
        className="bg-transparent pa3 black b--none pointer"
        onClick={goBack}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        &larr;
      </button>
      {buttons.map((val, idx) => {
        const selected = val === currentPage;
        return (
          <button
            key={`pagination-button-${idx}`}
            className={`pa3 b--none br-100 pointer ${
              selected ? "bg-black white" : "bg-transparent black"
            }`}
            onClick={() => goToPage(val)}
          >
            {val}
          </button>
        );
      })}

      <button
        className="bg-transparent pa3 black b--none pointer"
        onClick={goForward}
        disabled={currentPage === pages}
        aria-label="Next"
      >
        &rarr;
      </button>
    </div>
  );
};

const CategoryList = () => {
  const { categoryStories, setCategoryStories, session } = useAppContext();
  const router = useRouter();

  const handleNextClick = async (idx) => {
    try {
      router.push(
        {
          pathname: "/news",
          query: {
            ...router.query,
            pg: idx,
          },
        },
        undefined,
        { shallow: true }
      );
      const options = {
        headers: {
          "x-session": session,
        },
      };
      const category = router?.query?.c;
      const searchQuery = router?.query?.q;
      const url = !!searchQuery
        ? `/api/category?page=${idx}&q=${searchQuery}`
        : `/api/category?page=${idx}&category=${category}}`;

      const res = await fetch(url, options);
      const json = await res.json();
      setCategoryStories(transformArticle(json?.articles));
      window.scrollTo(0, 0);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="pv2 ph4 flex flex-column justify-center w-100">
      <OtherStoriesList stories={categoryStories} />
      <Pagination onNextClick={handleNextClick} />
    </div>
  );
};

export default CategoryList;
