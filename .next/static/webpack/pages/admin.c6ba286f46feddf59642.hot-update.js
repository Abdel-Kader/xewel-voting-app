"use strict";
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/Homea.js":
/*!*****************************!*\
  !*** ./components/Homea.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Homea; }
/* harmony export */ });
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\components\\Homea.js",
    _s = $RefreshSig$();






function Homea() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      orateurs = _useState[0],
      setOrateurs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      evals = _useState2[0],
      setEvals = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      impro = _useState3[0],
      setImpros = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      videO = _useState4[0],
      isVideO = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      videE = _useState5[0],
      isVideE = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      videI = _useState6[0],
      isVideI = _useState6[1];

  function getOrateurs() {
    return _getOrateurs.apply(this, arguments);
  }

  function _getOrateurs() {
    _getOrateurs = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, data;
      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/users?type=1");

            case 2:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 13;
                break;
              }

              if (!(response.status === 204)) {
                _context.next = 8;
                break;
              }

              isVideO(true);
              _context.next = 13;
              break;

            case 8:
              _context.next = 10;
              return response.json();

            case 10:
              data = _context.sent;
              setOrateurs(data);
              isVideO(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getOrateurs.apply(this, arguments);
  }

  function getEvals() {
    return _getEvals.apply(this, arguments);
  }

  function _getEvals() {
    _getEvals = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response, data;
      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/users?type=2");

            case 2:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 13;
                break;
              }

              if (!(response.status === 204)) {
                _context2.next = 8;
                break;
              }

              isVideE(true);
              _context2.next = 13;
              break;

            case 8:
              _context2.next = 10;
              return response.json();

            case 10:
              data = _context2.sent;
              setOrateurs(data);
              isVideE(false);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getEvals.apply(this, arguments);
  }

  function getImpros() {
    return _getImpros.apply(this, arguments);
  }

  function _getImpros() {
    _getImpros = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var response, data;
      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("/api/users?type=3");

            case 2:
              response = _context3.sent;

              if (!response.ok) {
                _context3.next = 13;
                break;
              }

              if (!(response.status === 204)) {
                _context3.next = 8;
                break;
              }

              isVideI(true);
              _context3.next = 13;
              break;

            case 8:
              _context3.next = 10;
              return response.json();

            case 10:
              data = _context3.sent;
              setOrateurs(data);
              isVideI(false);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getImpros.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getOrateurs(); // alert(orateurs.length)

    getEvals();
    getImpros();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "md:container flex ml-10 justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "w-3/4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "mt-10 p-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: !videO && orateurs.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
              className: "text-lg font-bold mb-5",
              style: {
                fontWeight: 'bold'
              },
              children: "Liste des \xE9valuateurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
              className: "w-full border-collapse border",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    className: "border",
                    children: "Nom et pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    className: "border",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
                children: orateurs.map(function (value) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                      className: "border-2 border-black border-opacity-50",
                      children: value.nom
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                      className: "border-2 border-black border-opacity-50",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.TrashIcon, {
                        className: "h-6 mb-1 text-red-700",
                        onClick: function onClick() {
                          return alert('sd');
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 45
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 41
                    }, _this)]
                  }, value.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 37
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this)]
          }, void 0, true) : null
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

_s(Homea, "KS9pD4La6hrjg4K5ssJxpnSkuRM=");

_c = Homea;

var _c;

