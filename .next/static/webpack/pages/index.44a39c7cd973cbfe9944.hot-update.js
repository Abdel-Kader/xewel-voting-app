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
                localStorage.setItem("vot_or", 'true'); // setNom('')
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
              console.log(localStorage.getItem('vot_or'));
              _context2.next = 3;
              return fetch('https://api.db-ip.com/v2/free/self');

            case 3:
              ip = _context2.sent;
              _context2.next = 6;
              return fetch("/api/users?type=1");

            case 6:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 17;
                break;
              }

              if (!(response.status === 204)) {
                _context2.next = 12;
                break;
              }

              isVide(true);
              _context2.next = 17;
              break;

            case 12:
              _context2.next = 14;
              return response.json();

            case 14:
              data = _context2.sent;
              setOrateurs(data);
              isVide(false);

            case 17:
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
            lineNumber: 84,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
                lineNumber: 90,
                columnNumber: 38
              }, this), "Choisissez votre meilleur Orateur"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                    lineNumber: 97,
                    columnNumber: 13
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    htmlFor: "vote",
                    className: "text-xl",
                    children: value.nom
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 13
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 12
                }, _this)
              }, value.id, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 11
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
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
                lineNumber: 114,
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
                    lineNumber: 119,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
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
                  lineNumber: 126,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 12
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
            lineNumber: 132,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
            lineNumber: 148,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
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
            lineNumber: 155,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIm9yYXRldXJzIiwic2V0T3JhdGV1cnMiLCJ2aWRlIiwiaXNWaWRlIiwidm90ZXIiLCJpc1ZvdGVyIiwiY2hvaXgiLCJzZXRDaG9peCIsInVzZUVmZmVjdCIsImdldE9yYXRldXJzIiwic3VibWl0Iiwibm9tIiwidHlwZSIsImRhdGVTZWFuY2UiLCJ2b3RlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Iiwic3RhdHVzIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiaXAiLCJqc29uIiwiZGF0YSIsImNoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNFQywrQ0FBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ3ZCQyxRQUR1QjtBQUFBLE1BQ2JDLFdBRGE7O0FBQUEsbUJBRVBGLCtDQUFRLENBQUMsS0FBRCxDQUZEO0FBQUEsTUFFdkJHLElBRnVCO0FBQUEsTUFFakJDLE1BRmlCOztBQUFBLG1CQUdMSiwrQ0FBUSxDQUFDLEtBQUQsQ0FISDtBQUFBLE1BR3ZCSyxLQUh1QjtBQUFBLE1BR2hCQyxPQUhnQjs7QUFBQSxtQkFJSk4sK0NBQVEsQ0FBQyxJQUFELENB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QTtBQUFBO0FBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBK0RBLEdBaEVELE1BZ0VPO0FBQ04sd0JBQ0M7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNDLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLHFCQUFYO0FBQWlDLGlCQUFLLEVBQUUsR0FBeEM7QUFBNkMsa0JBQU0sRUFBRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUlDO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQStCLGVBQUssRUFBRTtBQUFDUix3QkFBWSxFQUFFO0FBQWYsV0FBdEM7QUFBQSxvQkFFRSxDQUFDdEMsSUFBRCxHQUNBLElBREEsZ0JBR0E7QUFBSyxxQkFBUyxFQUFDLGtDQUFmO0FBQ0UsaUJBQUssRUFBRTtBQUFDNkMsNkJBQWUsRUFBRSxTQUFsQjtBQUE2QkYsbUJBQUssRUFBRSxNQUFwQztBQUE0Q0csd0JBQVUsRUFBRTtBQUF4RCxhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFzQkE7QUFDRDs7R0FsS3VCbEQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NGEzOWM3Y2Q5NzNjYmZlOTk0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW29yYXRldXJzLCBzZXRPcmF0ZXVyc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbdmlkZSwgaXNWaWRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFt2b3RlciwgaXNWb3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbY2hvaXgsIHNldENob2l4XSA9IHVzZVN0YXRlKG51bGwpXHJcblx0Ly8gY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+IHtcclxuXHRcdGdldE9yYXRldXJzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdC8vIGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubm9tKVxyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubGVuZ3RoKVxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGNob2l4ICE9IG51bGwgJiYgY2hvaXgubm9tICYmIGNob2l4LnR5cGUgJiYgY2hvaXguZGF0ZVNlYW5jZSkge1xyXG5cdFx0XHRjb25zdCB2b3RlID0ge1xyXG5cdFx0XHRcdG5vbTogY2hvaXgubm9tLFxyXG5cdFx0XHRcdHR5cGU6IGNob2l4LnR5cGUsXHJcblx0XHRcdFx0ZGF0ZVNlYW5jZTogY2hvaXguZGF0ZVNlYW5jZVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vycy92b3RlJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZvdGUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YWxlcnQoJ1ZvdGUgZWZmZWN0dcOpIGF2ZWMgc3VjY8OocyAhJylcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHRcdGlzVm90ZXIodHJ1ZSlcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm90X29yXCIsICd0cnVlJyk7XHJcblx0XHRcdFx0XHQvLyBzZXROb20oJycpXHJcblx0XHRcdFx0XHQvLyBzZXRUeXBlKCcnKVxyXG5cdFx0XHRcdFx0Ly8gc2V0RGF0ZVNlYW5jZSgnJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBhbGVydCgnVmV1aWxsZXogY2hvaXNpciB1biBjYW5kaWRhdCAhJylcclxuXHR9XHJcblxyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndm90X29yJykpXHJcblx0XHRjb25zdCBpcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5kYi1pcC5jb20vdjIvZnJlZS9zZWxmJylcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdpcCBhZGRyZXNzJywgaXAuaXBBZGRyZXNzKVxyXG5cdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgaXAuanNvbigpXHJcblx0XHQvLyBjb25zb2xlLmxvZygnaXAgYWRkcmVzcycsIHJlcy5pcEFkZHJlc3MpXHJcblx0XHQvLyBzZXRJcChyZXMuaXBBZGRyZXNzKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0xXCIpO1xyXG5cdFx0aWYocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblx0XHRcdFx0aXNWaWRlKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0c2V0T3JhdGV1cnMoZGF0YSk7XHJcblx0XHRcdFx0aXNWaWRlKGZhbHNlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZSA9KHZhbHVlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRzZXRDaG9peCh2YWx1ZSlcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codmlkZSlcclxuXHJcblx0aWYgKG9yYXRldXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvLi4vcHVibGljL2xvZ28uanBnXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBwLTRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNTB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHshdmlkZSA/XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGgtMTZcIj48c3Ryb25nPk5vdGUgOiA8L3N0cm9uZz5DaG9pc2lzc2V6IHZvdHJlIG1laWxsZXVyIE9yYXRldXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9yYXRldXJzLm1hcCh2YWx1ZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJvcmRlci0yIHNtOnctZnVsbCBtYi04XCIga2V5PXt2YWx1ZS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJrYWRcIiB2YWx1ZT1cImthZFwiIGlkPVwia2FkXCIgb25DaGFuZ2U9e2NoYW5nZX0gLz4qL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3ZhbHVlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGxhdGZvcm1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy0xNCBoLTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKT0+Y2hhbmdlKHZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ2b3RlXCIgY2xhc3NOYW1lPSd0ZXh0LXhsJz57dmFsdWUubm9tfTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b3Rfb3InKSA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZvdHJlIHZvdGUgYSDDqXTDqSBwcmlzIGVuIGNvbXB0ZSAhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9ldmFsdWF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e2NvbG9yOidyb3lhbGJsdWUnLCB0ZXh0RGVjb3JhdGlvbjondW5kZXJsaW5lJ319PlByb2NoYWluIHZvdGUtLT48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXItMiBoLTEwIGJvcmRlci1bIzM0OTBEQ10gbS00IGJnLVsjMzQ5MERDXSB3LWF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbCB0ZXh0LXhsIHB4LTEyXCIgb25DbGljaz17c3VibWl0fT5WYWxpZGVyPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQgaC0xMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2M4MjMzM1wiLCBjb2xvcjogJyNmZmYnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXVjdW4gZW5yZWdpc3RyZW1lbnQgdHJvdXbDqSAhXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZDpjb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic206dy1mdWxsIG1kOnctNS8xMiBsZzp3LTUvMTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz1cIi8uLi9wdWJsaWMvbG9nby5qcGdcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0vPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHAtNFwiICBzdHlsZT17e21hcmdpbkJvdHRvbTogNTB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHshdmlkZSA/XHJcblx0XHRcdFx0XHRcdFx0bnVsbFxyXG5cdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZCBoLTEwXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjYzgyMzMzXCIsIGNvbG9yOiAnI2ZmZicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRBdWN1biBlbnJlZ2lzdHJlbWVudCB0cm91dsOpICFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9