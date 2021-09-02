"use strict";
(() => {
var exports = {};
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 4411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: ["query"]
  });

  try {
    const user = JSON.parse(req.body); // const dateSean = new Date(user.dateSeance);

    console.log(new Date(user.dateSeance)); // console.log(candidatData)
    // console.log('candidatData.type')

    const candidat = await prisma.user.create({
      data: {
        nom: user.nom,
        type: parseInt(user.type),
        dateSeance: user.dateSeance
      }
    }).then(res => {
      console.log('res', res);
    }).catch(err => {
      console.log(err);
    });
    console.log('candidats');
    console.log(candidat);
    res.status(201);
    res.json('Enregistrement effectué avec succès');
  } catch (e) {
    res.status(500);
    res.json({
      error: e.message
    });
  } finally {
    await prisma.$disconnect();
  }
}

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4411));
module.exports = __webpack_exports__;

})();