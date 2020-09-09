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

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var FormStatus = function FormStatus(_ref) {
  var state = _ref.state,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["state", "title", "children", "className", "dangerouslySetInnerHTML"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames2.default)((0, _getClassName.default)('FormStatus', platform), (0, _defineProperty2.default)({}, "FormStatus--".concat(state), !!state), className)
  }), title && _react.default.createElement("div", {
    className: "FormStatus__title"
  }, title), dangerouslySetInnerHTML && _react.default.createElement("div", {
    className: "FormStatus__content",
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }), children && !dangerouslySetInnerHTML && _react.default.createElement("div", {
    className: "FormStatus__content"
  }, children));
};

var _default = FormStatus;
exports.default = _default;
//# sourceMappingURL=FormStatus.js.map