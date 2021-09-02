self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\components\\Home.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      orateurs = _useState[0],
      setOrateurs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      vide = _useState2[0],
      isVide = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      voter = _useState3[0],
      isVoter = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      choix = _useState4[0],
      setChoix = _useState4[1]; // const [ip, setIp] = useState()


  var date = new Date().toISOString().substr(0, 10).replace('T', ' ');
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getOrateurs();
  }, []); // const submit = ()=> {
  // 	console.log(choix.nom)
  // 	console.log(choix.length)
  // }

  var submit = /*#__PURE__*/function () {
    var _ref = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var vote, response;
      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(choix != null && choix.nom && choix.type && choix.dateSeance)) {
                _context.next = 13;
                break;
              }

              vote = {
                nom: choix.nom,
                type: choix.type,
                dateSeance: choix.dateSeance
              };
              _context.next = 4;
              return fetch('/api/users/vote', {
                method: 'POST',
                body: JSON.stringify(vote)
              });

            case 4:
              response = _context.sent;
              console.log(response);

              if (response.ok) {
                _context.next = 10;
                break;
              }

              throw new Error(response.statusText);

            case 10:
              if (response.status == 201) {
                alert('Vote effectué avec succès !');
                window.location.reload();
                isVoter(true);
                localStorage.setItem("vot_or", 'true');
                localStorage.setItem("date_or", date); // setNom('')
                // setType('')
                // setDateSeance('')
              }

            case 11:
              _context.next = 14;
              break;

            case 13:
              alert('Veuillez choisir un candidat !');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  function getOrateurs() {
    return _getOrateurs.apply(this, arguments);
  }

  function _getOrateurs() {
    _getOrateurs = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var ip, response, data;
      return D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('https://api.db-ip.com/v2/free/self');

            case 2:
              ip = _context2.sent;
              _context2.next = 5;
              return fetch("/api/users?type=1");

            case 5:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 16;
                break;
              }

              if (!(response.status === 204)) {
                _context2.next = 11;
                break;
              }

              isVide(true);
              _context2.next = 16;
              break;

            case 11:
              _context2.next = 13;
              return response.json();

            case 13:
              data = _context2.sent;
              setOrateurs(data);
              isVide(false);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getOrateurs.apply(this, arguments);
  }

  var change = function change(value) {
    // console.log(value);
    setChoix(value);
  }; // console.log(vide)


  if (orateurs.length > 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:container flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:w-full md:w-5/12 lg:w-5/12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/../public/logo.jpg",
            width: 200,
            height: 200
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "border-2 p-4",
          style: {
            marginBottom: 50
          },
          children: !vide ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-xl h-16",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "Note : "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 38
              }, this), "Choisissez votre meilleur Orateur"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 9
            }, this), orateurs.map(function (value) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "rounded border-2 sm:w-full mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "flex items-center h-12",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    id: value.id,
                    value: value,
                    name: "platform",
                    type: "radio",
                    className: "w-14 h-5",
                    onChange: function onChange() {
                      return change(value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 13
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "vote",
                    className: "text-xl",
                    children: value.nom
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 13
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 12
                }, _this)
              }, value.id, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 11
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, this), localStorage.getItem('vot_or') && localStorage.getItem('date_or') == date ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: 'flex',
                justifyContent: 'space-between'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  color: 'green'
                },
                children: "Votre vote a \xE9t\xE9 pris en compte !"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 12
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                  href: "/evaluation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    style: {
                      color: 'royalblue',
                      textDecoration: 'underline'
                    },
                    children: "Prochain vote-->"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 11
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex justify-items-end",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "text-white w-full text-xl px-12",
                  onClick: submit,
                  children: "Valider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 12
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 11
            }, this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-center rounded h-10",
            style: {
              backgroundColor: "#c82333",
              color: '#fff',
              alignItems: 'center'
            },
            children: "Aucun enregistrement trouv\xE9 !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:container flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:w-full md:w-5/12 lg:w-5/12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/../public/logo.jpg",
            width: 200,
            height: 200
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "border-2 p-4",
          style: {
            marginBottom: 50
          },
          children: !vide ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-center rounded h-10",
            style: {
              backgroundColor: "#c82333",
              color: '#fff',
              alignItems: 'center'
            },
            children: "Aucun enregistrement trouv\xE9 !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 4
    }, this);
  }
}

