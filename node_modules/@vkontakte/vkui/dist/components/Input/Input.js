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

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _FormField = _interopRequireDefault(require("../FormField/FormField"));

var Input = function Input(_ref) {
  var alignment = _ref.alignment,
      status = _ref.status,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["alignment", "status", "getRef", "className", "getRootRef"]);
  return _react.default.createElement(_FormField.default, {
    className: (0, _classNames2.default)('Input', className, (0, _defineProperty2.default)({}, "Input--".concat(alignment), !!alignment)),
    status: status,
    getRootRef: getRootRef
  }, _react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    className: "Input__el",
    ref: getRef
  })));
};

Input.defaultProps = {
  type: 'text'
};
var _default = Input;
exports.default = _default;
//# sourceMappingURL=Input.js.map