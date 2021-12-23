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
    getOrateurs(); // if(result != undefined) {
    //
    // }
  }, []);

  function getOrateurs() {
    return _getOrateurs.apply(this, arguments);
  }

  function _getOrateurs() {
    _getOrateurs = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, _data, foo, res, i;

      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/users/result?type=1");

            case 2:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 18;
                break;
              }

              if (!(response.status === 204)) {
                _context.next = 7;
                break;
              }

              _context.next = 18;
              break;

            case 7:
              _context.next = 9;
              return response.json();

            case 9:
              _data = _context.sent;
              setResult(_data.users);
              alert(_data.users.length);
              console.log(_data.users);
              setNb(_data.users.length);
              foo = [];
              res = [];

              for (i = 0; i < _data.users.length; i++) {
                foo.push(_data.users[i].nom);
                res.push(parseInt(_data.users[i]._sum.voix));
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

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getOrateurs.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AdminNav__WEBPACK_IMPORTED_MODULE_3__.AdminNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 59,
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
          lineNumber: 61,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzdWx0X29yYXRldXIuN2E5YzA4NGI0YTExMzUzNDkzMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ksTUFBVCxHQUFrQjtBQUFBOztBQUU3QixrQkFBNEJELCtDQUFRLEVBQXBDO0FBQUEsTUFBT0UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCSCwrQ0FBUSxFQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFvQkwsK0NBQVEsRUFBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFFQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFLO0FBQ1hTLElBQUFBLFdBQVcsR0FEQSxDQUVYO0FBQ0E7QUFDQTtBQUNILEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBTjZCLFdBYWRBLFdBYmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlRBYTdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsS0FBSyxDQUFDLDBCQUFELENBRGhDOztBQUFBO0FBQ1VDLGNBQUFBLFFBRFY7O0FBQUEsbUJBRU9BLFFBQVEsQ0FBQ0MsRUFGaEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBR1lELFFBQVEsQ0FBQ0UsTUFBVCxLQUFvQixHQUhoQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFNK0JGLFFBQVEsQ0FBQ0csSUFBVCxFQU4vQjs7QUFBQTtBQU1rQlQsY0FBQUEsS0FObEI7QUFPWUQsY0FBQUEsU0FBUyxDQUFDQyxLQUFJLENBQUNVLEtBQU4sQ0FBVDtBQUNBQyxjQUFBQSxLQUFLLENBQUNYLEtBQUksQ0FBQ1UsS0FBTCxDQUFXRSxNQUFaLENBQUw7QUFDQUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQUksQ0FBQ1UsS0FBakI7QUFDQVAsY0FBQUEsS0FBSyxDQUFDSCxLQUFJLENBQUNVLEtBQUwsQ0FBV0UsTUFBWixDQUFMO0FBQ0lHLGNBQUFBLEdBWGhCLEdBV3NCLEVBWHRCO0FBWWdCQyxjQUFBQSxHQVpoQixHQVlzQixFQVp0Qjs7QUFhWSxtQkFBU0MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR2pCLEtBQUksQ0FBQ1UsS0FBTCxDQUFXRSxNQUEvQixFQUF1Q0ssQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q0YsZ0JBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTbEIsS0FBSSxDQUFDVSxLQUFMLENBQVdPLENBQVgsRUFBY0UsR0FBdkI7QUFDQUgsZ0JBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRSxRQUFRLENBQUNwQixLQUFJLENBQUNVLEtBQUwsQ0FBV08sQ0FBWCxFQUFjSSxJQUFkLENBQW1CQyxJQUFwQixDQUFqQjtBQUNILGVBaEJiLENBaUJZOzs7QUFDQXJCLGNBQUFBLE9BQU8sQ0FBQztBQUNKO0FBQ0FzQixnQkFBQUEsTUFBTSxFQUFFUixHQUZKO0FBR0pTLGdCQUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJeEIsa0JBQUFBLElBQUksRUFBRWdCLEdBRFY7QUFFSVMsa0JBQUFBLGVBQWUsRUFBRSxTQUZyQjtBQUdJQyxrQkFBQUEsS0FBSyxFQUFFO0FBSFgsaUJBRE07QUFITixlQUFELENBQVAsQ0FsQlosQ0E2Qlk7O0FBN0JaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYjZCO0FBQUE7QUFBQTs7QUFpRDdCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsUUFBQUEsU0FBUyxFQUFDO0FBQVgsT0FBWjtBQUFBLGlCQUVLekIsRUFBRSxHQUFDLENBQUgsZ0JBQU87QUFBTyxpQkFBUyxFQUFDLCtCQUFqQjtBQUFpRCxhQUFLLEVBQUU7QUFBQzBCLFVBQUFBLFNBQVMsRUFBRSxRQUFaO0FBQXNCQyxVQUFBQSxVQUFVLEVBQUU7QUFBbEMsU0FBeEQ7QUFBQSwwQ0FBc0gzQixFQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUCxHQUEySSxJQUZoSixlQUdJO0FBQUssYUFBSyxFQUFFO0FBQUM0QixVQUFBQSxLQUFLLEVBQUMsR0FBUDtBQUFZQyxVQUFBQSxPQUFPLEVBQUUsTUFBckI7QUFBNEJGLFVBQUFBLFVBQVUsRUFBRSxLQUF4QztBQUErQ0YsVUFBQUEsU0FBUyxFQUFDLEVBQXpEO0FBQTZESyxVQUFBQSxjQUFjLEVBQUUsUUFBN0U7QUFBdUZDLFVBQUFBLFVBQVUsRUFBRSxRQUFuRztBQUE2R0MsVUFBQUEsWUFBWSxFQUFFO0FBQTNILFNBQVo7QUFBQSwrQkFDSSw4REFBQyxnREFBRDtBQUNJLGNBQUksRUFBRWxDLElBRFY7QUFFSSxpQkFBTyxFQUFFO0FBQ0xtQyxZQUFBQSxVQUFVLEVBQUMsSUFETjtBQUVMVCxZQUFBQSxLQUFLLEVBQUU7QUFGRjtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQWtCSDs7R0FuRXVCN0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3Jlc3VsdF9vcmF0ZXVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQge0FkbWluTmF2fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZG1pbk5hdlwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0KCkge1xyXG5cclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW25iLCBzZXROYl0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGdldE9yYXRldXJzKClcclxuICAgICAgICAvLyBpZihyZXN1bHQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPcmF0ZXVycygpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9yZXN1bHQ/dHlwZT0xXCIpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoZGF0YS51c2Vycyk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLnVzZXJzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudXNlcnMpXHJcbiAgICAgICAgICAgICAgICBzZXROYihkYXRhLnVzZXJzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGxldCBmb28gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vLnB1c2goZGF0YS51c2Vyc1tpXS5ub20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHBhcnNlSW50KGRhdGEudXNlcnNbaV0uX3N1bS52b2l4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBmb28sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzc3MGQyNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3Jlc3VsdGF0cyBkdSBtZWlsbGV1ciBvcmF0ZXVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpc1ZpZGUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBZG1pbk5hdi8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6MzB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7bmI+MCA/IDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIHVuZGVybGluZVwiIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luTGVmdDogJzUwJSd9fT5Ob21icmUgZGUgdm90YW50IDoge25ifTwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDo5MDAsIGRpc3BsYXk6ICdmbGV4JyxtYXJnaW5MZWZ0OiAnMjUlJywgbWFyZ2luVG9wOjUwLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJhciIsIkFkbWluTmF2IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZXN1bHQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJkYXRhIiwic2V0RGF0YSIsIm5iIiwic2V0TmIiLCJnZXRPcmF0ZXVycyIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsInN0YXR1cyIsImpzb24iLCJ1c2VycyIsImFsZXJ0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZvbyIsInJlcyIsImkiLCJwdXNoIiwibm9tIiwicGFyc2VJbnQiLCJfc3VtIiwidm9peCIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwicmVzcG9uc2l2ZSJdLCJzb3VyY2VSb290IjoiIn0=