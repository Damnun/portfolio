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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gtag */ \"./src/lib/gtag.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/**\n * @description SEO를 위해 본인의 정보로 수정해주세요.\n */ const DEFAULT_SEO = {\n    title: \"이재헌 | Back-End Dev\",\n    description: \"안녕하세요, 백엔드 개발자 홍길동입니다.\",\n    canonical: \"https://github.com/Damnun\",\n    openGraph: {\n        type: \"website\",\n        locale: \"ko_KR\",\n        url: \"https://github.com/Damnun\",\n        title: \"이재헌 | Back-End Dev\",\n        site_name: \"이재헌 | Back-End Dev\",\n        images: [\n            {\n                url: \"/share.png\",\n                width: 285,\n                height: 167,\n                alt: \"이재헌 | Back-End Dev\"\n            }\n        ]\n    },\n    additionalLinkTags: [\n        {\n            rel: \"icon\",\n            href: \"/favicon.ico\"\n        }\n    ],\n    additionalMetaTags: [\n        {\n            name: \"application-name\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"msapplication-tooltip\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"viewport\",\n            content: \"width=device-width, initial-scale=1\"\n        }\n    ]\n};\nconst GA_TRACKING_ID = \"G-NY2755775J\";\nconst App = (param)=>{\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        router.events.on(\"hashChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n            router.events.off(\"hashChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {\n                ...DEFAULT_SEO\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(App, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDUTtBQUNNO0FBRVI7QUFDRTtBQUNOO0FBRWhDOztDQUVDLEdBQ0QsTUFBTUssY0FBYztJQUNsQkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsV0FBVztRQUNUQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsS0FBSztRQUNMTixPQUFPO1FBQ1BPLFdBQVc7UUFDWEMsUUFBUTtZQUNOO2dCQUNFRixLQUFLO2dCQUNMRyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxLQUFLO1lBQ1A7U0FDRDtJQUNIO0lBQ0FDLG9CQUFvQjtRQUNsQjtZQUNFQyxLQUFLO1lBQ0xDLE1BQU07UUFDUjtLQUNEO0lBQ0RDLG9CQUFvQjtRQUNsQjtZQUNFQyxNQUFNO1lBQ05DLFNBQVM7UUFDWDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7S0FDRDtBQUNIO0FBRUEsTUFBTUMsaUJBQWlCQyxjQUF3QztBQUUvRCxNQUFNRyxNQUFNLFNBQXdDO1FBQXZDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZOztJQUM3QyxNQUFNQyxTQUFTNUIsc0RBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTTRCLG9CQUFvQixDQUFDcEIsTUFBYTtZQUN0Q1YsK0NBQWEsQ0FBQ1U7UUFDaEI7UUFDQW1CLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1Qkg7UUFDeENELE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHNCQUFzQkg7UUFDdkMsT0FBTyxJQUFNO1lBQ1hELE9BQU9HLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qko7WUFDekNELE9BQU9HLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHNCQUFzQko7UUFDMUM7SUFDRixHQUFHO1FBQUNELE9BQU9HLE1BQU07S0FBQztJQUVsQixxQkFDRTs7MEJBQ0UsOERBQUNsQyxnREFBVUE7Z0JBQUUsR0FBR0ssV0FBVzs7Ozs7OzBCQUMzQiw4REFBQ0osc0RBQWFBO2dCQUFDb0MsV0FBVTswQkFDdkIsNEVBQUNSO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0F2Qk1GOztRQUNXekIsa0RBQVNBOzs7S0FEcEJ5QjtBQTJCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiLi4vbGliL2d0YWdcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gU0VP66W8IOychO2VtCDrs7jsnbjsnZgg7KCV67O066GcIOyImOygle2VtOyjvOyEuOyalC5cbiAqL1xuY29uc3QgREVGQVVMVF9TRU8gPSB7XG4gIHRpdGxlOiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICBkZXNjcmlwdGlvbjogXCLslYjrhZXtlZjshLjsmpQsIOuwseyXlOuTnCDqsJzrsJzsnpAg7ZmN6ri464+Z7J6F64uI64ukLlwiLFxuICBjYW5vbmljYWw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RhbW51blwiLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICBsb2NhbGU6IFwia29fS1JcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RhbW51blwiLFxuICAgIHRpdGxlOiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgIHNpdGVfbmFtZTogXCLsnbTsnqztl4wgfCBCYWNrLUVuZCBEZXZcIixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcIi9zaGFyZS5wbmdcIixcbiAgICAgICAgd2lkdGg6IDI4NSxcbiAgICAgICAgaGVpZ2h0OiAxNjcsXG4gICAgICAgIGFsdDogXCLsnbTsnqztl4wgfCBCYWNrLUVuZCBEZXZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYWRkaXRpb25hbExpbmtUYWdzOiBbXG4gICAge1xuICAgICAgcmVsOiBcImljb25cIixcbiAgICAgIGhyZWY6IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgfSxcbiAgXSxcbiAgYWRkaXRpb25hbE1ldGFUYWdzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJhcHBsaWNhdGlvbi1uYW1lXCIsXG4gICAgICBjb250ZW50OiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtc2FwcGxpY2F0aW9uLXRvb2x0aXBcIixcbiAgICAgIGNvbnRlbnQ6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUztcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IFVSTCkgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpO1xuICAgIH07XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJoYXNoQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJoYXNoQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERlZmF1bHRTZW8gey4uLkRFRkFVTFRfU0VPfSAvPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0U2VvIiwiVGhlbWVQcm92aWRlciIsImd0YWciLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJERUZBVUxUX1NFTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYW5vbmljYWwiLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwidXJsIiwic2l0ZV9uYW1lIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhZGRpdGlvbmFsTGlua1RhZ3MiLCJyZWwiLCJocmVmIiwiYWRkaXRpb25hbE1ldGFUYWdzIiwibmFtZSIsImNvbnRlbnQiLCJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwiYXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});