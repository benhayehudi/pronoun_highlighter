webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_evaltext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/evaltext */ "./components/evaltext.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_counters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/counters */ "./components/counters.js");
/* harmony import */ var _components_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/words */ "./components/words.js");
/* harmony import */ var _logic_count_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/count_func */ "./logic/count_func.js");
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      textInput: '',
      maleCount: 0,
      femaleCount: 0,
      neutralCount: 0
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.analyzeText = _this.analyzeText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        textInput: event.target.value
      });
    }
  }, {
    key: "analyzeText",
    value: function analyzeText(event) {
      event.preventDefault();
      this.setState({
        maleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["maleList"], this.state.textInput.split(" ")),
        femaleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["femaleList"], this.state.textInput.split(" ")),
        neutralCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["neutralList"], this.state.textInput.split(" "))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formattedText = this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(function (word) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_evaltext__WEBPACK_IMPORTED_MODULE_2__["default"], {
          word: word,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      }) : 'Waiting for your input.';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4221879327",
        css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.body.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content-wrapper.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form-area.jsx-4221879327{margin-right:5px;}.divider.jsx-4221879327{width:10px;margin:6px;background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENzQixBQUVxRixBQUd6RCxBQUtBLEFBS0ksQUFHTixXQUNBLE1BSGIsS0FJbUIsaUJBQ25CLG1DQWZ3QixBQUtDLDhFQUp6QixxQkFLQSIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2YWxUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvZXZhbHRleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVycyc7XG5pbXBvcnQge2ZlbWFsZUxpc3QsIG1hbGVMaXN0LCBuZXV0cmFsTGlzdH0gZnJvbSAnLi4vY29tcG9uZW50cy93b3Jkcyc7XG5pbXBvcnQgeyBjb3VudEluc3RhbmNlcyB9IGZyb20gJy4uL2xvZ2ljL2NvdW50X2Z1bmMnO1xuXG4gIGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGV4dElucHV0OiAnJyxcbiAgICAgICAgbWFsZUNvdW50OiAwLFxuICAgICAgICBmZW1hbGVDb3VudDogMCxcbiAgICAgICAgbmV1dHJhbENvdW50OiAwXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRleHQgPSB0aGlzLmFuYWx5emVUZXh0LmJpbmQodGhpcyk7XG4gICAgfVxuICBcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0SW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHl6ZVRleHQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFsZUNvdW50OiBjb3VudEluc3RhbmNlcyhtYWxlTGlzdCwgdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpKSxcbiAgICAgICAgZmVtYWxlQ291bnQ6IGNvdW50SW5zdGFuY2VzKGZlbWFsZUxpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSksXG4gICAgICAgIG5ldXRyYWxDb3VudDogY291bnRJbnN0YW5jZXMobmV1dHJhbExpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUZXh0ID0gXG4gICAgICAgIHRoaXMuc3RhdGUudGV4dElucHV0Lmxlbmd0aCA+IDAgPyB0aGlzLnN0YXRlLnRleHRJbnB1dC5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4gPEV2YWxUZXh0IHdvcmQ9e3dvcmR9IC8+KSA6ICdXYWl0aW5nIGZvciB5b3VyIGlucHV0LidcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUt1bWFyK09uZStPdXRsaW5lJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLWFyZWEge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1hcmVhXCI+XG4gICAgICAgICAgICAgIDxmb3JtPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIzMFwiIGNvbHM9XCI2MFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwiaW5wdXQtYXJlYVwiIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuYW5hbHl6ZVRleHQoZXZlbnQpfT5BbmFseXplIFRleHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYXJlYVwiPlxuICAgICAgICAgICAgICB7Zm9ybWF0dGVkVGV4dH1cbiAgICAgICAgICAgICAgPENvdW50ZXJzIFxuICAgICAgICAgICAgICAgIGZlbWFsZU51bT17dGhpcy5zdGF0ZS5mZW1hbGVDb3VudH0gbWFsZU51bT17dGhpcy5zdGF0ZS5tYWxlQ291bnR9IG5ldXRyYWxOdW09e3RoaXMuc3RhdGUubmV1dHJhbENvdW50fSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Plxuw58gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "main-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "form-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "30",
        cols: "60",
        value: this.state.value,
        onChange: this.handleChange,
        id: "input-area",
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick(event) {
          return _this2.analyzeText(event);
        },
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Analyze Text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, formattedText, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_counters__WEBPACK_IMPORTED_MODULE_4__["default"], {
        femaleNum: this.state.femaleCount,
        maleNum: this.state.maleCount,
        neutralNum: this.state.neutralCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))), "\xDF        ");
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6f281a8090f8f7b14e7b.hot-update.js.map