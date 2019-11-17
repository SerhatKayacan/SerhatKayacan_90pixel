webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
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
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Store */ "./components/Store.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");






var _class,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\90pixel - Kopya (2)\\components\\Form.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Form = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Form, _React$Component);

  function Form() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Form).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("form", {
        className: "form-inline mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "form-group mx-sm-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        className: "form-control",
        id: "movieName",
        placeholder: "enter name",
        onChange: function onChange(e) {
          return _Store__WEBPACK_IMPORTED_MODULE_6__["default"].changeInput(e.target.value, e.target.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), __jsx("div", {
        className: "form-group mx-sm-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("input", {
        type: "number",
        className: "form-control",
        id: "movieYear",
        placeholder: "enter year",
        onChange: function onChange(e) {
          return _Store__WEBPACK_IMPORTED_MODULE_6__["default"].changeInput(e.target.value, e.target.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("select", {
        className: "form-control",
        id: "movieType",
        onChange: function onChange(e) {
          return _Store__WEBPACK_IMPORTED_MODULE_6__["default"].changeInput(e.target.value, e.target.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("option", {
        value: "movie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "movie"), __jsx("option", {
        value: "series",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "series"), __jsx("option", {
        value: "episode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "episode"))), __jsx("button", {
        type: "submit",
        className: "btn btn-primary ml-2",
        onClick: _Store__WEBPACK_IMPORTED_MODULE_6__["default"].getMovies,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Get Movies")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.9559c579e89d9abfe32f.hot-update.js.map