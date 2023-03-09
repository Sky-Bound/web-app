"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/planets",{

/***/ "./pages/planets.js":
/*!**************************!*\
  !*** ./pages/planets.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Planets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu/Menu */ \"./components/Menu/Menu.js\");\n/* harmony import */ var _components_Menu_HomeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu/HomeButton */ \"./components/Menu/HomeButton.js\");\n/* harmony import */ var _components_WeatherAPI_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WeatherAPI/weather */ \"./components/WeatherAPI/weather.js\");\n/* harmony import */ var _components_ContentBoxes_LeftBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContentBoxes/LeftBox */ \"./components/ContentBoxes/LeftBox.js\");\n/* harmony import */ var _components_ContentBoxes_RightBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContentBoxes/RightBox */ \"./components/ContentBoxes/RightBox.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Planets() {\n    _s();\n    const [planets, setPlanets] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const url = \"https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list\";\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const options = {\n            method: \"GET\",\n            headers: {\n                \"X-RapidAPI-Key\": \"cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4\",\n                \"X-RapidAPI-Host\": \"planets-info-by-newbapi.p.rapidapi.com\"\n            }\n        };\n        fetch(url, options).then((response)=>response.json()).then((response)=>{\n            console.log(response);\n            setPlanets(response);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu_HomeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WeatherAPI_weather__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentBoxes_LeftBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: d.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentBoxes_RightBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Owner\\\\Documents\\\\BCIT 2023 Spring\\\\Advanced Dynamic Content Design\\\\Final Project\\\\SkyBound-App\\\\pages\\\\planets.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Planets, \"ZG2VNKbwdLCaMssmogRsOUQQ7Xk=\");\n_c = Planets;\nvar _c;\n$RefreshReg$(_c, \"Planets\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGFuZXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDa0I7QUFDSjtBQUNZO0FBQ0E7QUFDRTtBQUNFO0FBQzVCO0FBQ2E7QUFHNUIsU0FBU1UsVUFBVTs7SUFDaEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQTtJQUNwQyxNQUFNSSxNQUFNO0lBRVpMLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNTSxVQUFVO1lBQ1pDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtZQUNyQjtRQUNGO1FBRUZDLE1BQU1KLEtBQUtDLFNBQ1ZJLElBQUksQ0FBRUMsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUMvQkYsSUFBSSxDQUFFQyxDQUFBQSxXQUFXO1lBQ2RFLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWlAsV0FBV087UUFDZixHQUNDSSxLQUFLLENBQUNDLENBQUFBLE1BQU87WUFDVkgsUUFBUUMsR0FBRyxDQUFDRTtRQUNoQjtJQUNKLEdBQUcsRUFBRTtJQUVQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXekIsMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUM0QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLVCxXQUFXekIscUVBQVc7O2tDQUMxQiw4REFBQ0UsbUVBQVVBOzs7OztrQ0FDWCw4REFBQ0Msc0VBQU9BOzs7OztrQ0FFUiw4REFBQ0Msd0VBQU9BO3dCQUNSdUIsT0FBT1EsRUFBRU4sSUFBSTs7Ozs7O2tDQUViLDhEQUFDeEIseUVBQVFBOzs7OztrQ0FFVCw4REFBQ0osNkRBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUliLENBQUM7R0E3Q3VCUTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wbGFuZXRzLmpzPzY4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudS9NZW51J1xyXG5pbXBvcnQgSG9tZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUvSG9tZUJ1dHRvbidcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9XZWF0aGVyQVBJL3dlYXRoZXInXHJcbmltcG9ydCBMZWZ0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVudEJveGVzL0xlZnRCb3gnXHJcbmltcG9ydCBSaWdodEJveCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnRCb3hlcy9SaWdodEJveCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFuZXRzKCkge1xyXG4gIGNvbnN0IFtwbGFuZXRzLCBzZXRQbGFuZXRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9wbGFuZXRzLWluZm8tYnktbmV3YmFwaS5wLnJhcGlkYXBpLmNvbS9hcGkvdjEvcGxhbmV0L2xpc3QnO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdjZDFkMzlkYTY2bXNoMDE3NGExNTE0MTc5OGEycDFiY2NjYWpzbjk3YTEyYzU3NjZlNCcsXHJcbiAgICAgICAgICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdwbGFuZXRzLWluZm8tYnktbmV3YmFwaS5wLnJhcGlkYXBpLmNvbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsLCBvcHRpb25zKVxyXG4gICAgICAgIC50aGVuIChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNldFBsYW5ldHMocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8SG9tZUJ1dHRvbiAvPlxyXG4gICAgICAgIDxXZWF0aGVyIC8+XHJcblxyXG4gICAgICAgIDxMZWZ0Qm94IFxyXG4gICAgICAgIHRpdGxlPXtkLm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmlnaHRCb3gvPlxyXG5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIk1lbnUiLCJIb21lQnV0dG9uIiwiV2VhdGhlciIsIkxlZnRCb3giLCJSaWdodEJveCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQbGFuZXRzIiwicGxhbmV0cyIsInNldFBsYW5ldHMiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/planets.js\n"));

/***/ })

});