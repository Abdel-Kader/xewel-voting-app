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
              // alert(JSON.stringify())
              setNb(_data.users.length);

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
      lineNumber: 70,
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
        lineNumber: 73,
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
          lineNumber: 75,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzdWx0X29yYXRldXIuMzNiZmY3NmIyOTM5YTJjNTg0YmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ksTUFBVCxHQUFrQjtBQUFBOztBQUU3QixrQkFBNEJELCtDQUFRLEVBQXBDO0FBQUEsTUFBT0UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCSCwrQ0FBUSxFQUFoQztBQUFBLE1BQU9JLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFvQkwsK0NBQVEsRUFBNUI7QUFBQSxNQUFPTSxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFFQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFLO0FBQ1hTLElBQUFBLFdBQVc7QUFDWEMsSUFBQUEsYUFBYSxHQUZGLENBR1g7QUFDQTtBQUNBO0FBQ0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFONkIsV0FjZEEsYUFkYztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2VEFjN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLENBQUMsMEJBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsY0FBQUEsUUFEVjs7QUFBQSxtQkFFT0EsUUFBUSxDQUFDQyxFQUZoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFHWUQsUUFBUSxDQUFDRSxNQUFULEtBQW9CLEdBSGhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU0rQkYsUUFBUSxDQUFDRyxJQUFULEVBTi9COztBQUFBO0FBTWtCVixjQUFBQSxLQU5sQjtBQU9ZO0FBQ0FHLGNBQUFBLEtBQUssQ0FBQ0gsS0FBSSxDQUFDVyxLQUFMLENBQVdDLE1BQVosQ0FBTDs7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWQ2QjtBQUFBO0FBQUE7O0FB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QUFrQkg7O0dBakZ1QjNCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9yZXN1bHRfb3JhdGV1ci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhcn0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHtBZG1pbk5hdn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRtaW5OYXZcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCgpIHtcclxuXHJcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtuYiwgc2V0TmJdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBnZXRPcmF0ZXVycygpXHJcbiAgICAgICAgZ2V0T3JhdGV1cnNOYigpXHJcbiAgICAgICAgLy8gaWYocmVzdWx0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnNOYigpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy92b3RhbnQ/dHlwZT0xXCIpO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSgpKVxyXG4gICAgICAgICAgICAgICAgc2V0TmIoZGF0YS51c2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvcmVzdWx0P3R5cGU9MVwiKTtcclxuICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEudXNlcnMpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VycykpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnVzZXJzKVxyXG4gICAgICAgICAgICAgICAgc2V0TmIoZGF0YS51c2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9vID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvby5wdXNoKGRhdGEudXNlcnNbaV0ubm9tKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChwYXJzZUludChkYXRhLnVzZXJzW2ldLl9zdW0udm9peCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogZm9vLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3NzBkMjQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdyZXN1bHRhdHMgZHUgbWVpbGxldXIgb3JhdGV1cidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gaXNWaWRlKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWRtaW5OYXYvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjMwfX0+XHJcblxyXG4gICAgICAgICAgICAgICAge25iPjAgPyA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciB1bmRlcmxpbmVcIiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkxlZnQ6ICc1MCUnfX0+Tm9tYnJlIGRlIHZvdGFudCA6IHtuYn08L2xhYmVsPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6OTAwLCBkaXNwbGF5OiAnZmxleCcsbWFyZ2luTGVmdDogJzI1JScsIG1hcmdpblRvcDo1MCwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYWxpZ25Db250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCYXIiLCJBZG1pbk5hdiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVzdWx0IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGF0YSIsInNldERhdGEiLCJuYiIsInNldE5iIiwiZ2V0T3JhdGV1cnMiLCJnZXRPcmF0ZXVyc05iIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzIiwianNvbiIsInVzZXJzIiwibGVuZ3RoIiwiZm9vIiwicmVzIiwiaSIsInB1c2giLCJub20iLCJwYXJzZUludCIsIl9zdW0iLCJ2b2l4IiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbCIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJyZXNwb25zaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==