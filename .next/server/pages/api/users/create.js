"use strict";
(() => {
var exports = {};
exports.id = "pages/api/users/create";
exports.ids = ["pages/api/users/create"];
exports.modules = {

/***/ "./pages/api/users/create.tsx":
/*!************************************!*\
  !*** ./pages/api/users/create.tsx ***!
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/create.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JDLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUgsd0RBQUosQ0FBaUI7QUFBQ0ksSUFBQUEsR0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWpCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEdBQUcsQ0FBQ08sSUFBZixDQUFiLENBREEsQ0FFQTs7QUFDQUMsSUFBQUEsT0FBTyxDQUFDTCxHQUFSLENBQVksSUFBSU0sSUFBSixDQUFTTCxJQUFJLENBQUNNLFVBQWQsQ0FBWixFQUhBLENBSUE7QUFDQTs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTVQsTUFBTSxDQUFDRSxJQUFQLENBQVlRLE1BQVosQ0FBbUI7QUFDdENDLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxHQUFHLEVBQUVWLElBQUksQ0FBQ1UsR0FEUjtBQUVGQyxRQUFBQSxJQUFJLEVBQUVDLFFBQVEsQ0FBQ1osSUFBSSxDQUFDVyxJQUFOLENBRlo7QUFHRkwsUUFBQUEsVUFBVSxFQUFFTixJQUFJLENBQUNNO0FBSGY7QUFEZ0MsS0FBbkIsRUFPcEJPLElBUG9CLENBT2ZoQixHQUFHLElBQUc7QUFDVk8sTUFBQUEsT0FBTyxDQUFDTCxHQUFSLENBQVksS0FBWixFQUFtQkYsR0FBbkI7QUFDSCxLQVRzQixFQVNwQmlCLEtBVG9CLENBU2RDLEdBQUcsSUFBRztBQUNYWCxNQUFBQSxPQUFPLENBQUNMLEdBQVIsQ0FBWWdCLEdBQVo7QUFDSCxLQVhzQixDQUF2QjtBQVlBWCxJQUFBQSxPQUFPLENBQUNMLEdBQVIsQ0FBWSxXQUFaO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixDQUFZUSxRQUFaO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYO0FBQ0FuQixJQUFBQSxHQUFHLENBQUNvQixJQUFKLENBQVMscUNBQVQ7QUFFSCxHQXZCRCxDQXVCRSxPQUFPQyxDQUFQLEVBQVU7QUFDUnJCLElBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYO0FBQ0FuQixJQUFBQSxHQUFHLENBQUNvQixJQUFKLENBQVM7QUFBQ0UsTUFBQUEsS0FBSyxFQUFFRCxDQUFDLENBQUNFO0FBQVYsS0FBVDtBQUNILEdBMUJELFNBMEJVO0FBQ04sVUFBTXRCLE1BQU0sQ0FBQ3VCLFdBQVAsRUFBTjtBQUNIO0FBRUo7Ozs7Ozs7Ozs7QUNyQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFtcInF1ZXJ5XCJdfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICAgICAgLy8gY29uc3QgZGF0ZVNlYW4gPSBuZXcgRGF0ZSh1c2VyLmRhdGVTZWFuY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKHVzZXIuZGF0ZVNlYW5jZSkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FuZGlkYXREYXRhKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5kaWRhdERhdGEudHlwZScpXHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXQgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBub206IHVzZXIubm9tLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyc2VJbnQodXNlci50eXBlKSxcclxuICAgICAgICAgICAgICAgIGRhdGVTZWFuY2U6IHVzZXIuZGF0ZVNlYW5jZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW5kaWRhdHMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYW5kaWRhdCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpO1xyXG4gICAgICAgIHJlcy5qc29uKCdFbnJlZ2lzdHJlbWVudCBlZmZlY3R1w6kgYXZlYyBzdWNjw6hzJylcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xyXG4gICAgICAgIHJlcy5qc29uKHtlcnJvcjogZS5tZXNzYWdlfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjb25zb2xlIiwiRGF0ZSIsImRhdGVTZWFuY2UiLCJjYW5kaWRhdCIsImNyZWF0ZSIsImRhdGEiLCJub20iLCJ0eXBlIiwicGFyc2VJbnQiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwibWVzc2FnZSIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==