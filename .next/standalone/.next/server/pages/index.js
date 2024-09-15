"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/context/app-context.js
var app_context = __webpack_require__(1094);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "preact/hooks"
var hooks_ = __webpack_require__(1718);
;// CONCATENATED MODULE: ./src/components/newsfeed/top-stories.js



const TopStoryCard = ({ title , description , urlToImage , url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: url,
        className: "mv2 mh2 relative no-underline black w-90",
        rel: "noreferrer noopener",
        target: "_blank",
        style: {
            backgroundImage: `url(${urlToImage})`,
            backgroundSize: "cover",
            minHeight: "300px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "shadow-3 overflow-hidden",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `bg-light-gray absolute f4-l f6 b ma0 ml4 mt4 pa2 mb4 center bottom-0 left-1 w-80 o-80 ${title.length > 80 ? "truncate" : ""}`,
                children: title
            })
        })
    });
};
const StoryScroller = ({ stories  })=>{
    const { 0: currentStoryIndex , 1: setCurrentStoryIndex  } = (0,hooks_.useState)(0);
    const interval = (0,hooks_.useRef)(null);
    const buttons = new Array(stories.length).fill(0);
    const handleClick = (index)=>{
        setCurrentStoryIndex(()=>index);
    };
    (0,hooks_.useEffect)(()=>{
        interval.current = setInterval(()=>{
            setCurrentStoryIndex((prev)=>(prev + 1) % stories.length);
        }, 3000);
        return ()=>clearInterval(interval.current);
    }, []);
    const currentStory = stories[currentStoryIndex];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: currentStory.url,
        className: "mv2 mh2 overflow-hidden shadow-3 flex flex-column h-80 w-90-l relative no-underline black",
        style: {
            backgroundImage: `url(${currentStory.urlToImage})`,
            backgroundSize: "cover",
            height: "600px"
        },
        rel: "noopener",
        target: "_blank",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `bg-light-gray absolute f4-l f6 b ma0 ml4 mt4 mb4 pa4-l pa2 center bottom-0 left-1 w-80 o-80 ${currentStory.title > 80 ? "truncate" : ""}`,
                children: currentStory.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute right-1 bottom-0 flex flex-column-l flex-row mb2",
                children: buttons.map((_, idx)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: `pointer mv2 mv0-l pa2-l pa1 br-100 b--black bw2-l bw1 b--solid mb1 ${currentStoryIndex === idx ? "bg-white" : "bg-transparent"}`,
                        onClick: ()=>handleClick(idx),
                        "aria-label": `scroller-button-${idx}`
                    }, `button-${idx}`);
                })
            })
        ]
    });
};
const TopStories = ()=>{
    const { stories  } = (0,app_context/* useAppContext */.b)();
    const carouselStories = stories.filter((_, idx)=>idx >= 0 && idx <= 4);
    const sideStories = stories.filter((_, idx)=>idx === 5 || idx === 6);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-100 flex flex-row-l flex-column pb4 justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-60-l w-100 h-60 h-100-l",
                children: /*#__PURE__*/ jsx_runtime_.jsx(StoryScroller, {
                    stories: carouselStories
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-40-l w-100 h-100 flex flex-row flex-column-l items-center justify-center",
                style: {
                    minHeight: "300px"
                },
                children: sideStories.map((story, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(TopStoryCard, {
                        ...story
                    }, `top-story-${idx}`))
            })
        ]
    });
};
/* harmony default export */ const top_stories = (TopStories);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/newsfeed/featured-stories.js




