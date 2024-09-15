"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 7022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchCategory),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/context/app-context.js
var app_context = __webpack_require__(1094);
// EXTERNAL MODULE: ./src/components/shared/other-stories.js
var other_stories = __webpack_require__(5707);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(4799);
// EXTERNAL MODULE: external "preact/hooks"
var hooks_ = __webpack_require__(1718);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/category-list/category-list.js






const Pagination = ({ onNextClick  })=>{
    const { pages  } = (0,app_context/* useAppContext */.b)();
    const router = (0,router_.useRouter)();
    const pageQuery = router?.query?.pg;
    const { 0: currentPage , 1: setCurrentPage  } = (0,hooks_.useState)(!!pageQuery ? Number(pageQuery) : 1);
    (0,hooks_.useEffect)(()=>{
        if (pageQuery !== currentPage) {
            setCurrentPage(!isNaN(pageQuery) ? Number(pageQuery) : 1);
        }
    }, [
        pageQuery
    ]);
    const endPage = currentPage + 4 < pages ? currentPage + 4 : pages;
    const buttons = new Array(5).fill(0).map((_, idx)=>Math.abs(idx - endPage)).reverse();
    const goBack = ()=>{
        onNextClick(currentPage - 1);
        setCurrentPage(currentPage - 1);
    };
    const goForward = ()=>{
        onNextClick(currentPage + 1);
        setCurrentPage(currentPage + 1);
    };
    const goToPage = (page)=>{
        onNextClick(page);
        setCurrentPage(page);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-100 justify-around pv2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "bg-transparent pa3 black b--none pointer",
                onClick: goBack,
                disabled: currentPage === 1,
                "aria-label": "Previous",
                children: "←"
            }),
            buttons.map((val, idx)=>{
                const selected = val === currentPage;
                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `pa3 b--none br-100 pointer ${selected ? "bg-black white" : "bg-transparent black"}`,
                    onClick: ()=>goToPage(val),
                    children: val
                }, `pagination-button-${idx}`);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "bg-transparent pa3 black b--none pointer",
                onClick: goForward,
                disabled: currentPage === pages,
                "aria-label": "Next",
                children: "→"
            })
        ]
    });
};
const CategoryList = ()=>{
    const { categoryStories , setCategoryStories , session  } = (0,app_context/* useAppContext */.b)();
    const router = (0,router_.useRouter)();
    const handleNextClick = async (idx)=>{
        try {
            router.push({
                pathname: "/news",
                query: {
                    ...router.query,
                    pg: idx
                }
            }, undefined, {
                shallow: true
            });
            const options = {
                headers: {
                    "x-session": session
                }
            };
            const category = router?.query?.c;
            const searchQuery = router?.query?.q;
            const url = !!searchQuery ? `/api/category?page=${idx}&q=${searchQuery}` : `/api/category?page=${idx}&category=${category}}`;
            const res = await fetch(url, options);
            const json = await res.json();
            setCategoryStories((0,utils/* transformArticle */.p)(json?.articles));
            window.scrollTo(0, 0);
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pv2 ph4 flex flex-column justify-center w-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(other_stories/* default */.Z, {
                stories: categoryStories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                onNextClick: handleNextClick
            })
        ]
    });
};
/* harmony default export */ const category_list = (CategoryList);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/news/index.js






function SearchCategory({ stories , pages  }) {
    const { 0: categoryStories , 1: setCategoryStories  } = (0,hooks_.useState)(stories);
    const imageUrls = stories.map((story)=>story.urlToImage);
    (0,hooks_.useEffect)(()=>{
        if (stories !== categoryStories) {
            setCategoryStories(stories);
        }
    }, [
        stories
    ]);
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
                    categoryStories,
                    setCategoryStories,
                    pages
                },
                children: categoryStories.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(category_list, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
    const server = getServerUrl();
    const searchQuery = context?.query?.q;
    const page = context?.query?.pg || "1";
    const category = context?.query?.c;
    if (searchQuery) {
        const res = await fetch(`${server}/api/category?q=${searchQuery}&page=${page}`);
        const json = await res.json();
        const stories = (0,utils/* transformArticle */.p)(json?.articles);
        const pages = Math.ceil((json?.totalResults || 0) / 12);
        return {
            props: {
                stories,
                pages
            }
        };
    }
    const res1 = await fetch(`${server}/api/category?category=${category}&page=${page}`);
    const json1 = await res1.json();
    const stories1 = (0,utils/* transformArticle */.p)(json1?.articles);
    const pages1 = Math.ceil((json1?.totalResults || 0) / 12);
    return {
        props: {
            stories: stories1,
            pages: pages1
        }
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8108:
/***/ ((module) => {

module.exports = require("preact");

/***/ }),

/***/ 1718:
/***/ ((module) => {

module.exports = require("preact/hooks");

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
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(7022)));
module.exports = __webpack_exports__;

})();