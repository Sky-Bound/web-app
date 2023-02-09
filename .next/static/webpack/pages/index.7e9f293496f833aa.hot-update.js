"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WeatherAPI/WeatherHome.js":
/*!**********************************************!*\
  !*** ./components/WeatherAPI/WeatherHome.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WeatherHome; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AppText_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppText/Text */ \"./components/AppText/Text.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 0.5rem;\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction WeatherHome() {\n    var _weatherData_main, _weatherData_weather;\n    _s();\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const CITY_NAME = \"Burnaby\";\n    const API_KEY = \"da099f872aba6423e0b2426fadaa778b\";\n    var units = \"metric\";\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchWeatherData = async ()=>{\n            const res = await fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(CITY_NAME, \"&units=\").concat(units, \"&appid=\").concat(API_KEY));\n            const data = await res.json();\n            setWeatherData(data);\n        };\n        fetchWeatherData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: (_weatherData_main = weatherData.main) === null || _weatherData_main === void 0 ? void 0 : _weatherData_main.temp,\n                        character: \"\\xb0\",\n                        size: \"80px\",\n                        weight: \"400\",\n                        font: \"Gelasio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: (_weatherData_weather = weatherData.weather) === null || _weatherData_weather === void 0 ? void 0 : _weatherData_weather[0].description,\n                        size: \"35px\",\n                        weight: \"400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: new Date(weatherData.dt * 1000).toLocaleString(),\n                        size: \"20px\",\n                        weight: \"400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(WeatherHome, \"fXI0sAmj29itrxQaRZQrWhx5dGc=\");\n_c = WeatherHome;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = Box;\nconst Row = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\nvar _c, _c1;\n$RefreshReg$(_c, \"WeatherHome\");\n$RefreshReg$(_c1, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYXRoZXJBUEkvV2VhdGhlckhvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSTtBQUNTO0FBQ0s7QUFDUjtBQUVwQixTQUFTTSxjQUFjO1FBMEJuQkMsbUJBQ0FBOztJQTFCakIsTUFBTSxDQUFDQSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTU0sWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBQ2hCLElBQUlDLFFBQVE7SUFHWlAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1RLG1CQUFtQixVQUFZO1lBQ25DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvREFBdUVILE9BQW5CRixXQUFVLFdBQXdCQyxPQUFmQyxPQUFNLFdBQWlCLE9BQVJEO1lBQzlHLE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQlIsZUFBZU87UUFDakI7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7d0JBQTRCQyxXQUFXOzs7Ozs7a0NBQ25FLDhEQUFDSDt3QkFBS0UsTUFBSzt3QkFBcUZELEtBQUk7Ozs7Ozs7Ozs7OzswQkFFdEcsOERBQUNHOztrQ0FDQyw4REFBQ2hCLHFEQUFJQTt3QkFBQ2lCLEtBQUtmLENBQUFBLG9CQUFBQSxZQUFZZ0IsSUFBSSxjQUFoQmhCLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBa0JpQixJQUFJO3dCQUFFQyxXQUFVO3dCQUFJQyxNQUFLO3dCQUFPQyxRQUFPO3dCQUFNQyxNQUFLOzs7Ozs7a0NBQy9FLDhEQUFDdkIscURBQUlBO3dCQUFDaUIsR0FBRyxFQUFFZixDQUFBQSx1QkFBQUEsWUFBWXNCLE9BQU8sY0FBbkJ0QixrQ0FBQUEsS0FBQUEsSUFBQUEsb0JBQXFCLENBQUMsRUFBRSxDQUFDdUIsV0FBVzt3QkFBRUosTUFBSzt3QkFBT0MsUUFBTzs7Ozs7O2tDQUNwRSw4REFBQ3RCLHFEQUFJQTt3QkFBQ2lCLEtBQUssSUFBSVMsS0FBS3hCLFlBQVl5QixFQUFFLEdBQUcsTUFBTUMsY0FBYzt3QkFBSVAsTUFBSzt3QkFBT0MsUUFBTzs7Ozs7Ozs7Ozs7Ozs7QUFJeEYsQ0FBQztHQWhDdUJyQjtLQUFBQTtBQWtDeEIsTUFBTWUsTUFBTW5CLDZEQUFVO01BQWhCbUI7QUFTTixNQUFNYyxNQUFNakMsNkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWF0aGVyQVBJL1dlYXRoZXJIb21lLmpzP2IyYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL0FwcFRleHQvVGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWF0aGVySG9tZSgpIHtcclxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgQ0lUWV9OQU1FID0gXCJCdXJuYWJ5XCI7XHJcbiAgY29uc3QgQVBJX0tFWSA9IFwiZGEwOTlmODcyYWJhNjQyM2UwYjI0MjZmYWRhYTc3OGJcIjtcclxuICB2YXIgdW5pdHMgPSBcIm1ldHJpY1wiO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtDSVRZX05BTUV9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7QVBJX0tFWX1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFdlYXRoZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luPjwvbGluaz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWxhc2lvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8VGV4dCB0eHQ9e3dlYXRoZXJEYXRhLm1haW4/LnRlbXB9IGNoYXJhY3Rlcj1cIsKwXCIgc2l6ZT1cIjgwcHhcIiB3ZWlnaHQ9XCI0MDBcIiBmb250PVwiR2VsYXNpb1wiLz5cclxuICAgICAgICA8VGV4dCB0eHQ9e3dlYXRoZXJEYXRhLndlYXRoZXI/LlswXS5kZXNjcmlwdGlvbn0gc2l6ZT1cIjM1cHhcIiB3ZWlnaHQ9XCI0MDBcIi8+XHJcbiAgICAgICAgPFRleHQgdHh0PXtuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCl9IHNpemU9XCIyMHB4XCIgd2VpZ2h0PVwiNDAwXCIvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gOyJdLCJuYW1lcyI6WyJheGlvcyIsIkhlYWQiLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRleHQiLCJXZWF0aGVySG9tZSIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJDSVRZX05BTUUiLCJBUElfS0VZIiwidW5pdHMiLCJmZXRjaFdlYXRoZXJEYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iLCJCb3giLCJ0eHQiLCJtYWluIiwidGVtcCIsImNoYXJhY3RlciIsInNpemUiLCJ3ZWlnaHQiLCJmb250Iiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsImR0IiwidG9Mb2NhbGVTdHJpbmciLCJkaXYiLCJSb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WeatherAPI/WeatherHome.js\n"));

/***/ })

});