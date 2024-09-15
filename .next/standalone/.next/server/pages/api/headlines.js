"use strict";
(() => {
var exports = {};
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 4565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const whitelisted = [
    "localhost:3000",
    "geneticpottery-1-b1461366.deta.app"
];
const cache = {};
async function handler(req, res) {
    const host = req.headers.host;
    if (whitelisted.indexOf(host) === -1) {
        res.status(401).json({
            msg: "Unauth"
        });
    }
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const cacheKey = `${+date}`;
    if (cache[cacheKey]) {
        res.status(200).json(cache[cacheKey]);
    } else {
        const apiKey = process.env.API_KEY;
        const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${apiKey}`);
        const headlines = await apiResponse.json();
        cache[cacheKey] = headlines;
        res.status(200).json(headlines);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4565));
module.exports = __webpack_exports__;

})();