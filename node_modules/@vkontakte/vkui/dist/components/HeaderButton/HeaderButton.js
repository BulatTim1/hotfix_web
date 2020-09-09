"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var HeaderButton = function HeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "primary"]);
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var component = restProps.href ? 'a' : 'button';
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
    component: component,
    activeEffectDelay: 200,
    className: (0, _classNames.default)((0, _getClassName.default)('HeaderButton', platform), className, {
      'HeaderButton--primary': primary
    })
  }), isPrimitive ? _react.default.createElement("span", {
    className: "HeaderButton__primitive"
  }, children) : children);
};

HeaderButton.defaultProps = {
  primary: false
};
var _default = HeaderButton;
exports.default = _default;
//# sourceMappingURL=HeaderButton.js.map