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


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getOrateurs();
  }, []); // const submit = ()=> {
  // 	console.log(choix.nom)
  // 	console.log(choix.length)
  // }

  var submit = /*#__PURE__*/function () {
    var _ref = (0,D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Projects_Labo_nextjs_tailwind_css_web_voting_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var vote, response, date;
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
                date = new Date().toISOString().substr(0, 10).replace('T', ' ');
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
            lineNumber: 85,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
                lineNumber: 91,
                columnNumber: 38
              }, this), "Choisissez votre meilleur Orateur"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
                    lineNumber: 98,
                    columnNumber: 13
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "vote",
                    className: "text-xl",
                    children: value.nom
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 13
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 12
                }, _this)
              }, value.id, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 11
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 9
            }, this), localStorage.getItem('vot_or') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 115,
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
                    lineNumber: 120,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
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
                  lineNumber: 127,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 12
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
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
            lineNumber: 133,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
            lineNumber: 149,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
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
            lineNumber: 156,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIm9yYXRldXJzIiwic2V0T3JhdGV1cnMiLCJ2aWRlIiwiaXNWaWRlIiwidm90ZXIiLCJpc1ZvdGVyIiwiY2hvaXgiLCJzZXRDaG9peCIsInVzZUVmZmVjdCIsImdldE9yYXRldXJzIiwic3VibWl0Iiwibm9tIiwidHlwZSIsImRhdGVTZWFuY2UiLCJ2b3RlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Iiwic3RhdHVzIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInJlcGxhY2UiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlwIiwianNvbiIsImRhdGEiLCJjaGFuZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImlkIiwiZ2V0SXRlbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDdkJDLFFBRHVCO0FBQUEsTUFDYkMsV0FEYTs7QUFBQSxtQkFFUEYsK0NBQVEsQ0FBQyxLQUFELENBRkQ7QUFBQSxNQUV2QkcsSUFGdUI7QUFBQSxNQUVqQkMsTUFGaUI7O0FBQUEsbUJBR0xKLCtDQUFRLENBQUMsS0FBRCxDQUhIO0FBQUEsTUFHdkJLLEtBSHVCO0FB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YWdlcy9pbmRleC40ZTA4NjRiZGU0OWNkOWRkYjU0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW29yYXRldXJzLCBzZXRPcmF0ZXVyc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbdmlkZSwgaXNWaWRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFt2b3RlciwgaXNWb3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbY2hvaXgsIHNldENob2l4XSA9IHVzZVN0YXRlKG51bGwpXHJcblx0Ly8gY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+IHtcclxuXHRcdGdldE9yYXRldXJzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdC8vIGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubm9tKVxyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubGVuZ3RoKVxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGNob2l4ICE9IG51bGwgJiYgY2hvaXgubm9tICYmIGNob2l4LnR5cGUgJiYgY2hvaXguZGF0ZVNlYW5jZSkge1xyXG5cdFx0XHRjb25zdCB2b3RlID0ge1xyXG5cdFx0XHRcdG5vbTogY2hvaXgubm9tLFxyXG5cdFx0XHRcdHR5cGU6IGNob2l4LnR5cGUsXHJcblx0XHRcdFx0ZGF0ZVNlYW5jZTogY2hvaXguZGF0ZVNlYW5jZVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vycy92b3RlJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZvdGUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkucmVwbGFjZSgnVCcsICcgJyk7XHJcblx0XHRcdFx0XHRhbGVydCgnVm90ZSBlZmZlY3R1w6kgYXZlYyBzdWNjw6hzICEnKVxyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdFx0aXNWb3Rlcih0cnVlKVxyXG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2b3Rfb3JcIiwgJ3RydWUnKTtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0ZV9vclwiLCBkYXRlKTtcclxuXHRcdFx0XHRcdC8vIHNldE5vbSgnJylcclxuXHRcdFx0XHRcdC8vIHNldFR5cGUoJycpXHJcblx0XHRcdFx0XHQvLyBzZXREYXRlU2VhbmNlKCcnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGFsZXJ0KCdWZXVpbGxleiBjaG9pc2lyIHVuIGNhbmRpZGF0ICEnKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBnZXRPcmF0ZXVycygpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvdF9vcicpKSlcclxuXHRcdGNvbnN0IGlwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmRiLWlwLmNvbS92Mi9mcmVlL3NlbGYnKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ2lwIGFkZHJlc3MnLCBpcC5pcEFkZHJlc3MpXHJcblx0XHQvLyBjb25zdCByZXMgPSBhd2FpdCBpcC5qc29uKClcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdpcCBhZGRyZXNzJywgcmVzLmlwQWRkcmVzcylcclxuXHRcdC8vIHNldElwKHJlcy5pcEFkZHJlc3MpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycz90eXBlPTFcIik7XHJcblx0XHRpZihyZXNwb25zZS5vaykge1xyXG5cdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcclxuXHRcdFx0XHRpc1ZpZGUodHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRzZXRPcmF0ZXVycyhkYXRhKTtcclxuXHRcdFx0XHRpc1ZpZGUoZmFsc2UpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3QgY2hhbmdlID0odmFsdWUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdHNldENob2l4KHZhbHVlKVxyXG5cdH1cclxuXHQvLyBjb25zb2xlLmxvZyh2aWRlKVxyXG5cclxuXHRpZiAob3JhdGV1cnMubGVuZ3RoID4gMCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZDpjb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIG1kOnctNS8xMiBsZzp3LTUvMTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz1cIi8uLi9wdWJsaWMvbG9nby5qcGdcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtNFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1MH19PlxyXG5cclxuXHRcdFx0XHRcdFx0eyF2aWRlID9cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQteGwgaC0xNlwiPjxzdHJvbmc+Tm90ZSA6IDwvc3Ryb25nPkNob2lzaXNzZXogdm90cmUgbWVpbGxldXIgT3JhdGV1clxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3JhdGV1cnMubWFwKHZhbHVlID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyLTIgc206dy1mdWxsIG1iLThcIiBrZXk9e3ZhbHVlLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImthZFwiIHZhbHVlPVwia2FkXCIgaWQ9XCJrYWRcIiBvbkNoYW5nZT17Y2hhbmdlfSAvPiovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17dmFsdWUuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwbGF0Zm9ybVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTE0IGgtNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpPT5jaGFuZ2UodmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInZvdGVcIiBjbGFzc05hbWU9J3RleHQteGwnPnt2YWx1ZS5ub219PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZvdF9vcicpID9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Vm90cmUgdm90ZSBhIMOpdMOpIHByaXMgZW4gY29tcHRlICFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2V2YWx1YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7Y29sb3I6J3JveWFsYmx1ZScsIHRleHREZWNvcmF0aW9uOid1bmRlcmxpbmUnfX0+UHJvY2hhaW4gdm90ZS0tPjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJvcmRlci0yIGgtMTAgYm9yZGVyLVsjMzQ5MERDXSBtLTQgYmctWyMzNDkwRENdIHctYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsIHRleHQteGwgcHgtMTJcIiBvbkNsaWNrPXtzdWJtaXR9PlZhbGlkZXI8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZCBoLTEwXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjYzgyMzMzXCIsIGNvbG9yOiAnI2ZmZicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRBdWN1biBlbnJlZ2lzdHJlbWVudCB0cm91dsOpICFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbnRhaW5lciBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbTp3LWZ1bGwgbWQ6dy01LzEyIGxnOnctNS8xMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPVwiLy4uL3B1YmxpYy9sb2dvLmpwZ1wiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcC00XCIgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1MH19PlxyXG5cclxuXHRcdFx0XHRcdFx0eyF2aWRlID9cclxuXHRcdFx0XHRcdFx0XHRudWxsXHJcblx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGgtMTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNjODIzMzNcIiwgY29sb3I6ICcjZmZmJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdEF1Y3VuIGVucmVnaXN0cmVtZW50IHRyb3V2w6kgIVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=