const FeaturedStoryCard = ({ urlToImage , title , description , publishedAt , url ,  })=>{
    const date = new Date(publishedAt);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: "ma0 no-underline black w-100 w-25-l mh bg-white shadow-2 mh4-l mv2 bb bw3 b--dark-green",
        href: url,
        target: "_blank",
        rel: "noreferrer noopener",
        style: {
            minHeight: "400px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-100 flex flex-column justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "w-100",
                    src: urlToImage,
                    alt: title,
                    loading: "lazy",
                    width: "100%",
                    height: "auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pa4 flex flex-column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "f5 ma0 mv4",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "db black-90 mw6 truncate f6 ma0 mv2",
                            children: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "db f6 silver ma0 mv2",
                            children: date.toDateString()
                        })
                    ]
                })
            ]
        })
    });
};
const options = {
    rootMargin: "16px",
    threshold: 0.7
};
const FeaturedStoryCarousel = ({ stories  })=>{
    const { 0: selected , 1: setSelected  } = (0,hooks_.useState)(0);
    const itemsRef = (0,hooks_.useRef)([]);
    const cb = (entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const index = entry.target.dataset.index;
                if (typeof index !== "undefined" && index !== selected) {
                    setSelected(Number(index));
                }
            }
        });
    };
    const observer =  true ? null : 0;
    (0,hooks_.useEffect)(()=>{
        itemsRef.current = itemsRef.current.slice(0, stories.length);
    }, [
        stories.length
    ]);
    (0,hooks_.useEffect)(()=>{
        itemsRef.current.forEach((elem)=>{
            if (elem && observer) {
                observer?.observe?.(elem);
            }
        });
    }, []);
    const setNextStory = ()=>{
        itemsRef.current[selected + 1].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
        setSelected((prev)=>prev + 1);
    };
    const setPrevStory = ()=>{
        itemsRef.current[selected - 1].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
        setSelected((prev)=>prev - 1);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "dn flex-l overflow-x-scroll w-100 h-100 mv4 items-center justify-evenly no-wrap",
        style: {
            minHeight: "720px"
        },
        id: "carousel",
        children: stories.map((story, index)=>{
            const date = new Date(story.publishedAt);
            const isSelected = index === selected;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-70 flex-shrink-0 flex-grow-1 mv2 mh4 shadow-1",
                "data-index": index,
                ref: (el)=>itemsRef.current[index] = el,
                style: {
                    backgroundImage: `url(${story.urlToImage})`,
                    backgroundSize: "cover",
                    scrollSnapType: "x mandatory",
                    minHeight: "600px",
                    transform: `scale3d(${isSelected ? "1.1,1.1,1.1" : "1,1,1"})`,
                    transition: "all 0.5s ease-in-out"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "no-underline black",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: story.url,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pa4 absolute bottom-1 bg-black-90 flex flex-column w-80",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "f5 ma0 mv4 white truncate",
                                    children: story.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "db light-gray mw6 f6 ma0 mv2 truncate",
                                    children: story.description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "db f6 silver ma0 mv2",
                                    children: date.toDateString()
                                })
                            ]
                        })
                    }),
                    isSelected && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex ph3 justify-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "b--none f2 pa2 bg-transparent b white",
                                disabled: selected === 0,
                                onClick: setPrevStory,
                                children: "←"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "b--none f2 pa2 bg-transparent b white",
                                disabled: selected === stories.length,
                                onClick: setNextStory,
                                children: "→"
                            })
                        ]
                    })
                ]
            }, `carousel-story-${index}`);
        })
    });
};
const FeaturedStories = ()=>{
    const { stories  } = (0,app_context/* useAppContext */.b)();
    const featuredStories = stories.filter((_, idx)=>idx === 8 || idx === 9 || idx === 10);
    const carouselStories = stories.filter((_, idx)=>idx > 10 && idx < 16);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pa4 bg-light-gray mv4 w-100 flex flex-column ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row-l flex-column flex-wrap w-100 justify-center",
                children: featuredStories.map((featuredStory, idx)=>/*#__PURE__*/ (0,external_react_.createElement)(FeaturedStoryCard, {
                        ...featuredStory,
                        key: `featured-story-${idx}`
                    }))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturedStoryCarousel, {
                stories: carouselStories
            })
        ]
    });
};
/* harmony default export */ const featured_stories = (FeaturedStories);

;// CONCATENATED MODULE: ./src/components/newsfeed/in-depth.js


