webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MoviesList.js":
/*!**********************************!*\
  !*** ./components/MoviesList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Movie */ "./components/Movie.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Store */ "./components/Store.js");






var _class,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\90pixel - Kopya (2)\\components\\MoviesList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var MoviesList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MoviesList, _React$Component);

  function MoviesList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MoviesList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MoviesList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MoviesList, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, _Store__WEBPACK_IMPORTED_MODULE_8__["default"].resultMovies.map(function (movie, index) {
        return __jsx("div", {
          className: "row mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, __jsx("div", {
          className: "col-md-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx(_components_Movie__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: movie.imdbID,
          index: index,
          movie: movie,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        })), __jsx("div", {
          className: "col-md-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("button", {
          onClick: function onClick() {
            return _Store__WEBPACK_IMPORTED_MODULE_8__["default"].addToFavourites(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, "Favorilere ekle")));
      })));
    }
  }]);

  return MoviesList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (MoviesList);

/***/ })

})
//# sourceMappingURL=index.js.8254bfd0da5676d4befa.hot-update.js.map