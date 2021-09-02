(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\components\\Home.js";



function Home() {
  const {
    0: orateurs,
    1: setOrateurs
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: vide,
    1: isVide
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: voter,
    1: isVoter
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: choix,
    1: setChoix
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // const [ip, setIp] = useState()

  const date = new Date().toISOString().substr(0, 10).replace('T', ' ');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getOrateurs();
  }, []); // const submit = ()=> {
  // 	console.log(choix.nom)
  // 	console.log(choix.length)
  // }

  const submit = async () => {
    if (choix != null && choix.nom && choix.type && choix.dateSeance) {
      const vote = {
        nom: choix.nom,
        type: choix.type,
        dateSeance: choix.dateSeance
      };
      const response = await fetch('/api/users/vote', {
        method: 'POST',
        body: JSON.stringify(vote)
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        if (response.status == 201) {
          alert('Vote effectué avec succès !');
          window.location.reload();
          isVoter(true);
          localStorage.setItem("vot_or", 'true');
          localStorage.setItem("date_or", date); // setNom('')
          // setType('')
          // setDateSeance('')
        }
      }
    } else alert('Veuillez choisir un candidat !');
  };

  async function getOrateurs() {
    // console.log(JSON.parse(localStorage.getItem('vot_or')))
    const ip = await fetch('https://api.db-ip.com/v2/free/self'); // console.log('ip address', ip.ipAddress)
    // const res = await ip.json()
    // console.log('ip address', res.ipAddress)
    // setIp(res.ipAddress)

    const response = await fetch("/api/users?type=1");

    if (response.ok) {
      if (response.status === 204) {
        isVide(true);
      } else {
        const data = await response.json();
        setOrateurs(data);
        isVide(false);
      }
    }
  }

  const change = value => {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
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
            }, this), orateurs.map(value => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "rounded border-2 sm:w-full mb-8",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center h-12",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  id: value.id,
                  value: value,
                  name: "platform",
                  type: "radio",
                  className: "w-14 h-5",
                  onChange: () => change(value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "vote",
                  className: "text-xl",
                  children: value.nom
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 12
              }, this)
            }, value.id, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 11
            }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");

var _jsxFileName = "D:\\Projects\\Labo\\nextjs-tailwind-css\\web\\voting-app\\pages\\index.js";




