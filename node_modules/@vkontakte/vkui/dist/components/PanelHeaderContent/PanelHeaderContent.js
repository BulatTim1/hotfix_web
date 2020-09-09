"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _platform = require("../../lib/platform");

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseClassNames = (0, _getClassName.default)('PanelHeaderContent');

var PanelHeaderContent = function PanelHeaderContent(_ref) {
  var className = _ref.className,
      style = _ref.style,
      aside = _ref.aside,
      status = _ref.status,
      before = _ref.before,
      children = _ref.children,
      onClick = _ref.onClick,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "aside", "status", "before", "children", "onClick"]);
  var InComponent = onClick ? _Tappable.default : 'div';
  var rootProps = onClick ? {} : restProps;
  var inProps = onClick ? _objectSpread({}, restProps, {
    activeEffectDelay: 200
  }) : {};
  return _react.default.createElement("div", (0, _extends2.default)({}, rootProps, {
    className: (0, _classNames.default)(baseClassNames, className),
    style: style
  }), _platform.IS_PLATFORM_ANDROID && before && _react.default.createElement("div", {
    className: "PanelHeaderContent__before"
  }, before), _react.default.createElement(InComponent, (0, _extends2.default)({}, inProps, {
    className: "PanelHeaderContent__in",
    onClick: onClick
  }), status && _react.default.createElement("div", {
    className: "PanelHeaderContent__status"
  }, status), _react.default.createElement("div", {
    className: "PanelHeaderContent__children"
  }, _react.default.createElement("span", {
    className: "PanelHeaderContent__children-in"
  }, children), aside && _react.default.createElement("div", {
    className: "PanelHeaderContent__aside"
  }, aside))));
};

PanelHeaderContent.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  aside: _propTypes.default.node,
  status: _propTypes.default.node,
  onClick: _propTypes.default.func,

  /**
   * Android only
   */
  before: _propTypes.default.node
};
var _default = PanelHeaderContent;
exports.default = _default;
//# sourceMappingURL=PanelHeaderContent.js.map