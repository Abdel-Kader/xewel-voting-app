"use strict";
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users/index.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
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
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLDZCQUFlLDBDQUFnQkMsR0FBaEIsRUFBcUNDLEdBQXJDLEVBQTJEO0FBQ3RFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFpQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBakIsQ0FBZjtBQUNJLFFBQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSyxLQUFKLENBQVVELElBQXZCO0FBQ0osUUFBTUUsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsTUFBekIsQ0FBZ0MsQ0FBaEMsRUFBbUMsRUFBbkMsRUFBdUNDLE9BQXZDLENBQStDLEdBQS9DLEVBQW9ELEdBQXBELENBQWI7O0FBQ0EsTUFBSTtBQUVBLFFBQUksT0FBT04sSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFlBQU1PLEtBQUssR0FBRyxNQUFNVCxNQUFNLENBQUNVLElBQVAsQ0FBWUMsUUFBWixDQUFxQjtBQUNyQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQ0hWLFVBQUFBLElBQUksRUFBRVcsUUFBUSxDQUFDWCxJQUFELENBRFg7QUFFSFksVUFBQUEsVUFBVSxFQUFFVjtBQUZUO0FBRDhCLE9BQXJCLENBQXBCO0FBTUFXLE1BQUFBLE9BQU8sQ0FBQ2QsR0FBUixDQUFZUSxLQUFLLENBQUNPLE1BQWxCOztBQUNBLFVBQUdQLEtBQUssQ0FBQ08sTUFBTixHQUFlLENBQWxCLEVBQXFCO0FBQ2pCakIsUUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTUixLQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0hWLFFBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYO0FBQ0FuQixRQUFBQSxHQUFHLENBQUNrQixJQUFKLENBQVM7QUFBQ0UsVUFBQUEsT0FBTyxFQUFFO0FBQVYsU0FBVDtBQUNIO0FBQ0o7QUFDSixHQWpCRCxDQWlCRSxPQUFPQyxDQUFQLEVBQVU7QUFDUnJCLElBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYO0FBQ0FuQixJQUFBQSxHQUFHLENBQUNrQixJQUFKLENBQVM7QUFBQ0ksTUFBQUEsS0FBSyxFQUFFRCxDQUFDLENBQUNEO0FBQVYsS0FBVDtBQUNILEdBcEJELFNBb0JVO0FBQ04sVUFBTW5CLE1BQU0sQ0FBQ3NCLFdBQVAsRUFBTjtBQUNIO0FBRUo7Ozs7Ozs7Ozs7QUMvQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vcGFnZXMvYXBpL3VzZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7bG9nOiBbJ3F1ZXJ5J119KTtcclxuICAgICAgICBjb25zdCB0eXBlID0gcmVxLnF1ZXJ5LnR5cGU7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkucmVwbGFjZSgnVCcsICcgJyk7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcGFyc2VJbnQodHlwZSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVNlYW5jZTogZGF0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih1c2VycylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjA0KVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lc3NhZ2U6ICdBdWN1biBlbnJlZ2lzdHJlbWVudCB0cm91dsOpICEnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCk7XHJcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBlLm1lc3NhZ2V9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJ0eXBlIiwicXVlcnkiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3Vic3RyIiwicmVwbGFjZSIsInVzZXJzIiwidXNlciIsImZpbmRNYW55Iiwid2hlcmUiLCJwYXJzZUludCIsImRhdGVTZWFuY2UiLCJjb25zb2xlIiwibGVuZ3RoIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=