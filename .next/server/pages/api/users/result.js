"use strict";
(() => {
var exports = {};
exports.id = "pages/api/users/result";
exports.ids = ["pages/api/users/result"];
exports.modules = {

/***/ "./pages/api/users/result.tsx":
/*!************************************!*\
  !*** ./pages/api/users/result.tsx ***!
  \************************************/
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
      const users = await prisma.voting.groupBy({
        by: ['nom'],
        where: {
          type: parseInt(type),
          dateSeance: date
        },
        _sum: {
          voix: true
        }
      });

      if (users.length > 0) {
        res.json({
          users
        });
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/result.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzL3Jlc3VsdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSw2QkFBZSwwQ0FBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUgsd0RBQUosQ0FBaUI7QUFBQ0ksSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWpCLENBQWY7QUFFQSxRQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVRCxJQUF2QjtBQUNBLFFBQU1FLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLE1BQXpCLENBQWdDLENBQWhDLEVBQW1DLEVBQW5DLEVBQXVDQyxPQUF2QyxDQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxDQUFiOztBQUNBLE1BQUk7QUFDQSxRQUFJLE9BQU9OLElBQVAsSUFBZSxRQUFuQixFQUE2QjtBQUN6QixZQUFNTyxLQUFLLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxNQUFQLENBQWNDLE9BQWQsQ0FBc0I7QUFDdENDLFFBQUFBLEVBQUUsRUFBRSxDQUFDLEtBQUQsQ0FEa0M7QUFFdENDLFFBQUFBLEtBQUssRUFBRTtBQUNIWCxVQUFBQSxJQUFJLEVBQUVZLFFBQVEsQ0FBQ1osSUFBRCxDQURYO0FBRUhhLFVBQUFBLFVBQVUsRUFBRVg7QUFGVCxTQUYrQjtBQU10Q1ksUUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFVBQUFBLElBQUksRUFBRTtBQURKO0FBTmdDLE9BQXRCLENBQXBCOztBQVVBLFVBQUlSLEtBQUssQ0FBQ1MsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ2xCbkIsUUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUNWLFVBQUFBO0FBQUQsU0FBVDtBQUNILE9BRkQsTUFFTztBQUNIVixRQUFBQSxHQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWDtBQUNBckIsUUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUNFLFVBQUFBLE9BQU8sRUFBRTtBQUFWLFNBQVQ7QUFDSDtBQUNKO0FBQ0osR0FuQkQsQ0FtQkUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1J2QixJQUFBQSxHQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWDtBQUNBckIsSUFBQUEsR0FBRyxDQUFDb0IsSUFBSixDQUFTO0FBQUNJLE1BQUFBLEtBQUssRUFBRUQsQ0FBQyxDQUFDRDtBQUFWLEtBQVQ7QUFDSCxHQXRCRCxTQXNCVTtBQUNOLFVBQU1yQixNQUFNLENBQUN3QixXQUFQLEVBQU47QUFDSDtBQUVKOzs7Ozs7Ozs7O0FDbENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy8uL3BhZ2VzL2FwaS91c2Vycy9yZXN1bHQudHN4Iiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFsncXVlcnknXX0pO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSByZXEucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKS5yZXBsYWNlKCdUJywgJyAnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEudm90aW5nLmdyb3VwQnkoe1xyXG4gICAgICAgICAgICAgICAgYnk6IFsnbm9tJ10sXHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHBhcnNlSW50KHR5cGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVTZWFuY2U6IGRhdGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfc3VtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9peDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHt1c2Vyc30pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwNClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZXNzYWdlOiAnQXVjdW4gZW5yZWdpc3RyZW1lbnQgdHJvdXbDqSAhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xyXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogZS5tZXNzYWdlfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidHlwZSIsInF1ZXJ5IiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0ciIsInJlcGxhY2UiLCJ1c2VycyIsInZvdGluZyIsImdyb3VwQnkiLCJieSIsIndoZXJlIiwicGFyc2VJbnQiLCJkYXRlU2VhbmNlIiwiX3N1bSIsInZvaXgiLCJsZW5ndGgiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==