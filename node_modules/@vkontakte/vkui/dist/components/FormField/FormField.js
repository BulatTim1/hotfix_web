"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormField = function FormField(_ref) {
  var TagName = _ref.TagName,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["TagName", "className", "children", "status", "getRootRef"]);
  var platform = (0, _usePlatform.default)(); // Не используем тут JSX из-за этой проблемы: https://github.com/Microsoft/TypeScript/issues/28892

  return _react.default.createElement(TagName, _objectSpread({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames2.default)((0, _getClassName.default)('FormField', platform), (0, _defineProperty2.default)({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), _react.default.createElement(_react.default.Fragment, null, children, _react.default.createElement("div", {
    className: "FormField__border"
  })));
};

FormField.defaultProps = {
  status: 'default',
  TagName: 'div'
};
var _default = FormField;
exports.default = _default;
//# sourceMappingURL=FormField.js.map