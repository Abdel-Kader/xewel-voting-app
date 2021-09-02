"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\components\\Home.js",
    _s = $RefreshSig$();







function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      orateurs = _useState[0],
      setOrateurs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      vide = _useState2[0],
      isVide = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      voter = _useState3[0],
      isVoter = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      choix = _useState4[0],
      setChoix = _useState4[1]; // const [ip, setIp] = useState()


  var date = new Date().toISOString().substr(0, 10).replace('T', ' ');
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getOrateurs();
  }, []); // const submit = ()=> {
  // 	console.log(choix.nom)
  // 	console.log(choix.length)
  // }

  var submit = /*#__PURE__*/function () {
    var _ref = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
    _getOrateurs = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "md:container flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "sm:w-full md:w-5/12 lg:w-5/12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/logo.jpg",
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "border-2 p-4",
          style: {
            marginBottom: 50
          },
          children: !vide ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
              className: "text-xl h-16",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("strong", {
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
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "rounded border-2 sm:w-full mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "flex items-center h-12",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
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
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, this), localStorage.getItem('vot_or') && localStorage.getItem('date_or') == date ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              style: {
                display: 'flex',
                justifyContent: 'space-between'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                style: {
                  color: 'green'
                },
                children: "Votre vote a \xE9t\xE9 pris en compte !"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 12
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/evaluation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
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
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "flex justify-items-end",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "rounded border-2 h-10 border-[#3490DC] m-4 bg-[#3490DC] w-auto",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
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
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "md:container flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "sm:w-full md:w-5/12 lg:w-5/12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "border-2 p-4",
          style: {
            marginBottom: 50
          },
          children: !vide ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDllZjY2NDIxZDYyMTdkNDBiODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzlCLGtCQUFnQ0YsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT0csUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBdUJKLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxNQUFiOztBQUNBLG1CQUF5Qk4sK0NBQVEsQ0FBQyxLQUFELENBQWpDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLE9BQWQ7O0FBQ0EsbUJBQTBCUiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZCxpQkFKOEIsQ0FLOUI7OztBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLE1BQXpCLENBQWdDLENBQWhDLEVBQW1DLEVBQW5DLEVBQXVDQyxPQUF2QyxDQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxDQUFiO0FBRUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQUs7QUFDZGlCLElBQUFBLFdBQVc7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFULENBUjhCLENBWTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE1BQU07QUFBQSx1VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDVlIsS0FBSyxJQUFJLElBQVQsSUFBaUJBLEtBQUssQ0FBQ1MsR0FBdkIsSUFBOEJULEtBQUssQ0FBQ1UsSUFBcEMsSUFBNENWLEtBQUssQ0FBQ1csVUFEeEM7QUFBQTtBQUFBO0FBQUE7O0FBRVBDLGNBQUFBLElBRk8sR0FFQTtBQUNaSCxnQkFBQUEsR0FBRyxFQUFF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O0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDQyw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxxQkFBWDtBQUFpQyxpQkFBSyxFQUFFLEdBQXhDO0FBQTZDLGtCQUFNLEVBQUU7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFJQztBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUErQixlQUFLLEVBQUU7QUFBQ1QsWUFBQUEsWUFBWSxFQUFFO0FBQWYsV0FBdEM7QUFBQSxvQkFFRSxDQUFDekMsSUFBRCxHQUNBLElBREEsZ0JBR0E7QUFBSyxxQkFBUyxFQUFDLGtDQUFmO0FBQ0UsaUJBQUssRUFBRTtBQUFDaUQsY0FBQUEsZUFBZSxFQUFFLFNBQWxCO0FBQTZCRixjQUFBQSxLQUFLLEVBQUUsTUFBcEM7QUFBNENHLGNBQUFBLFVBQVUsRUFBRTtBQUF4RCxhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFzQkE7QUFDRDs7R0FwS3VCckQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRjb25zdCBbb3JhdGV1cnMsIHNldE9yYXRldXJzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFt2aWRlLCBpc1ZpZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3ZvdGVyLCBpc1ZvdGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtjaG9peCwgc2V0Q2hvaXhdID0gdXNlU3RhdGUobnVsbClcclxuXHQvLyBjb25zdCBbaXAsIHNldElwXSA9IHVzZVN0YXRlKClcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkucmVwbGFjZSgnVCcsICcgJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+IHtcclxuXHRcdGdldE9yYXRldXJzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdC8vIGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubm9tKVxyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubGVuZ3RoKVxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGNob2l4ICE9IG51bGwgJiYgY2hvaXgubm9tICYmIGNob2l4LnR5cGUgJiYgY2hvaXguZGF0ZVNlYW5jZSkge1xyXG5cdFx0XHRjb25zdCB2b3RlID0ge1xyXG5cdFx0XHRcdG5vbTogY2hvaXgubm9tLFxyXG5cdFx0XHRcdHR5cGU6IGNob2l4LnR5cGUsXHJcblx0XHRcdFx0ZGF0ZVNlYW5jZTogY2hvaXguZGF0ZVNlYW5jZVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vycy92b3RlJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZvdGUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YWxlcnQoJ1ZvdGUgZWZmZWN0dcOpIGF2ZWMgc3VjY8OocyAhJylcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHRcdGlzVm90ZXIodHJ1ZSlcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm90X29yXCIsICd0cnVlJyk7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGVfb3JcIiwgZGF0ZSk7XHJcblx0XHRcdFx0XHQvLyBzZXROb20oJycpXHJcblx0XHRcdFx0XHQvLyBzZXRUeXBlKCcnKVxyXG5cdFx0XHRcdFx0Ly8gc2V0RGF0ZVNlYW5jZSgnJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBhbGVydCgnVmV1aWxsZXogY2hvaXNpciB1biBjYW5kaWRhdCAhJylcclxuXHR9XHJcblxyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b3Rfb3InKSkpXHJcblx0XHRjb25zdCBpcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5kYi1pcC5jb20vdjIvZnJlZS9zZWxmJylcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdpcCBhZGRyZXNzJywgaXAuaXBBZGRyZXNzKVxyXG5cdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgaXAuanNvbigpXHJcblx0XHQvLyBjb25zb2xlLmxvZygnaXAgYWRkcmVzcycsIHJlcy5pcEFkZHJlc3MpXHJcblx0XHQvLyBzZXRJcChyZXMuaXBBZGRyZXNzKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0xXCIpO1xyXG5cdFx0aWYocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblx0XHRcdFx0aXNWaWRlKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0c2V0T3JhdGV1cnMoZGF0YSk7XHJcblx0XHRcdFx0aXNWaWRlKGZhbHNlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZSA9KHZhbHVlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRzZXRDaG9peCh2YWx1ZSlcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codmlkZSlcclxuXHJcblx0aWYgKG9yYXRldXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvbG9nby5qcGdcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtNFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1MH19PlxyXG5cclxuXHRcdFx0XHRcdFx0eyF2aWRlID9cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQteGwgaC0xNlwiPjxzdHJvbmc+Tm90ZSA6IDwvc3Ryb25nPkNob2lzaXNzZXogdm90cmUgbWVpbGxldXIgT3JhdGV1clxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3JhdGV1cnMubWFwKHZhbHVlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyLTIgc206dy1mdWxsIG1iLThcIiBrZXk9e3ZhbHVlLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImthZFwiIHZhbHVlPVwia2FkXCIgaWQ9XCJrYWRcIiBvbkNoYW5nZT17Y2hhbmdlfSAvPiovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17dmFsdWUuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwbGF0Zm9ybVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTE0IGgtNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpPT5jaGFuZ2UodmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInZvdGVcIiBjbGFzc05hbWU9J3RleHQteGwnPnt2YWx1ZS5ub219PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b3Rfb3InKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZV9vcicpID09IGRhdGUgKSA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZvdHJlIHZvdGUgYSDDqXTDqSBwcmlzIGVuIGNvbXB0ZSAhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9ldmFsdWF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e2NvbG9yOidyb3lhbGJsdWUnLCB0ZXh0RGVjb3JhdGlvbjondW5kZXJsaW5lJ319PlByb2NoYWluIHZvdGUtLT48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXItMiBoLTEwIGJvcmRlci1bIzM0OTBEQ10gbS00IGJnLVsjMzQ5MERDXSB3LWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbCB0ZXh0LXhsIHB4LTEyXCIgb25DbGljaz17c3VibWl0fT5WYWxpZGVyPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQgaC0xMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2M4MjMzM1wiLCBjb2xvcjogJyNmZmYnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXVjdW4gZW5yZWdpc3RyZW1lbnQgdHJvdXbDqSAhXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZDpjb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIG1kOnctNS8xMiBsZzp3LTUvMTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz1cIi8uLi9wdWJsaWMvbG9nby5qcGdcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtNFwiICBzdHlsZT17e21hcmdpbkJvdHRvbTogNTB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHshdmlkZSA/XHJcblx0XHRcdFx0XHRcdFx0bnVsbFxyXG5cdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZCBoLTEwXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjYzgyMzMzXCIsIGNvbG9yOiAnI2ZmZicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRBdWN1biBlbnJlZ2lzdHJlbWVudCB0cm91dsOpICFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIb21lIiwib3JhdGV1cnMiLCJzZXRPcmF0ZXVycyIsInZpZGUiLCJpc1ZpZGUiLCJ2b3RlciIsImlzVm90ZXIiLCJjaG9peCIsInNldENob2l4IiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInJlcGxhY2UiLCJnZXRPcmF0ZXVycyIsInN1Ym1pdCIsIm5vbSIsInR5cGUiLCJkYXRlU2VhbmNlIiwidm90ZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInN0YXR1cyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaXAiLCJqc29uIiwiZGF0YSIsImNoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaWQiLCJnZXRJdGVtIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9