"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      className = _ref.className,
      status = _ref.status,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "top", "bottom", "className", "status"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classNames.default)((0, _getClassName.default)('FormLayoutGroup', platform), className)
  }, restProps), children);
};

var _default = FormLayoutGroup;
exports.default = _default;
//# sourceMappingURL=FormLayoutGroup.js.map