import Link from "next/link";
import { useState } from "preact/hooks";
import { useRouter } from "next/router";

const categories = [
  {
    name: "Business",
    url: "business",
  },
  {
    name: "Sports",
    url: "sports",
  },
  {
    name: "General",
    url: "general",
  },
  {
    name: "Science",
    url: "science",
  },
  {
    name: "Entertainment",
    url: "entertainment",
  },
  {
    name: "Health",
    url: "health",
  },
  {
    name: "Technology",
    url: "technology",
  },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const date = new Date();
  const router = useRouter();
  const selectedCategory = router.query.c;
  const handleSearch = () => {
    router.push(`/news?q=${searchQuery}`);
    setSearchQuery("");
  };

  const handleCategorySelect = (ev) => {
    const value = ev.target.value;
    const selected = categories[value];
    router.push(`/news?c=${selected.url}`);
  };

  return (
    <div className="flex flex-column w-100 items-center justify-center">
      <div className="flex flex-column flex-row-ns justify-center items-baseline items-center-m w-100">
        <div className="pa2 flex items-center">
          <input
            className="br4 f5 ph4 pv2 b--none bg-white"
            placeholder="Search for stories..."
            value={searchQuery}
            onChange={(ev) => setSearchQuery(ev.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <div className="pa2 center dn-ns">
          <select onChange={handleCategorySelect}>
            {categories.map((category, idx) => {
              return (
                <option
                  key={`category-option-${idx}`}
                  value={idx}
                  selected={selectedCategory === category.url}
                >
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Link href="/" className="no-underline black pointer">
        <h1 className="f1 ma0 pv4 pv2-ns pointer tc tj-ns">
          Genetic <span className="dark-green">Pottery</span>
        </h1>
      </Link>
      <div className="flex justify-between w-100 ph4">
        <p className="ma0 f4">{date.toDateString()}</p>
        <p className="ma0 f4">INDIA</p>
      </div>
      <hr className="w-100 bw1 b--dark-green b--solid" />
      <div className="dn flex-l w-100 items-baseline justify-around pb2 black-90 ph3">
        {categories.map((category, index) => {
          return (
            <Link href={`/news?c=${category.url}`} key={`header-${index}`}>
              <a
                className={`pa2 f4 no-underline b dib ${
                  selectedCategory === category.url
                    ? "bb b--dark-green bw2 dark-green"
                    : "black"
                }`}
              >
                {category.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
