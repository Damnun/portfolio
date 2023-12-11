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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/gtag.ts":
/*!*************************!*\
  !*** ./src/lib/gtag.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"G-NY2755775J\";\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\nconst event = ({ action , category , label , value  })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2d0YWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxNQUFNQSxpQkFBaUJDLGNBQXdDO0FBRXhELE1BQU1HLFdBQVcsQ0FBQ0MsTUFBYTtJQUNsQ0MsT0FBT0MsSUFBSSxDQUFDLFVBQVVQLGdCQUFnQjtRQUNsQ1EsV0FBV0g7SUFDZjtBQUNKLEVBQUU7QUFTSyxNQUFNSSxRQUFRLENBQUMsRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFhLEdBQUs7SUFDcEVQLE9BQU9DLElBQUksQ0FBQyxTQUFTRyxRQUFRO1FBQ3pCSSxnQkFBZ0JIO1FBQ2hCSSxhQUFhSDtRQUNiQyxPQUFPQTtJQUNYO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1zam9sZWVlLy4vc3JjL2xpYi9ndGFnLnRzP2I3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1M7XG5cbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmw6IFVSTCkgPT4ge1xuICAgIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgICAgIHBhZ2VfcGF0aDogdXJsLFxuICAgIH0pO1xufTtcblxuaW50ZXJmYWNlIEdUYWdFdmVudCB7XG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9OiBHVGFnRXZlbnQpID0+IHtcbiAgICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwge1xuICAgICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgIH0pO1xufTtcblxuIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/gtag.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gtag */ \"./src/lib/gtag.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/**\n * @description SEO를 위해 본인의 정보로 수정해주세요.\n */ const DEFAULT_SEO = {\n    title: \"이재헌 | Back-End Dev\",\n    description: \"안녕하세요, 백엔드 개발자 홍길동입니다.\",\n    canonical: \"https://github.com/Damnun\",\n    openGraph: {\n        type: \"website\",\n        locale: \"ko_KR\",\n        url: \"https://github.com/Damnun\",\n        title: \"이재헌 | Back-End Dev\",\n        site_name: \"이재헌 | Back-End Dev\",\n        images: [\n            {\n                url: \"/share.png\",\n                width: 285,\n                height: 167,\n                alt: \"이재헌 | Back-End Dev\"\n            }\n        ]\n    },\n    additionalLinkTags: [\n        {\n            rel: \"icon\",\n            href: \"/favicon.ico\"\n        }\n    ],\n    additionalMetaTags: [\n        {\n            name: \"application-name\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"msapplication-tooltip\",\n            content: \"이재헌 | Back-End Dev\"\n        },\n        {\n            name: \"viewport\",\n            content: \"width=device-width, initial-scale=1\"\n        }\n    ]\n};\nconst GA_TRACKING_ID = \"G-NY2755775J\";\nconst App = ({ Component , pageProps  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        router.events.on(\"hashChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n            router.events.off(\"hashChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {\n                ...DEFAULT_SEO\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jaeheon/Desktop/Dev/portfolio/src/pages/_app.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1E7QUFDTTtBQUVSO0FBQ0U7QUFDTjtBQUVoQzs7Q0FFQyxHQUNELE1BQU1LLGNBQWM7SUFDbEJDLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLFdBQVc7UUFDVEMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTE4sT0FBTztRQUNQTyxXQUFXO1FBQ1hDLFFBQVE7WUFDTjtnQkFDRUYsS0FBSztnQkFDTEcsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSztZQUNQO1NBQ0Q7SUFDSDtJQUNBQyxvQkFBb0I7UUFDbEI7WUFDRUMsS0FBSztZQUNMQyxNQUFNO1FBQ1I7S0FDRDtJQUNEQyxvQkFBb0I7UUFDbEI7WUFDRUMsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLFNBQVM7UUFDWDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsU0FBUztRQUNYO0tBQ0Q7QUFDSDtBQUVBLE1BQU1DLGlCQUFpQkMsY0FBd0M7QUFFL0QsTUFBTUcsTUFBTSxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQUs7SUFDbEQsTUFBTUMsU0FBUzVCLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU00QixvQkFBb0IsQ0FBQ3BCLE1BQWE7WUFDdENWLCtDQUFhLENBQUNVO1FBQ2hCO1FBQ0FtQixPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJIO1FBQ3hDRCxPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxzQkFBc0JIO1FBQ3ZDLE9BQU8sSUFBTTtZQUNYRCxPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJKO1lBQ3pDRCxPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxzQkFBc0JKO1FBQzFDO0lBQ0YsR0FBRztRQUFDRCxPQUFPRyxNQUFNO0tBQUM7SUFFbEIscUJBQ0U7OzBCQUNFLDhEQUFDbEMsZ0RBQVVBO2dCQUFFLEdBQUdLLFdBQVc7Ozs7OzswQkFDM0IsOERBQUNKLHNEQUFhQTtnQkFBQ29DLFdBQVU7MEJBQ3ZCLDRFQUFDUjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBSUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tc2pvbGVlZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gXCIuLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTRU/rpbwg7JyE7ZW0IOuzuOyduOydmCDsoJXrs7TroZwg7IiY7KCV7ZW07KO87IS47JqULlxuICovXG5jb25zdCBERUZBVUxUX1NFTyA9IHtcbiAgdGl0bGU6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gIGRlc2NyaXB0aW9uOiBcIuyViOuFle2VmOyEuOyalCwg67Cx7JeU65OcIOqwnOuwnOyekCDtmY3quLjrj5nsnoXri4jri6QuXCIsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL2dpdGh1Yi5jb20vRGFtbnVuXCIsXG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgIGxvY2FsZTogXCJrb19LUlwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGFtbnVuXCIsXG4gICAgdGl0bGU6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gICAgc2l0ZV9uYW1lOiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgIGltYWdlczogW1xuICAgICAge1xuICAgICAgICB1cmw6IFwiL3NoYXJlLnBuZ1wiLFxuICAgICAgICB3aWR0aDogMjg1LFxuICAgICAgICBoZWlnaHQ6IDE2NyxcbiAgICAgICAgYWx0OiBcIuydtOyerO2XjCB8IEJhY2stRW5kIERldlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBhZGRpdGlvbmFsTGlua1RhZ3M6IFtcbiAgICB7XG4gICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgaHJlZjogXCIvZmF2aWNvbi5pY29cIixcbiAgICB9LFxuICBdLFxuICBhZGRpdGlvbmFsTWV0YVRhZ3M6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImFwcGxpY2F0aW9uLW5hbWVcIixcbiAgICAgIGNvbnRlbnQ6IFwi7J207J6s7ZeMIHwgQmFjay1FbmQgRGV2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1zYXBwbGljYXRpb24tdG9vbHRpcFwiLFxuICAgICAgY29udGVudDogXCLsnbTsnqztl4wgfCBCYWNrLUVuZCBEZXZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIixcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogVVJMKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcImhhc2hDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcImhhc2hDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGVmYXVsdFNlbyB7Li4uREVGQVVMVF9TRU99IC8+XG4gICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkRlZmF1bHRTZW8iLCJUaGVtZVByb3ZpZGVyIiwiZ3RhZyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkRFRkFVTFRfU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJzaXRlX25hbWUiLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFkZGl0aW9uYWxMaW5rVGFncyIsInJlbCIsImhyZWYiLCJhZGRpdGlvbmFsTWV0YVRhZ3MiLCJuYW1lIiwiY29udGVudCIsIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJhdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();