(function() {
var exports = {};
exports.id = "pages/api/users/create";
exports.ids = ["pages/api/users/create"];
exports.modules = {

/***/ "./pages/api/users/create.tsx":
/*!************************************!*\
  !*** ./pages/api/users/create.tsx ***!
  \************************************/
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
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/create.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10YWlsd2luZGNzcy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwibG9nIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjb25zb2xlIiwiRGF0ZSIsImRhdGVTZWFuY2UiLCJjYW5kaWRhdCIsImNyZWF0ZSIsImRhdGEiLCJub20iLCJ0eXBlIiwicGFyc2VJbnQiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwiZSIsImVycm9yIiwibWVzc2FnZSIsIiRkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQSw2QkFBZSwwQ0FBZ0JBLEdBQWhCLEVBQXFDQyxHQUFyQyxFQUEyRDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFBQ0MsT0FBRyxFQUFFLENBQUMsT0FBRDtBQUFOLEdBQWpCLENBQWY7O0FBRUEsTUFBSTtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEdBQUcsQ0FBQ1EsSUFBZixDQUFiLENBREEsQ0FFQTs7QUFDQUMsV0FBTyxDQUFDTCxHQUFSLENBQVksSUFBSU0sSUFBSixDQUFTTCxJQUFJLENBQUNNLFVBQWQsQ0FBWixFQUhBLENBSUE7QUFDQTs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTVYsTUFBTSxDQUFDRyxJQUFQLENBQVlRLE1BQVosQ0FBbUI7QUFDdENDLFVBQUksRUFBRTtBQUNGQyxXQUFHLEVBQUVWLElBQUksQ0FBQ1UsR0FEUjtBQUVGQyxZQUFJLEVBQUVDLFFBQVEsQ0FBQ1osSUFBSSxDQUFDVyxJQUFOLENBRlo7QUFHRkwsa0JBQVUsRUFBRU4sSUFBSSxDQUFDTTtBQUhmO0FBRGdDLEtBQW5CLEVBT3BCTyxJQVBvQixDQU9makIsR0FBRyxJQUFHO0FBQ1ZRLGFBQU8sQ0FBQ0wsR0FBUixDQUFZLEtBQVosRUFBbUJILEdBQW5CO0FBQ0gsS0FUc0IsRUFTcEJrQixLQVRvQixDQVNkQyxHQUFHLElBQUc7QUFDWFgsYUFBTyxDQUFDTCxHQUFSLENBQVlnQixHQUFaO0FBQ0gsS0FYc0IsQ0FBdkI7QUFZQVgsV0FBTyxDQUFDTCxHQUFSLENBQVksV0FBWjtBQUNBSyxXQUFPLENBQUNMLEdBQVIsQ0FBWVEsUUFBWjtBQUNBWCxPQUFHLENBQUNvQixNQUFKLENBQVcsR0FBWDtBQUNBcEIsT0FBRyxDQUFDcUIsSUFBSixDQUFTLHFDQUFUO0FBRUgsR0F2QkQsQ0F1QkUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1J0QixPQUFHLENBQUNvQixNQUFKLENBQVcsR0FBWDtBQUNBcEIsT0FBRyxDQUFDcUIsSUFBSixDQUFTO0FBQUNFLFdBQUssRUFBRUQsQ0FBQyxDQUFDRTtBQUFWLEtBQVQ7QUFDSCxHQTFCRCxTQTBCVTtBQUNOLFVBQU12QixNQUFNLENBQUN3QixXQUFQLEVBQU47QUFDSDtBQUVKLEM7Ozs7Ozs7Ozs7O0FDckNELDRDIiwiZmlsZSI6InBhZ2VzL2FwaS91c2Vycy9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoe2xvZzogW1wicXVlcnlcIl19KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcclxuICAgICAgICAvLyBjb25zdCBkYXRlU2VhbiA9IG5ldyBEYXRlKHVzZXIuZGF0ZVNlYW5jZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUodXNlci5kYXRlU2VhbmNlKSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW5kaWRhdERhdGEpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhbmRpZGF0RGF0YS50eXBlJylcclxuICAgICAgICBjb25zdCBjYW5kaWRhdCA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG5vbTogdXNlci5ub20sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBwYXJzZUludCh1c2VyLnR5cGUpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZVNlYW5jZTogdXNlci5kYXRlU2VhbmNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbmRpZGF0cycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhbmRpZGF0KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSk7XHJcbiAgICAgICAgcmVzLmpzb24oJ0VucmVnaXN0cmVtZW50IGVmZmVjdHXDqSBhdmVjIHN1Y2PDqHMnKVxyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCk7XHJcbiAgICAgICAgcmVzLmpzb24oe2Vycm9yOiBlLm1lc3NhZ2V9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9