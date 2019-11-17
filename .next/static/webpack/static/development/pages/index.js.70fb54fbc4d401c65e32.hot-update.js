webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Store.js":
/*!*****************************!*\
  !*** ./components/Store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _MoviesDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MoviesDataService */ "./components/MoviesDataService.js");







var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;



var MovieStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function MovieStore() {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MovieStore);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "resultMovies", _descriptor, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "movieTitle", _descriptor2, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "movieYear", _descriptor3, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "movieType", _descriptor4, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "favourites", _descriptor5, this);

    this.getMovies = function (e) {
      e.preventDefault();
      _MoviesDataService__WEBPACK_IMPORTED_MODULE_7__["default"].getSearchedMovies(_this.movieTitle, _this.movieYear, _this.movieType).then(function (res) {
        _this.resultMovies = res.data.Search;
      });
    };
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieStore, [{
    key: "changeInput",
    value: function changeInput(value, id) {
      if (id === "movieName") {
        this.movieTitle = value;
      } else if (id === "movieYear") {
        this.movieYear = value;
      } else {
        this.movieType = value;
      }
    }
  }, {
    key: "addToFavourites",
    value: function addToFavourites(index) {
      var movieToAdd = this.resultMovies[index];
      this.favourites.push(movieToAdd);
      localStorage.setItem("favoriler", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newFavorites));
    }
  }, {
    key: "component_did_mount",
    value: function component_did_mount() {
      this.favourites = JSON.parse(localStorage.getItem("favoriler"));
    }
  }]);

  return MovieStore;
}(), _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "resultMovies", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "movieTitle", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "movieYear", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "movieType", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "movie";
  }
}), _descriptor5 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "favourites", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new MovieStore());

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false

})
//# sourceMappingURL=index.js.70fb54fbc4d401c65e32.hot-update.js.map