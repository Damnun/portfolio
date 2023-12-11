"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\n\n\n\n/**\n * @description SEO를 위해 본인의 정보로 수정해주세요.\n */ const DEFAULT_SEO = {\n    title: \"이재헌 | Back-End Dev\",\n    description: \"안녕하세요, 백엔드 개발자 홍길동입니다.\",\n    canonical: \"https://github.com/Damnun\",\n    openGraph: {\n        type: \"website\",\n        locale: \"ko_KR\",\n        url: \"https://github.com/Damnun\",\n        title: \"이재헌 | Back-End Dev\",\n        site_name: \"이재헌 | Back-End Dev\",\n        images: [\n            {\n                url: \"/share.png\",\n                width: 285,\n                height: 167,\n                alt: \"이재헌 | Back-End Dev\"\n            }\n        ]\n    },\n    additionalLinkTags: [\n        {\n            rel: \"icon\",\n            href: \"/favicon.ico\"\n        }\n    ],\n    additionalMetaTags: [\n        {\n            name: \"application-name\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"msapplication-tooltip\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"viewport\",\n            content: \"width=device-width, initial-scale=1\"\n        }\n    ]\n};\nconst App = (param)=>{\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {\n                ...DEFAULT_SEO\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDUTtBQUNNO0FBRzVDOztDQUVDLEdBQ0QsTUFBTUUsY0FBYztJQUNsQkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsV0FBVztRQUNUQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsS0FBSztRQUNMTixPQUFPO1FBQ1BPLFdBQVc7UUFDWEMsUUFBUTtZQUNOO2dCQUNFRixLQUFLO2dCQUNMRyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLO1lBQ1A7U0FDRDtJQUNIO0lBQ0FDLG9CQUFvQjtRQUNsQjtZQUNFQyxLQUFLO1lBQ0xDLE1BQU07UUFDUjtLQUNEO0lBQ0RDLG9CQUFvQjtRQUNsQjtZQUNFQyxNQUFNO1lBQ05DLFNBQVM7UUFDWDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7S0FDRDtBQUNIO0FBRUEsTUFBTUMsTUFBTSxTQUF3QztRQUF2QyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWTtJQUM3QyxxQkFDRTs7MEJBQ0UsOERBQUN2QixnREFBVUE7Z0JBQUUsR0FBR0UsV0FBVzs7Ozs7OzBCQUMzQiw4REFBQ0Qsc0RBQWFBO2dCQUFDdUIsV0FBVTswQkFDdkIsNEVBQUNGO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7S0FUTUY7QUFhTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTRU/rpbwg7JyE7ZW0IOuzuOyduOydmCDsoJXrs7TroZwg7IiY7KCV7ZW07KO87IS47JqULlxuICovXG5jb25zdCBERUZBVUxUX1NFTyA9IHtcbiAgdGl0bGU6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gIGRlc2NyaXB0aW9uOiBcIuyViOuFle2VmOyEuOyalCwg67Cx7JeU65OcIOqwnOuwnOyekCDtmY3quLjrj5nsnoXri4jri6QuXCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL2dpdGh1Yi5jb20vRGFtbnVuXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgIGxvY2FsZTogXCJrb19LUlwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGFtbnVuXCIsXG4gICAgdGl0bGU6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gICAgc2l0ZV9uYW1lOiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgIGltYWdlczogW1xuICAgICAge1xuICAgICAgICB1cmw6IFwiL3NoYXJlLnBuZ1wiLFxuICAgICAgICB3aWR0aDogMjg1LFxuICAgICAgICBoZWlnaHQ6IDE2NyxcbiAgICAgICAgYWx0OiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBhZGRpdGlvbmFsTGlua1RhZ3M6IFtcbiAgICB7XG4gICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgaHJlZjogXCIvZmF2aWNvbi5pY29cIixcbiAgICB9LFxuICBdLFxuICBhZGRpdGlvbmFsTWV0YVRhZ3M6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImFwcGxpY2F0aW9uLW5hbWVcIixcbiAgICAgIGNvbnRlbnQ6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1zYXBwbGljYXRpb24tdG9vbHRpcFwiLFxuICAgICAgY29udGVudDogXCLsnbTsnqztl4wgfCBCYWNrLUVuZCBEZXZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIixcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERlZmF1bHRTZW8gey4uLkRFRkFVTFRfU0VPfSAvPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0U2VvIiwiVGhlbWVQcm92aWRlciIsIkRFRkFVTFRfU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJzaXRlX25hbWUiLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFkZGl0aW9uYWxMaW5rVGFncyIsInJlbCIsImhyZWYiLCJhZGRpdGlvbmFsTWV0YVRhZ3MiLCJuYW1lIiwiY29udGVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});