"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8108);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1718);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    stories: [],
    setStories: ()=>null
});
const useAppContext = ()=>(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);


/***/ }),

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "preact/hooks"
var hooks_ = __webpack_require__(1718);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/header/index.js




const categories = [
    {
        name: "Business",
        url: "business"
    },
    {
        name: "Sports",
        url: "sports"
    },
    {
        name: "General",
        url: "general"
    },
    {
        name: "Science",
        url: "science"
    },
    {
        name: "Entertainment",
        url: "entertainment"
    },
    {
        name: "Health",
        url: "health"
    },
    {
        name: "Technology",
        url: "technology"
    }, 
];
const Header = ()=>{
    const { 0: searchQuery , 1: setSearchQuery  } = (0,hooks_.useState)("");
    const date = new Date();
    const router = (0,router_.useRouter)();
    const selectedCategory = router.query.c;
    const handleSearch = ()=>{
        router.push(`/news?q=${searchQuery}`);
        setSearchQuery("");
    };
    const handleCategorySelect = (ev)=>{
        const value = ev.target.value;
        const selected = categories[value];
        router.push(`/news?c=${selected.url}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-column w-100 items-center justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-column flex-row-ns justify-center items-baseline items-center-m w-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pa2 flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "br4 f5 ph4 pv2 b--none bg-white",
                            placeholder: "Search for stories...",
                            value: searchQuery,
                            onChange: (ev)=>setSearchQuery(ev.target.value),
                            onKeyDown: (ev)=>{
                                if (ev.key === "Enter") {
                                    handleSearch();
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pa2 center dn-ns",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            onChange: handleCategorySelect,
                            children: categories.map((category, idx)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: idx,
                                    selected: selectedCategory === category.url,
                                    children: category.name
                                }, `category-option-${idx}`);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: "no-underline black pointer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "f1 ma0 pv4 pv2-ns pointer tc tj-ns",
                    children: [
                        "Genetic ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "dark-green",
                            children: "Pottery"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between w-100 ph4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "ma0 f4",
                        children: date.toDateString()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "ma0 f4",
                        children: "INDIA"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "w-100 bw1 b--dark-green b--solid"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dn flex-l w-100 items-baseline justify-around pb2 black-90 ph3",
                children: categories.map((category, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/news?c=${category.url}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `pa2 f4 no-underline b dib ${selectedCategory === category.url ? "bb b--dark-green bw2 dark-green" : "black"}`,
                            children: category.name
                        })
                    }, `header-${index}`);
                })
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/footer/index.js



const Footer = ()=>{
    const { 0: email , 1: setEmail  } = (0,hooks_.useState)("");
    const clearEmail = ()=>{
        setEmail("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-100 flex flex-column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-column items-center justify-center bg-near-white w-100 pv2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "f2 ma0 pa2",
                        children: "Subscribe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "ma0 pv2 ph2",
                        children: "Get the latest news delivered every morning"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-column flex-row-ns mv2 pa2 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "b--none pv2 ph4 br4 f4 w-80",
                                placeholder: "Enter your email",
                                type: "email",
                                onChange: (ev)=>setEmail(ev.target.value),
                                value: email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "pv2 ph4 white bg-dark-green mh4 b--none f4 br4 pointer w-80 mv4",
                                onClick: clearEmail,
                                children: "Subscribe"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-black white pa2 flex f5 no-underline white items-center justify-around",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "white no-underline mv2",
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "white no-underline mv2",
                            children: "Help"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "white no-underline mv2",
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "white no-underline mv2",
                            children: "Contact Us"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "white no-underline mv2",
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "white no-underline mv2",
                            children: "Privacy Policy"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./src/context/app-context.js
var app_context = __webpack_require__(1094);
;// CONCATENATED MODULE: ./src/pages/_app.js







function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Genetic Pottery"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-100 ph4 w-100 flex flex-column items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(9465)));
module.exports = __webpack_exports__;

})();