"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var baseClassName = (0, _getClassName.default)('InnerScroll');

var InnerScroll =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(InnerScroll, _React$Component);

  function InnerScroll() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InnerScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InnerScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onScroll", function (e) {
      if (_this.el.scrollTop <= 0) {
        _this.el.scrollTop = 1;
      } else if (_this.el.scrollTop >= _this.el.scrollHeight - _this.el.offsetHeight) {
        _this.el.scrollTop = _this.el.scrollHeight - _this.el.offsetHeight - 1;
      }

      _this.props.onScroll && _this.props.onScroll(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ref", function (el) {
      return _this.el = el;
    });
    return _this;
  }

  (0, _createClass2.default)(InnerScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.el.scrollTop = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          onScroll = _this$props.onScroll,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "onScroll"]);
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)(baseClassName, className),
        onScroll: this.onScroll,
        ref: this.getRef
      }), children);
    }
  }]);
  return InnerScroll;
}(_react.default.Component);

exports.default = InnerScroll;
(0, _defineProperty2.default)(InnerScroll, "propTypes", {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  style: _propTypes.default.object,
  onScroll: _propTypes.default.func
});
//# sourceMappingURL=InnerScroll.js.map