_s(Home, "h56GxLfJ0je2AeQEQFiSMFHZvIg=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIm9yYXRldXJzIiwic2V0T3JhdGV1cnMiLCJ2aWRlIiwiaXNWaWRlIiwidm90ZXIiLCJpc1ZvdGVyIiwiY2hvaXgiLCJzZXRDaG9peCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwiZ2V0T3JhdGV1cnMiLCJzdWJtaXQiLCJub20iLCJ0eXBlIiwiZGF0ZVNlYW5jZSIsInZvdGUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJzdGF0dXMiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlwIiwianNvbiIsImRhdGEiLCJjaGFuZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImlkIiwiZ2V0SXRlbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDdkJDLFFBRHVCO0FBQUEsTUFDYkMsV0FEYTs7QUFBQSxtQkFFUEYsK0NBQVEsQ0FBQyxLQUFELENBRkQ7QUFBQSxNQUV2QkcsSUFGdUI7QUFBQSxNQUVqQkMsTUFGaUI7O0FBQUEsbUJBR0xKLCtDQUFRLENBQUMsS0FBRCxDQUhIO0FBQUEsTUFHdkJLLEtBSHVCO0FB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QTtBQUNEOztHQXBLdUJ2RCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmMTZmZDMzZWNjOWIzMDBiZDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRjb25zdCBbb3JhdGV1cnMsIHNldE9yYXRldXJzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFt2aWRlLCBpc1ZpZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3ZvdGVyLCBpc1ZvdGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtjaG9peCwgc2V0Q2hvaXhdID0gdXNlU3RhdGUobnVsbClcclxuXHQvLyBjb25zdCBbaXAsIHNldElwXSA9IHVzZVN0YXRlKClcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkucmVwbGFjZSgnVCcsICcgJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+IHtcclxuXHRcdGdldE9yYXRldXJzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdC8vIGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubm9tKVxyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubGVuZ3RoKVxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGNob2l4ICE9IG51bGwgJiYgY2hvaXgubm9tICYmIGNob2l4LnR5cGUgJiYgY2hvaXguZGF0ZVNlYW5jZSkge1xyXG5cdFx0XHRjb25zdCB2b3RlID0ge1xyXG5cdFx0XHRcdG5vbTogY2hvaXgubm9tLFxyXG5cdFx0XHRcdHR5cGU6IGNob2l4LnR5cGUsXHJcblx0XHRcdFx0ZGF0ZVNlYW5jZTogY2hvaXguZGF0ZVNlYW5jZVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vycy92b3RlJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZvdGUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YWxlcnQoJ1ZvdGUgZWZmZWN0dcOpIGF2ZWMgc3VjY8OocyAhJylcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHRcdGlzVm90ZXIodHJ1ZSlcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm90X29yXCIsICd0cnVlJyk7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGVfb3JcIiwgZGF0ZSk7XHJcblx0XHRcdFx0XHQvLyBzZXROb20oJycpXHJcblx0XHRcdFx0XHQvLyBzZXRUeXBlKCcnKVxyXG5cdFx0XHRcdFx0Ly8gc2V0RGF0ZVNlYW5jZSgnJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBhbGVydCgnVmV1aWxsZXogY2hvaXNpciB1biBjYW5kaWRhdCAhJylcclxuXHR9XHJcblxyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b3Rfb3InKSkpXHJcblx0XHRjb25zdCBpcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5kYi1pcC5jb20vdjIvZnJlZS9zZWxmJylcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdpcCBhZGRyZXNzJywgaXAuaXBBZGRyZXNzKVxyXG5cdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgaXAuanNvbigpXHJcblx0XHQvLyBjb25zb2xlLmxvZygnaXAgYWRkcmVzcycsIHJlcy5pcEFkZHJlc3MpXHJcblx0XHQvLyBzZXRJcChyZXMuaXBBZGRyZXNzKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0xXCIpO1xyXG5cdFx0aWYocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblx0XHRcdFx0aXNWaWRlKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0c2V0T3JhdGV1cnMoZGF0YSk7XHJcblx0XHRcdFx0aXNWaWRlKGZhbHNlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZSA9KHZhbHVlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRzZXRDaG9peCh2YWx1ZSlcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codmlkZSlcclxuXHJcblx0aWYgKG9yYXRldXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvLi4vcHVibGljL2xvZ28uanBnXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBwLTRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNTB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHshdmlkZSA/XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGgtMTZcIj48c3Ryb25nPk5vdGUgOiA8L3N0cm9uZz5DaG9pc2lzc2V6IHZvdHJlIG1laWxsZXVyIE9yYXRldXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9yYXRldXJzLm1hcCh2YWx1ZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJvcmRlci0yIHNtOnctZnVsbCBtYi04XCIga2V5PXt2YWx1ZS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJrYWRcIiB2YWx1ZT1cImthZFwiIGlkPVwia2FkXCIgb25DaGFuZ2U9e2NoYW5nZX0gLz4qL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3ZhbHVlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGxhdGZvcm1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy0xNCBoLTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKT0+Y2hhbmdlKHZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ2b3RlXCIgY2xhc3NOYW1lPSd0ZXh0LXhsJz57dmFsdWUubm9tfTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndm90X29yJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGVfb3InKSA9PSBkYXRlICkgP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSB2b3RlIGEgw6l0w6kgcHJpcyBlbiBjb21wdGUgIVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZXZhbHVhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3tjb2xvcjoncm95YWxibHVlJywgdGV4dERlY29yYXRpb246J3VuZGVybGluZSd9fT5Qcm9jaGFpbiB2b3RlLS0+PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyLTIgaC0xMCBib3JkZXItWyMzNDkwRENdIG0tNCBiZy1bIzM0OTBEQ10gdy1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGwgdGV4dC14bCBweC0xMlwiIG9uQ2xpY2s9e3N1Ym1pdH0+VmFsaWRlcjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGgtMTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNjODIzMzNcIiwgY29sb3I6ICcjZmZmJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdEF1Y3VuIGVucmVnaXN0cmVtZW50IHRyb3V2w6kgIVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvLi4vcHVibGljL2xvZ28uanBnXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBwLTRcIiAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDUwfX0+XHJcblxyXG5cdFx0XHRcdFx0XHR7IXZpZGUgP1xyXG5cdFx0XHRcdFx0XHRcdG51bGxcclxuXHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQgaC0xMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2M4MjMzM1wiLCBjb2xvcjogJyNmZmYnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXVjdW4gZW5yZWdpc3RyZW1lbnQgdHJvdXbDqSAhXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==