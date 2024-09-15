import CategoryList from "@/components/category-list/category-list";
import { AppContext } from "@/context/app-context";
import { transformArticle } from "@/utils";
import Head from "next/head";
import { useEffect, useState } from "preact/hooks";

export default function SearchCategory({ stories, pages }) {
  const [categoryStories, setCategoryStories] = useState(stories);
  const imageUrls = stories.map((story) => story.urlToImage);

  useEffect(() => {
    if (stories !== categoryStories) {
      setCategoryStories(stories);
    }
  }, [stories]);

  return (
    <>
      <Head>
        {imageUrls.map((imageUrl, idx) =>
          imageUrl ? (
            <link
              key={`preload-${idx}`}
              rel="preload"
              href={imageUrl}
              as="image"
            />
          ) : (
            ""
          )
        )}
      </Head>
      <AppContext.Provider
        value={{ categoryStories, setCategoryStories, pages }}>
        {categoryStories.length > 0 ? (
          <CategoryList />
        ) : (
          <div className="ma6 pa6">
            <h2>Something went wrong. Please try again</h2>
          </div>
        )}
      </AppContext.Provider>
    </>
  );
}

export async function getServerSideProps(context) {
  const server = getServerUrl();
  const searchQuery = context?.query?.q;
  const page = context?.query?.pg || "1";
  const category = context?.query?.c;

  if (searchQuery) {
    const res = await fetch(
      `${server}/api/category?q=${searchQuery}&page=${page}`
    );
    const json = await res.json();
    const stories = transformArticle(json?.articles);
    const pages = Math.ceil((json?.totalResults || 0) / 12);
    return {
      props: {
        stories,
        pages,
      },
    };
  }

  const res = await fetch(
    `${server}/api/category?category=${category}&page=${page}`
  );
  const json = await res.json();
  const stories = transformArticle(json?.articles);
  const pages = Math.ceil((json?.totalResults || 0) / 12);
  return {
    props: {
      stories,
      pages,
    },
  };
}
