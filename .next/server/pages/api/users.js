(function() {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users/index.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vcGFnZXMvYXBpL3VzZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJsb2ciLCJ0eXBlIiwicXVlcnkiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwicmVwbGFjZSIsInVzZXJzIiwidXNlciIsImZpbmRNYW55Iiwid2hlcmUiLCJwYXJzZUludCIsImRhdGVTZWFuY2UiLCJjb25zb2xlIiwibGVuZ3RoIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsNkJBQWUsMENBQWdCQSxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDdEUsUUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQUNDLE9BQUcsRUFBRSxDQUFDLE9BQUQ7QUFBTixHQUFqQixDQUFmO0FBQ0ksUUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNNLEtBQUosQ0FBVUQsSUFBdkI7QUFDSixRQUFNRSxJQUFJLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEdBQXlCQyxNQUF6QixDQUFnQyxDQUFoQyxFQUFtQyxFQUFuQyxFQUF1Q0MsT0FBdkMsQ0FBK0MsR0FBL0MsRUFBb0QsR0FBcEQsQ0FBYjs7QUFDQSxNQUFJO0FBRUEsUUFBSSxPQUFPTixJQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDekIsWUFBTU8sS0FBSyxHQUFHLE1BQU1WLE1BQU0sQ0FBQ1csSUFBUCxDQUFZQyxRQUFaLENBQXFCO0FBQ3JDQyxhQUFLLEVBQUU7QUFDSFYsY0FBSSxFQUFFVyxRQUFRLENBQUNYLElBQUQsQ0FEWDtBQUVIWSxvQkFBVSxFQUFFVjtBQUZUO0FBRDhCLE9BQXJCLENBQXBCO0FBTUFXLGFBQU8sQ0FBQ2QsR0FBUixDQUFZUSxLQUFLLENBQUNPLE1BQWxCOztBQUNBLFVBQUdQLEtBQUssQ0FBQ08sTUFBTixHQUFlLENBQWxCLEVBQXFCO0FBQ2pCbEIsV0FBRyxDQUFDbUIsSUFBSixDQUFTUixLQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hYLFdBQUcsQ0FBQ29CLE1BQUosQ0FBVyxHQUFYO0FBQ0FwQixXQUFHLENBQUNtQixJQUFKLENBQVM7QUFBQ0UsaUJBQU8sRUFBRTtBQUFWLFNBQVQ7QUFDSDtBQUNKO0FBQ0osR0FqQkQsQ0FpQkUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1J0QixPQUFHLENBQUNvQixNQUFKLENBQVcsR0FBWDtBQUNBcEIsT0FBRyxDQUFDbUIsSUFBSixDQUFTO0FBQUNJLFdBQUssRUFBRUQsQ0FBQyxDQUFDRDtBQUFWLEtBQVQ7QUFDSCxHQXBCRCxTQW9CVTtBQUNOLFVBQU1wQixNQUFNLENBQUN1QixXQUFQLEVBQU47QUFDSDtBQUVKLEM7Ozs7Ozs7Ozs7O0FDL0JELDRDIiwiZmlsZSI6InBhZ2VzL2FwaS91c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFsncXVlcnknXX0pO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSByZXEucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKS5yZXBsYWNlKCdUJywgJyAnKTtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBwYXJzZUludCh0eXBlKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlU2VhbmNlOiBkYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGlmKHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHVzZXJzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDQpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7bWVzc2FnZTogJ0F1Y3VuIGVucmVnaXN0cmVtZW50IHRyb3V2w6kgISd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICByZXMuanNvbih7ZXJyb3I6IGUubWVzc2FnZX0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=