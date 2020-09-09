"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _Div = _interopRequireDefault(require("../Div/Div"));

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  return _react.default.createElement(_Div.default, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)('Footer', className)
  }), children);
};

var _default = Footer;
exports.default = _default;
//# sourceMappingURL=Footer.js.map