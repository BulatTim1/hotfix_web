"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Tappable = _interopRequireWildcard(require("../Tappable/Tappable"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var baseClassName = (0, _getClassName.default)('TabsItem');

var TabsItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TabsItem, _React$Component);

  function TabsItem() {
    (0, _classCallCheck2.default)(this, TabsItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabsItem).apply(this, arguments));
  }

  (0, _createClass2.default)(TabsItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          selected = _this$props.selected,
          className = _this$props.className,
          after = _this$props.after,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "selected", "className", "after"]);
      return _react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)(baseClassName, {
          'TabsItem--selected': selected
        }, className),
        activeEffectDelay: _platform.IS_PLATFORM_IOS ? 0 : _Tappable.ACTIVE_EFFECT_DELAY
      }), _react.default.createElement("div", {
        className: "TabsItem__in"
      }, children), after && _react.default.createElement("div", {
        className: "TabsItem__after"
      }, after));
    }
  }]);
  return TabsItem;
}(_react.default.Component);

exports.default = TabsItem;
(0, _defineProperty2.default)(TabsItem, "propTypes", {
  children: _propTypes.default.node,
  selected: _propTypes.default.bool,
  className: _propTypes.default.string,
  after: _propTypes.default.node
});
(0, _defineProperty2.default)(TabsItem, "defaultProps", {
  selected: false
});
//# sourceMappingURL=TabsItem.js.map