function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Xewel voting-app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__.Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center justify-center flex-wrap bg-teal p-4 bg-primaire",
      style: {
        position: 'fixed',
        width: '100%',
        bottom: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          color: '#fff'
        },
        children: "\xA9 2021 By Abdel-Kader Sabiou"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_tailwindcss_tailwind_css-node_modules_next_image_js-node_modules_next_link_js","components_Nav_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJvcmF0ZXVycyIsInNldE9yYXRldXJzIiwidXNlU3RhdGUiLCJ2aWRlIiwiaXNWaWRlIiwidm90ZXIiLCJpc1ZvdGVyIiwiY2hvaXgiLCJzZXRDaG9peCIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwiZ2V0T3JhdGV1cnMiLCJzdWJtaXQiLCJub20iLCJ0eXBlIiwiZGF0ZVNlYW5jZSIsInZvdGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJzdGF0dXMiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlwIiwiZGF0YSIsImpzb24iLCJjaGFuZ2UiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImlkIiwiZ2V0SXRlbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBaUJGLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQkosK0NBQVEsQ0FBQyxLQUFELENBQWpDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEMsQ0FKOEIsQ0FLOUI7O0FBQ0EsUUFBTU8sSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsTUFBekIsQ0FBZ0MsQ0FBaEMs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QyxhQUFLLEVBQUUsTUFBM0I7QUFBbUNDLGNBQU0sRUFBRTtBQUEzQyxPQUE1RjtBQUFBLDZCQUNDO0FBQUcsYUFBSyxFQUFFO0FBQUNSLGlCQUFPLEVBQUUsTUFBVjtBQUFrQkMsd0JBQWMsRUFBRSxRQUFsQztBQUE0Q0MsZUFBSyxFQUFDO0FBQWxELFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQkEsQzs7Ozs7Ozs7Ozs7QUMxQkQsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRjb25zdCBbb3JhdGV1cnMsIHNldE9yYXRldXJzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFt2aWRlLCBpc1ZpZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3ZvdGVyLCBpc1ZvdGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtjaG9peCwgc2V0Q2hvaXhdID0gdXNlU3RhdGUobnVsbClcclxuXHQvLyBjb25zdCBbaXAsIHNldElwXSA9IHVzZVN0YXRlKClcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkucmVwbGFjZSgnVCcsICcgJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKT0+IHtcclxuXHRcdGdldE9yYXRldXJzKCk7XHJcblx0fSwgW10pXHJcblxyXG5cdC8vIGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubm9tKVxyXG5cdC8vIFx0Y29uc29sZS5sb2coY2hvaXgubGVuZ3RoKVxyXG5cdC8vIH1cclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKGNob2l4ICE9IG51bGwgJiYgY2hvaXgubm9tICYmIGNob2l4LnR5cGUgJiYgY2hvaXguZGF0ZVNlYW5jZSkge1xyXG5cdFx0XHRjb25zdCB2b3RlID0ge1xyXG5cdFx0XHRcdG5vbTogY2hvaXgubm9tLFxyXG5cdFx0XHRcdHR5cGU6IGNob2l4LnR5cGUsXHJcblx0XHRcdFx0ZGF0ZVNlYW5jZTogY2hvaXguZGF0ZVNlYW5jZVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vycy92b3RlJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHZvdGUpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XHJcblxyXG5cdFx0XHRcdFx0YWxlcnQoJ1ZvdGUgZWZmZWN0dcOpIGF2ZWMgc3VjY8OocyAhJylcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHRcdGlzVm90ZXIodHJ1ZSlcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm90X29yXCIsICd0cnVlJyk7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGVfb3JcIiwgZGF0ZSk7XHJcblx0XHRcdFx0XHQvLyBzZXROb20oJycpXHJcblx0XHRcdFx0XHQvLyBzZXRUeXBlKCcnKVxyXG5cdFx0XHRcdFx0Ly8gc2V0RGF0ZVNlYW5jZSgnJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBhbGVydCgnVmV1aWxsZXogY2hvaXNpciB1biBjYW5kaWRhdCAhJylcclxuXHR9XHJcblxyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0T3JhdGV1cnMoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2b3Rfb3InKSkpXHJcblx0XHRjb25zdCBpcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5kYi1pcC5jb20vdjIvZnJlZS9zZWxmJylcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdpcCBhZGRyZXNzJywgaXAuaXBBZGRyZXNzKVxyXG5cdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgaXAuanNvbigpXHJcblx0XHQvLyBjb25zb2xlLmxvZygnaXAgYWRkcmVzcycsIHJlcy5pcEFkZHJlc3MpXHJcblx0XHQvLyBzZXRJcChyZXMuaXBBZGRyZXNzKVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlcnM/dHlwZT0xXCIpO1xyXG5cdFx0aWYocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XHJcblx0XHRcdFx0aXNWaWRlKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0c2V0T3JhdGV1cnMoZGF0YSk7XHJcblx0XHRcdFx0aXNWaWRlKGZhbHNlKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZSA9KHZhbHVlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRzZXRDaG9peCh2YWx1ZSlcclxuXHR9XHJcblx0Ly8gY29uc29sZS5sb2codmlkZSlcclxuXHJcblx0aWYgKG9yYXRldXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvLi4vcHVibGljL2xvZ28uanBnXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBwLTRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNTB9fT5cclxuXHJcblx0XHRcdFx0XHRcdHshdmlkZSA/XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGgtMTZcIj48c3Ryb25nPk5vdGUgOiA8L3N0cm9uZz5DaG9pc2lzc2V6IHZvdHJlIG1laWxsZXVyIE9yYXRldXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9yYXRldXJzLm1hcCh2YWx1ZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGJvcmRlci0yIHNtOnctZnVsbCBtYi04XCIga2V5PXt2YWx1ZS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJrYWRcIiB2YWx1ZT1cImthZFwiIGlkPVwia2FkXCIgb25DaGFuZ2U9e2NoYW5nZX0gLz4qL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3ZhbHVlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGxhdGZvcm1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy0xNCBoLTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKT0+Y2hhbmdlKHZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ2b3RlXCIgY2xhc3NOYW1lPSd0ZXh0LXhsJz57dmFsdWUubm9tfTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndm90X29yJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGVfb3InKSA9PSBkYXRlICkgP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSB2b3RlIGEgw6l0w6kgcHJpcyBlbiBjb21wdGUgIVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZXZhbHVhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3tjb2xvcjoncm95YWxibHVlJywgdGV4dERlY29yYXRpb246J3VuZGVybGluZSd9fT5Qcm9jaGFpbiB2b3RlLS0+PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyLTIgaC0xMCBib3JkZXItWyMzNDkwRENdIG0tNCBiZy1bIzM0OTBEQ10gdy1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGwgdGV4dC14bCBweC0xMlwiIG9uQ2xpY2s9e3N1Ym1pdH0+VmFsaWRlcjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGgtMTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNjODIzMzNcIiwgY29sb3I6ICcjZmZmJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cclxuXHRcdFx0XHRcdFx0XHRcdEF1Y3VuIGVucmVnaXN0cmVtZW50IHRyb3V2w6kgIVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtOnctZnVsbCBtZDp3LTUvMTIgbGc6dy01LzEyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9XCIvLi4vcHVibGljL2xvZ28uanBnXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBwLTRcIiAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDUwfX0+XHJcblxyXG5cdFx0XHRcdFx0XHR7IXZpZGUgP1xyXG5cdFx0XHRcdFx0XHRcdG51bGxcclxuXHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQgaC0xMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2M4MjMzM1wiLCBjb2xvcjogJyNmZmYnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXVjdW4gZW5yZWdpc3RyZW1lbnQgdHJvdXbDqSAhXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQWNjZXVpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+WGV3ZWwgdm90aW5nLWFwcDwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0ey8qIEhlYWRlciAqL31cblxuXHRcdFx0PE5hdiAvPlxuXG5cdFx0XHQ8QWNjZXVpbCAvPlxuXHRcdFx0PGJyLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGJnLXRlYWwgcC00IGJnLXByaW1haXJlXCIgIHN0eWxlPXt7cG9zaXRpb246ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGJvdHRvbTogMH19PlxuXHRcdFx0XHQ8cCBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBjb2xvcjonI2ZmZid9fT5cblx0XHRcdFx0XHTCqSAyMDIxIEJ5IEFiZGVsLUthZGVyIFNhYmlvdVxuXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9