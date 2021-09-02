"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: ['query']
  });
  const type = req.query.type;
  const date = new Date().toISOString().substr(0, 10).replace('T', ' ');

  try {
    if (typeof type == "string") {
      const users = await prisma.user.findMany({
        where: {
          type: parseInt(type),
          dateSeance: date
        }
      });
      console.log(users.length);

      if (users.length > 0) {
        res.json(users);
      } else {
        res.status(204);
        res.json({
          message: 'Aucun enregistrement trouvé !'
        });
      }
    }
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1339));
module.exports = __webpack_exports__;

})();