"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/first";
exports.ids = ["pages/api/posts/first"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFdkMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RlLXZpYWphci1mYXotYmVtLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/posts/first.ts":
/*!**************************************!*\
  !*** ./src/pages/api/posts/first.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(api)/./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.post.findFirst();\n    return res.status(200).json(posts);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzL2ZpcnN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBR3ZCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QixDQUFDO0lBRUQsTUFBTUMsUUFBUSxNQUFNUCw4REFBcUI7SUFFekMsT0FBT0csSUFBSUUsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQ0g7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RlLXZpYWphci1mYXotYmVtLy4vc3JjL3BhZ2VzL2FwaS9wb3N0cy9maXJzdC50cz9jMWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRGaXJzdCgpO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdHMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwicG9zdHMiLCJwb3N0IiwiZmluZEZpcnN0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/posts/first.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/posts/first.ts"));
module.exports = __webpack_exports__;

})();