$RefreshReg$(_c, "Homea");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uYzZiYTI4NmY0NmZlZGRmNTk2NDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR2UsU0FBU0csS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUM1QixrQkFBZ0NGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTBCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBMkJOLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUF5QlIsK0NBQVEsQ0FBQyxLQUFELENBQWpDO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNDLE9BQWQ7O0FBQ0EsbUJBQXlCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBakM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsT0FBZDs7QUFDQSxtQkFBeUJaLCtDQUFRLENBQUMsS0FBRCxDQUFqQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxPQUFkOztBQU40QixXQVNiQyxXQVRhO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJUQVM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsS0FBSyxDQUFDLG1CQUFELENBRGhDOztBQUFBO0FBQ1VDLGNBQUFBLFFBRFY7O0FBQUEsbUJBRU9BLFFBQVEsQ0FBQ0MsRUFGaEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBR1lELFFBQVEsQ0FBQ0UsTUFBVCxLQUFvQixHQUhoQztBQUFBO0FBQUE7QUFBQTs7QUFJWVQsY0FBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUpaO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU0rQk8sUUFBUSxDQUFDRyxJQUFULEVB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QSw0Q0FDSTtBQUFJLCtCQUFTLEVBQUMseUNBQWQ7QUFBQSxnQ0FBeURBLEtBQUssQ0FBQ0M7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUVJO0FBQUksK0JBQVMsRUFBQyx5Q0FBZDtBQUFBLDZDQUNJLDhEQUFDLCtEQUFEO0FBQVcsaUNBQVMsRUFBQyx1QkFBckI7QUFBNkMsK0JBQU8sRUFBRTtBQUFBLGlDQUFLQyxLQUFLLENBQUMsSUFBRCxDQUFWO0FBQUE7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQSxxQkFBU0YsS0FBSyxDQUFDRyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRGtCO0FBQUEsaUJBQWxCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQSwwQkFEQyxHQXVCSztBQXhCVjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0NIOztHQTNGdUI1Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RyYXNoSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVhKCkge1xyXG4gICAgY29uc3QgW29yYXRldXJzLCBzZXRPcmF0ZXVyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtldmFscywgc2V0RXZhbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaW1wcm8sIHNldEltcHJvc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt2aWRlTywgaXNWaWRlT10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2aWRlRSwgaXNWaWRlRV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2aWRlSSwgaXNWaWRlSV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0xXCIpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgaXNWaWRlTyh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRPcmF0ZXVycyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlzVmlkZU8oZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RXZhbHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0yXCIpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgaXNWaWRlRSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRPcmF0ZXVycyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlzVmlkZUUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1wcm9zKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzP3R5cGU9M1wiKTtcclxuICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgIGlzVmlkZUkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0T3JhdGV1cnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpc1ZpZGVJKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBnZXRPcmF0ZXVycygpO1xyXG4gICAgICAgIC8vIGFsZXJ0KG9yYXRldXJzLmxlbmd0aClcclxuICAgICAgICBnZXRFdmFscygpO1xyXG4gICAgICAgIGdldEltcHJvcygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXggbWwtMTAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF2aWRlTyAmJiBvcmF0ZXVycy5sZW5ndGg+MCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTVcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319Pkxpc3RlIGRlcyDDqXZhbHVhdGV1cnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItY29sbGFwc2UgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPk5vbSBldCBwcsOpbm9tPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yYXRldXJzLm1hcCh2YWx1ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3ZhbHVlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgYm9yZGVyLW9wYWNpdHktNTBcIj57dmFsdWUubm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIGJvcmRlci1vcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9XCJoLTYgbWItMSB0ZXh0LXJlZC03MDBcIiBvbkNsaWNrPXsoKT0+IGFsZXJ0KCdzZCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYXNoSWNvbiIsIkhvbWVhIiwib3JhdGV1cnMiLCJzZXRPcmF0ZXVycyIsImV2YWxzIiwic2V0RXZhbHMiLCJpbXBybyIsInNldEltcHJvcyIsInZpZGVPIiwiaXNWaWRlTyIsInZpZGVFIiwiaXNWaWRlRSIsInZpZGVJIiwiaXNWaWRlSSIsImdldE9yYXRldXJzIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJnZXRFdmFscyIsImdldEltcHJvcyIsImxlbmd0aCIsImZvbnRXZWlnaHQiLCJtYXAiLCJ2YWx1ZSIsIm5vbSIsImFsZXJ0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9