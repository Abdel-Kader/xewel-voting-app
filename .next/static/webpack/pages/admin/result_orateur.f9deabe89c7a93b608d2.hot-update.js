"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/result_orateur",{

/***/ "./pages/admin/result_orateur.js":
/*!***************************************!*\
  !*** ./pages/admin/result_orateur.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Result; }
/* harmony export */ });
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _components_AdminNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AdminNav */ "./components/AdminNav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\pages\\admin\\result_orateur.js",
    _s = $RefreshSig$();







function Result() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      result = _useState[0],
      setResult = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      nb = _useState3[0],
      setNb = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getOrateurs();
    getOrateursNb(); // if(result != undefined) {
    //
    // }
  }, []);

  function getOrateursNb() {
    return _getOrateursNb.apply(this, arguments);
  }

  function _getOrateursNb() {
    _getOrateursNb = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, _data;

      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/users/votant?type=1");

            case 2:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 11;
                break;
              }

              if (!(response.status === 204)) {
                _context.next = 7;
                break;
              }

              _context.next = 11;
              break;

            case 7:
              _context.next = 9;
              return response.json();

            case 9:
              _data = _context.sent;
              alert(JSON.stringify(_data.users.length));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getOrateursNb.apply(this, arguments);
  }

  function getOrateurs() {
    return _getOrateurs.apply(this, arguments);
  }

  function _getOrateurs() {
    _getOrateurs = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var response, _data2, foo, res, i;

      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/users/result?type=1");

            case 2:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 16;
                break;
              }

              if (!(response.status === 204)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 16;
              break;

            case 7:
              _context2.next = 9;
              return response.json();

            case 9:
              _data2 = _context2.sent;
              setResult(_data2.users); // alert(JSON.stringify(data.users))
              // console.log(data.users)

              setNb(_data2.users.length);
              foo = [];
              res = [];

              for (i = 0; i < _data2.users.length; i++) {
                foo.push(_data2.users[i].nom);
                res.push(parseInt(_data2.users[i]._sum.voix));
              } // console.log(res)


              setData({
                // labels: ['January', 'February', 'March', 'April', 'January', 'February', 'March', 'April'],
                labels: foo,
                datasets: [{
                  data: res,
                  backgroundColor: '#770d24',
                  label: 'resultats du meilleur orateur'
                }]
              }); // isVide(false)

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getOrateurs.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AdminNav__WEBPACK_IMPORTED_MODULE_3__.AdminNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      style: {
        marginTop: 30
      },
      children: [nb > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
        className: "text-xl text-center underline",
        style: {
          textAlign: 'center',
          marginLeft: '50%'
        },
        children: ["Nombre de votant : ", nb]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        style: {
          width: 900,
          display: 'flex',
          marginLeft: '25%',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
          data: data,
          options: {
            responsive: true,
            label: false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Result, "Yp2QtzAMKknjxNrp6FL0f54Cm4s=");

_c = Result;

var _c;

$RefreshReg$(_c, "Result");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzdWx0X29yYXRldXIuZjlkZWFiZTg5YzdhOTNiNjA4ZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ksTUFBVCxHQUFrQjtBQUFBOztBQUU3QixrQkFBNEJELCtDQUFRLEVBQXBDO0FBQUEsTUFBT0UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCSCwrQ0FBUSxFQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFvQkwsK0NBQVEsRUFBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFFQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFLO0FBQ1hTLElBQUFBLFdBQVc7QUFDWEMsSUFBQUEsYUFBYSxHQUZGLENBR1g7QUFDQTtBQUNBO0FBQ0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFONkIsV0FjZEEsYUFkYztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2VEFjN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLENBQUMsMEJBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsY0FBQUEsUUFEVjs7QUFBQSxtQkFFT0EsUUFBUSxDQUFDQyxFQUZoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFHWUQsUUFBUSxDQUFDRSxNQUFULEtBQW9CLEdBSGhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU0rQkYsUUFBUSxDQUFDRyxJQUFULEVBTi9COztBQUFBO0FBTWtCVixjQUFBQSxLQU5sQjtBQU9ZVyxjQUFBQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlYixLQUFJLENBQUNjLEtBQUwsQ0FBV0MsTUFBMUIsQ0FBRCxDQUFMOztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBa0JIOztHQWhGdUI5Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzdWx0X29yYXRldXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXJ9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7QWRtaW5OYXZ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkbWluTmF2XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHQoKSB7XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbbmIsIHNldE5iXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgZ2V0T3JhdGV1cnMoKVxyXG4gICAgICAgIGdldE9yYXRldXJzTmIoKVxyXG4gICAgICAgIC8vIGlmKHJlc3VsdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE9yYXRldXJzTmIoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvdm90YW50P3R5cGU9MVwiKTtcclxuICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YS51c2Vycy5sZW5ndGgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE9yYXRldXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL3Jlc3VsdD90eXBlPTFcIik7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChkYXRhLnVzZXJzKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEudXNlcnMpKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS51c2VycylcclxuICAgICAgICAgICAgICAgIHNldE5iKGRhdGEudXNlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgbGV0IGZvbyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb28ucHVzaChkYXRhLnVzZXJzW2ldLm5vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gocGFyc2VJbnQoZGF0YS51c2Vyc1tpXS5fc3VtLnZvaXgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnXSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGZvbyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzcwZDI0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAncmVzdWx0YXRzIGR1IG1laWxsZXVyIG9yYXRldXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGlzVmlkZShmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFkbWluTmF2Lz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDozMH19PlxyXG5cclxuICAgICAgICAgICAgICAgIHtuYj4wID8gPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgdW5kZXJsaW5lXCIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5MZWZ0OiAnNTAlJ319Pk5vbWJyZSBkZSB2b3RhbnQgOiB7bmJ9PC9sYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjkwMCwgZGlzcGxheTogJ2ZsZXgnLG1hcmdpbkxlZnQ6ICcyNSUnLCBtYXJnaW5Ub3A6NTAsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGFsaWduQ29udGVudDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQmFyIiwiQWRtaW5OYXYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlc3VsdCIsInJlc3VsdCIsInNldFJlc3VsdCIsImRhdGEiLCJzZXREYXRhIiwibmIiLCJzZXROYiIsImdldE9yYXRldXJzIiwiZ2V0T3JhdGV1cnNOYiIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsInN0YXR1cyIsImpzb24iLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VycyIsImxlbmd0aCIsImZvbyIsInJlcyIsImkiLCJwdXNoIiwibm9tIiwicGFyc2VJbnQiLCJfc3VtIiwidm9peCIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwicmVzcG9uc2l2ZSJdLCJzb3VyY2VSb290IjoiIn0=