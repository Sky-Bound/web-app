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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WeatherHome; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AppText_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppText/Text */ \"./components/AppText/Text.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction WeatherHome() {\n    var _weatherData_main, _weatherData_weather;\n    _s();\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const CITY_NAME = \"Burnaby\";\n    const API_KEY = \"da099f872aba6423e0b2426fadaa778b\";\n    var units = \"metric\";\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchWeatherData = async ()=>{\n            const res = await fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(CITY_NAME, \"&units=\").concat(units, \"&appid=\").concat(API_KEY));\n            const data = await res.json();\n            setWeatherData(data);\n        };\n        fetchWeatherData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: (_weatherData_main = weatherData.main) === null || _weatherData_main === void 0 ? void 0 : _weatherData_main.temp.toFixed(0),\n                        size: \"100px\",\n                        weight: \"400\",\n                        font: \"Gelasio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"sup\", {}, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 33,\n                        columnNumber: 97\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: (_weatherData_weather = weatherData.weather) === null || _weatherData_weather === void 0 ? void 0 : _weatherData_weather[0].description,\n                        size: \"35px\",\n                        weight: \"400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_AppText_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        txt: new Date(weatherData.dt * 1000).toLocaleString(),\n                        size: \"20px\",\n                        weight: \"400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\components\\\\WeatherAPI\\\\WeatherHome.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(WeatherHome, \"fXI0sAmj29itrxQaRZQrWhx5dGc=\");\n_c = WeatherHome;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject()); // const Row = styled.div`\n //     display: flex;\n //     flex-direction: row;\n //     justify-content: center;\n //     align-items: center;\n // `;\n_c1 = Box;\nvar _c, _c1;\n$RefreshReg$(_c, \"WeatherHome\");\n$RefreshReg$(_c1, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYXRoZXJBUEkvV2VhdGhlckhvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSTtBQUNTO0FBQ0s7QUFDUjtBQUVwQixTQUFTTSxjQUFjO1FBMEJuQkMsbUJBQ0FBOztJQTFCakIsTUFBTSxDQUFDQSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTU0sWUFBWTtJQUNsQixNQUFNQyxVQUFVO0lBQ2hCLElBQUlDLFFBQVE7SUFHWlAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1RLG1CQUFtQixVQUFZO1lBQ25DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvREFBdUVILE9BQW5CRixXQUFVLFdBQXdCQyxPQUFmQyxPQUFNLFdBQWlCLE9BQVJEO1lBQzlHLE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQlIsZUFBZU87UUFDakI7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7d0JBQTRCQyxXQUFXOzs7Ozs7a0NBQ25FLDhEQUFDSDt3QkFBS0UsTUFBSzt3QkFBcUZELEtBQUk7Ozs7Ozs7Ozs7OzswQkFFdEcsOERBQUNHOztrQ0FDQyw4REFBQ2hCLHFEQUFJQTt3QkFBQ2lCLEtBQUtmLENBQUFBLG9CQUFBQSxZQUFZZ0IsSUFBSSxjQUFoQmhCLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBa0JpQixLQUFLQyxPQUFPLENBQUMsRUFBRTt3QkFBRUMsTUFBSzt3QkFBUUMsUUFBTzt3QkFBTUMsTUFBSzs7Ozs7O2tDQUFXLDhEQUFDQzs7Ozs7a0NBQ3pGLDhEQUFDeEIscURBQUlBO3dCQUFDaUIsR0FBRyxFQUFFZixDQUFBQSx1QkFBQUEsWUFBWXVCLE9BQU8sY0FBbkJ2QixrQ0FBQUEsS0FBQUEsSUFBQUEsb0JBQXFCLENBQUMsRUFBRSxDQUFDd0IsV0FBVzt3QkFBRUwsTUFBSzt3QkFBT0MsUUFBTzs7Ozs7O2tDQUNwRSw4REFBQ3RCLHFEQUFJQTt3QkFBQ2lCLEtBQUssSUFBSVUsS0FBS3pCLFlBQVkwQixFQUFFLEdBQUcsTUFBTUMsY0FBYzt3QkFBSVIsTUFBSzt3QkFBT0MsUUFBTzs7Ozs7Ozs7Ozs7Ozs7QUFJeEYsQ0FBQztHQWhDdUJyQjtLQUFBQTtBQWtDeEIsTUFBTWUsTUFBTW5CLDZEQUFVLHFCQVF0QiwwQkFBMEI7Q0FDMUIscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQiwrQkFBK0I7Q0FDL0IsMkJBQTJCO0NBQzNCLEtBQUs7TUFiQ21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2VhdGhlckFQSS9XZWF0aGVySG9tZS5qcz9iMmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9BcHBUZXh0L1RleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlckhvbWUoKSB7XHJcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IENJVFlfTkFNRSA9IFwiQnVybmFieVwiO1xyXG4gIGNvbnN0IEFQSV9LRVkgPSBcImRhMDk5Zjg3MmFiYTY0MjNlMGIyNDI2ZmFkYWE3NzhiXCI7XHJcbiAgdmFyIHVuaXRzID0gXCJtZXRyaWNcIjtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Q0lUWV9OQU1FfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke0FQSV9LRVl9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRXZWF0aGVyRGF0YShkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hXZWF0aGVyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiPjwvbGluaz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbj48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2VsYXNpbzp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFRleHQgdHh0PXt3ZWF0aGVyRGF0YS5tYWluPy50ZW1wLnRvRml4ZWQoMCl9IHNpemU9XCIxMDBweFwiIHdlaWdodD1cIjQwMFwiIGZvbnQ9XCJHZWxhc2lvXCIvPjxzdXA+PC9zdXA+XHJcbiAgICAgICAgPFRleHQgdHh0PXt3ZWF0aGVyRGF0YS53ZWF0aGVyPy5bMF0uZGVzY3JpcHRpb259IHNpemU9XCIzNXB4XCIgd2VpZ2h0PVwiNDAwXCIvPlxyXG4gICAgICAgIDxUZXh0IHR4dD17bmV3IERhdGUod2VhdGhlckRhdGEuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZygpfSBzaXplPVwiMjBweFwiIHdlaWdodD1cIjQwMFwiLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbmA7XHJcblxyXG4vLyBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIGA7Il0sIm5hbWVzIjpbImF4aW9zIiwiSGVhZCIsInN0eWxlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGV4dCIsIldlYXRoZXJIb21lIiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsIkNJVFlfTkFNRSIsIkFQSV9LRVkiLCJ1bml0cyIsImZldGNoV2VhdGhlckRhdGEiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsIkJveCIsInR4dCIsIm1haW4iLCJ0ZW1wIiwidG9GaXhlZCIsInNpemUiLCJ3ZWlnaHQiLCJmb250Iiwic3VwIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsImR0IiwidG9Mb2NhbGVTdHJpbmciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WeatherAPI/WeatherHome.js\n"));

/***/ })

});