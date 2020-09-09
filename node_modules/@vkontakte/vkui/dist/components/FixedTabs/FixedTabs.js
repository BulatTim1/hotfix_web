"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _Tabs = _interopRequireDefault(require("../Tabs/Tabs"));

var _platform = require("../../lib/platform");

/**
 * @deprecated Для отрисовки фиксированных табов используйте связку `Tabs` и `FixedLayout`.
 * Этот компонент устарел и будет удален в 3.0.0.
 */
var FixedTabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FixedTabs, _React$Component);

  function FixedTabs() {
    (0, _classCallCheck2.default)(this, FixedTabs);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FixedTabs).apply(this, arguments));
  }

  (0, _createClass2.default)(FixedTabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vertical = _this$props.vertical,
          className = _this$props.className,
          style = _this$props.style,
          theme = _this$props.theme,
          children = _this$props.children;
      return _react.default.createElement(_FixedLayout.default, {
        vertical: vertical,
        className: className,
        style: style
      }, _react.default.createElement(_Tabs.default, {
        theme: theme
      }, children));
    }
  }]);
  return FixedTabs;
}(_react.default.Component);

exports.default = FixedTabs;
(0, _defineProperty2.default)(FixedTabs, "propTypes", {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  vertical: _propTypes.default.oneOf(['top', 'bottom']),
  style: _propTypes.default.object,

  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии.
   * Для Android актуален только header
   */
  theme: _propTypes.default.oneOf(['light', 'header']),

  /**
   * iOS only
   */
  type: _propTypes.default.oneOf(['default', 'buttons'])
});
(0, _defineProperty2.default)(FixedTabs, "defaultProps", {
  theme: _platform.IS_PLATFORM_IOS ? 'light' : 'header',
  vertical: 'top'
});
//# sourceMappingURL=FixedTabs.js.map