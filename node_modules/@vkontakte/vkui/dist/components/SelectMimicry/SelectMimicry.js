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

var _dropdown = _interopRequireDefault(require("@vkontakte/icons/dist/24/dropdown"));

var _FormField = _interopRequireDefault(require("../FormField/FormField"));

var SelectMimicry = function SelectMimicry(_ref) {
  var className = _ref.className,
      tabIndex = _ref.tabIndex,
      placeholder = _ref.placeholder,
      children = _ref.children,
      alignment = _ref.alignment,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      multiline = _ref.multiline,
      disabled = _ref.disabled,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "tabIndex", "placeholder", "children", "alignment", "status", "getRootRef", "multiline", "disabled"]);
  return _react.default.createElement(_FormField.default, (0, _extends2.default)({}, restProps, {
    tabIndex: disabled ? null : tabIndex,
    className: (0, _classNames2.default)('Select', 'Select--mimicry', (0, _defineProperty2.default)({
      'Select--not-selected': !children,
      'Select--multiline': multiline,
      'Select--disabled': disabled
    }, "Select--align-".concat(alignment), !!alignment), className),
    getRootRef: getRootRef,
    status: status
  }), _react.default.createElement("div", {
    className: "Select__container"
  }, _react.default.createElement("div", {
    className: "Select__title"
  }, children || placeholder), _react.default.createElement(_dropdown.default, null)));
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};
var _default = SelectMimicry;
exports.default = _default;
//# sourceMappingURL=SelectMimicry.js.map