const InDepthCard = ({ urlToImage , title , url  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        className: "no-underline black w-40-l w-100 bb b--dark-green bw1 mt2 ph2",
        href: url,
        rel: "noopener noreferrer",
        target: "_blank",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: urlToImage,
                alt: title,
                loading: "lazy",
                width: "100%",
                height: "auto"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "truncate ma0 pv2",
                children: title
            })
        ]
    });
};
const InDepth = ()=>{
    const { stories  } = (0,app_context/* useAppContext */.b)();
    const inDepthStories = stories.filter((_, idx)=>idx > 15 && idx <= 20);
    const first = inDepthStories[0];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-column flex-row-l justify-center w-100 pv4 mh2-l",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: first.url,
                className: "w-50-l w-100 no-underline black bb b--dark-green bw1",
                rel: "noopener noreferrer",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: first.urlToImage,
                        alt: first.title,
                        loading: "lazy",
                        width: "100%",
                        height: "auto"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "ma0 mv2 pa2 truncate",
                        children: first.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "ma0 pa2",
                        children: first.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "ma0 pa2",
                        children: new Date(first.publishedAt).toDateString()
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-50-l w-100 flex flex-wrap flex-column flex-row-l justify-around ml5-l",
                children: inDepthStories.map((story, idx)=>{
                    return idx !== 0 ? /*#__PURE__*/ jsx_runtime_.jsx(InDepthCard, {
                        ...story
                    }, `indepth-${idx}`) : null;
                })
            })
        ]
    });
};
/* harmony default export */ const in_depth = (InDepth);

;// CONCATENATED MODULE: ./src/components/shared/top-posts.js

const TopPosts = ({ stories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "pl0 ma0 list flex flex-column items-center items-start-l pb4 mh2-l",
        children: stories.map((story, idx)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "bb b--dark-green w-100 mb4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "dib no-underline black flex flex-column items-center",
                    href: story.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-100",
                            src: story.urlToImage,
                            alt: story.title,
                            loading: "lazy",
                            width: "100%",
                            height: "auto"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-around w-100 pb3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-70",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "truncate",
                                            children: story.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "ma0 black-90",
                                            children: new Date(story.publishedAt).toDateString()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-30 o-40 f2 b tc",
                                    children: idx + 1
                                })
                            ]
                        })
                    ]
                })
            }, `top-post-${idx}`);
        })
    });
};
/* harmony default export */ const top_posts = (TopPosts);

// EXTERNAL MODULE: ./src/components/shared/other-stories.js
var other_stories = __webpack_require__(5707);
;// CONCATENATED MODULE: ./src/components/newsfeed/list.js




const StoryList = ()=>{
    const { stories  } = (0,app_context/* useAppContext */.b)();
    const otherStories = stories.filter((_, idx)=>idx > 20 && idx <= 24);
    const topPosts = stories.filter((_, idx)=>idx > 24 && idx <= 28);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-100 flex flex-column flex-row-l items-center items-start-l justify-center mh2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100 w-50-l mh4-l flex flex-column",
                children: /*#__PURE__*/ jsx_runtime_.jsx(other_stories/* default */.Z, {
                    stories: otherStories
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100 w-50-l pt2-l",
                children: /*#__PURE__*/ jsx_runtime_.jsx(top_posts, {
                    stories: topPosts
                })
            })
        ]
    });
};
/* harmony default export */ const list = (StoryList);

;// CONCATENATED MODULE: ./src/components/newsfeed/index.js





const SectionHeading = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "ma0 mv2 bw2 pb1 ml2 bb b--dark-green dib",
        children: children
    });
};
const NewsFeed = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pv2 w-90",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeading, {
                        children: "Top Stories "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(top_stories, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeading, {
                        children: "Featured"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(featured_stories, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeading, {
                        children: "In Depth"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(in_depth, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeading, {
                        children: "Latest Posts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(list, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const newsfeed = (NewsFeed);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(4799);
;// CONCATENATED MODULE: ./src/pages/index.js





function Home({ stories  }) {
    const imageUrls = stories.map((story)=>story.urlToImage);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: imageUrls.map((imageUrl, idx)=>imageUrl ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: imageUrl,
                        as: "image"
                    }, `preload-${idx}`) : "")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(app_context/* AppContext.Provider */.I.Provider, {
                value: {
                    stories
                },
                children: stories.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(newsfeed, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ma6 pa6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Something went wrong. Please try again"
                    })
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const server = (0,utils/* getServerUrl */.R)();
        const res = await fetch(`${server}/api/headlines`);
        const json = await res.json();
        const stories = (0,utils/* transformArticle */.p)(json?.articles);
        return {
            props: {
                stories
            }
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                stories: []
            }
        };
    }
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 8108:
/***/ ((module) => {

module.exports = require("preact");

/***/ }),

/***/ 1718:
/***/ ((module) => {

module.exports = require("preact/hooks");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(6683)));
module.exports = __webpack_exports__;

})();