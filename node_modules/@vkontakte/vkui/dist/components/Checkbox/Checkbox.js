"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Tappable = _interopRequireWildcard(require("../Tappable/Tappable"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var _done = _interopRequireDefault(require("@vkontakte/icons/dist/16/done"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "style", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_Tappable.default, {
    component: "label",
    className: (0, _classNames.default)((0, _getClassName.default)('Checkbox', platform), className),
    style: style,
    disabled: restProps.disabled,
    activeEffectDelay: platform === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
    getRootRef: getRootRef
  }, _react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    type: "checkbox",
    className: "Checkbox__input"
  })), _react.default.createElement("div", {
    className: "Checkbox__container"
  }, _react.default.createElement("div", {
    className: "Checkbox__icon"
  }, _react.default.createElement(_done.default, null)), _react.default.createElement("div", {
    className: "Checkbox__content"
  }, children)));
};

exports.Checkbox = Checkbox;
var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=Checkbox.js.map