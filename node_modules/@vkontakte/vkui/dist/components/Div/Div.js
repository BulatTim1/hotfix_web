"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Div = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Div = function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)((0, _getClassName.default)('Div', platform), className)
  }), children);
};

exports.Div = Div;
var _default = Div;
exports.default = _default;
//# sourceMappingURL=Div.js.map