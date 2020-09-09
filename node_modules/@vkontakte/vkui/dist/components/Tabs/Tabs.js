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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var baseClassName = (0, _getClassName.default)('Tabs');

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tabs, _React$Component);

  function Tabs() {
    (0, _classCallCheck2.default)(this, Tabs);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tabs).apply(this, arguments));
  }

  (0, _createClass2.default)(Tabs, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          theme = _this$props.theme,
          style = _this$props.style,
          type = _this$props.type,
          getRootRef = _this$props.getRootRef,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "theme", "style", "type", "getRootRef"]);
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        ref: getRootRef,
        className: (0, _classNames2.default)(baseClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "Tabs--".concat(this.theme), true), (0, _defineProperty2.default)(_classNames, "Tabs--".concat(type), true), _classNames), className),
        style: style
      }), children);
    }
  }, {
    key: "theme",

    /**
     * Метод нужен для маппинга устаревших значений theme на новые
     * @returns {string}
     */
    get: function get() {
      switch (this.props.theme) {
        case 'white':
          return 'header';

        case 'gray':
          return 'light';

        default:
          return this.props.theme;
      }
    }
  }]);
  return Tabs;
}(_react.default.Component);

exports.default = Tabs;
(0, _defineProperty2.default)(Tabs, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии
   */
  theme: _propTypes.default.oneOf(['light', 'header']),

  /**
   * Свойство отвечает за растягивание табов
   */
  type: _propTypes.default.oneOf(['default', 'buttons']),
  style: _propTypes.default.object,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
});
(0, _defineProperty2.default)(Tabs, "defaultProps", {
  theme: 'light',
  type: 'default'
});
//# sourceMappingURL=Tabs.js.map