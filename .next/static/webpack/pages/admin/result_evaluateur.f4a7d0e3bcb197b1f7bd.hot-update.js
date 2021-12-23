"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/result_evaluateur",{

/***/ "./pages/admin/result_evaluateur.js":
/*!******************************************!*\
  !*** ./pages/admin/result_evaluateur.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Result_Evaluateur; }
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


var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\pages\\admin\\result_evaluateur.js",
    _s = $RefreshSig$();







function Result_Evaluateur() {
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
              return fetch("/api/users/votant?type=2");

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
              return fetch("/api/users/result?type=2");

            case 2:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 15;
                break;
              }

              if (!(response.status === 204)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 15;
              break;

            case 7:
              _context2.next = 9;
              return response.json();

            case 9:
              _data2 = _context2.sent;
              setResult(_data2); // setNb(data.users.length)

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
                  label: 'resultats du meilleur évaluateur'
                }]
              }); // isVide(false)

            case 15:
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
      lineNumber: 68,
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
        columnNumber: 21
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
          lineNumber: 83,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Result_Evaluateur, "Yp2QtzAMKknjxNrp6FL0f54Cm4s=");

_c = Result_Evaluateur;

var _c;

$RefreshReg$(_c, "Result_Evaluateur");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzdWx0X2V2YWx1YXRldXIuZjRhN2QwZTNiY2IxOTdiMWY3YmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ksaUJBQVQsR0FBNkI7QUFBQTs7QUFFeEMsa0JBQTRCRCwrQ0FBUSxFQUFwQztBQUFBLE1BQU9FLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QkgsK0NBQVEsRUFBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBb0JMLCtDQUFRLEVBQTVCO0FBQUEsTUFBT00sRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBRUFSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaUyxJQUFBQSxXQUFXO0FBQ1hDLElBQUFBLGFBQWEsR0FGRCxDQUdaO0FBQ0E7QUFDQTtBQUNILEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBTndDLFdBY3pCQSxhQWR5QjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2VEFjeEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLENBQUMsMEJBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsY0FBQUEsUUFEVjs7QUFBQSxtQkFFUUEsUUFBUSxDQUFDQyxFQUZqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFHWUQsUUFBUSxDQUFDRSxNQUFULEtBQW9CLEdBSGhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU0rQkYsUUFBUSxDQUFDRyxJQUFULEVBTi9COztBQUFBO0FBTWtCVixjQUFBQSxLQU5sQjtBQU9ZO0FBQ0FHLGNBQUFBLEtBQUssQ0FBQ0gsS0FBSSxDQUFDVyxLQUFMLENBQVdDLE1BQVosQ0FBTDs7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWR3QztBQUFBO0FB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dWF0ZXVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQge0FkbWluTmF2fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZG1pbk5hdlwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0X0V2YWx1YXRldXIoKSB7XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbbmIsIHNldE5iXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE9yYXRldXJzKClcclxuICAgICAgICBnZXRPcmF0ZXVyc05iKClcclxuICAgICAgICAvLyBpZihyZXN1bHQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPcmF0ZXVyc05iKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL3ZvdGFudD90eXBlPTJcIik7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSgpKVxyXG4gICAgICAgICAgICAgICAgc2V0TmIoZGF0YS51c2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnMvcmVzdWx0P3R5cGU9MlwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldE5iKGRhdGEudXNlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgbGV0IGZvbyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb28ucHVzaChkYXRhLnVzZXJzW2ldLm5vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gocGFyc2VJbnQoZGF0YS51c2Vyc1tpXS5fc3VtLnZvaXgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnXSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGZvbyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNzcwZDI0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAncmVzdWx0YXRzIGR1IG1laWxsZXVyIMOpdmFsdWF0ZXVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpc1ZpZGUoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBZG1pbk5hdi8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XHJcblxyXG4gICAgICAgICAgICAgICAge25iID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgdW5kZXJsaW5lXCIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5MZWZ0OiAnNTAlJ319Pk5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSB2b3RhbnQgOiB7bmJ9PC9sYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyNSUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQmFyIiwiQWRtaW5OYXYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlc3VsdF9FdmFsdWF0ZXVyIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGF0YSIsInNldERhdGEiLCJuYiIsInNldE5iIiwiZ2V0T3JhdGV1cnMiLCJnZXRPcmF0ZXVyc05iIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzIiwianNvbiIsInVzZXJzIiwibGVuZ3RoIiwiZm9vIiwicmVzIiwiaSIsInB1c2giLCJub20iLCJwYXJzZUludCIsIl9zdW0iLCJ2b2l4IiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbCIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJyZXNwb25zaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==