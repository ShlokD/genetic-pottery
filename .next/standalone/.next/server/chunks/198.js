"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 5707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function uuidv4() {
    if (true) return "";
    return ([
        1e7
    ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c)=>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
const OtherStoriesList = ({ stories  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: stories.map((story, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "bw1 pv2 bb b--dark-green no-underline black mb4",
                href: story.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-column flex-row-l items-center w-100 pb2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-100 w-30-l flex flex-column items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-100",
                                src: story.urlToImage,
                                alt: story.title,
                                loading: "lazy"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-column items-center w-100 w-70-l ml4-l",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "truncate w-30 w-50-m w-100-l",
                                    children: story.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "ma0 w-100",
                                    children: story.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "ma0 mv3 moon-gray",
                                    children: new Date(story.publishedAt).toDateString()
                                })
                            ]
                        })
                    ]
                })
            }, `other-story-${index}-${uuidv4()}`);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherStoriesList);


/***/ }),

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

/***/ 4799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getServerUrl),
/* harmony export */   "p": () => (/* binding */ transformArticle)
/* harmony export */ });
const getServerUrl = ()=>{
    return  false ? 0 : process.env.SERVER_URL;
};
const transformArticle = (articles)=>{
    return articles?.map((article)=>{
        return {
            ...article,
            urlToImage: article.urlToImage || "/placeholder.jpg",
            title: article?.title.split("-")[0]
        };
    });
};


/***/ })

};
;