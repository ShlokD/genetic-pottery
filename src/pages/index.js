import { AppContext } from "@/context/app-context";
import Head from "next/head";
import NewsFeed from "../components/newsfeed";
import { getServerUrl, transformArticle } from "../utils";

export default function Home({ stories }) {
  console.log({ stories: JSON.stringify(stories) });
  const imageUrls = stories?.map((story) => story.urlToImage);

  return (
    <>
      <Head>
        {imageUrls?.map((imageUrl, idx) =>
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
      <AppContext.Provider value={{ stories }}>
        {stories?.length > 0 ? (
          <NewsFeed />
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
  try {
    const server = getServerUrl();
    const res = await fetch(`${server}/api/headlines`);
    const json = await res.json();
    console.log(json);
    const stories = transformArticle(json?.articles);
    console.log(stories);
    return {
      props: {
        stories,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        stories: [],
      },
    };
  }
}
