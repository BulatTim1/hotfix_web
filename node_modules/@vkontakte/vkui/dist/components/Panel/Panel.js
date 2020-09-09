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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _constants = require("../../appearance/constants");

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _utils = require("../../lib/utils");

var Panel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Panel, _Component);

  function Panel() {
    (0, _classCallCheck2.default)(this, Panel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Panel).apply(this, arguments));
  }

  (0, _createClass2.default)(Panel, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          theme = _this$props.theme,
          insets = _this$props.insets,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "centered", "children", "theme", "insets", "platform"]);
      var tabbarPadding = this.context.hasTabbar ? _constants.tabbarHeight : 0;
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames2.default)((0, _getClassName.default)('Panel', platform), className, (0, _defineProperty2.default)({
          'Panel--centered': centered
        }, "Panel--tm-".concat(theme), theme))
      }), _react.default.createElement(_Touch.default, {
        className: "Panel__in",
        style: {
          paddingBottom: (0, _utils.isNumeric)(insets.bottom) ? insets.bottom + tabbarPadding : null
        }
      }, _react.default.createElement("div", {
        className: "Panel__in-before"
      }), children, _react.default.createElement("div", {
        className: "Panel__in-after"
      })));
    }
  }]);
  return Panel;
}(_react.Component);

(0, _defineProperty2.default)(Panel, "childContextTypes", {
  panel: _propTypes.default.string
});
(0, _defineProperty2.default)(Panel, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(['white', 'gray']),
  id: _propTypes.default.string.isRequired,
  centered: _propTypes.default.bool,
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  insets: _propTypes.default.object,

  /**
   * @ignore
   */
  platform: _propTypes.default.string
});
(0, _defineProperty2.default)(Panel, "defaultProps", {
  children: '',
  theme: 'gray',
  centered: false
});
(0, _defineProperty2.default)(Panel, "contextTypes", {
  hasTabbar: _propTypes.default.bool
});

var _default = (0, _withPlatform.default)((0, _withInsets.default)(Panel));

exports.default = _default;
//# sourceMappingURL=Panel.js.map