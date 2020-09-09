"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      TagName = props.TagName,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "TagName", "className", "getRef", "onSubmit"]);
  var platform = (0, _usePlatform.default)(); // Не используем тут JSX из-за этой проблемы: https://github.com/Microsoft/TypeScript/issues/28892

  return _react.default.createElement(TagName, _objectSpread({}, restProps, {
    className: (0, _classNames2.default)((0, _getClassName.default)('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
    className: "FormLayout__container"
  }, _react.Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return _react.default.createElement("div", {
        className: (0, _classNames2.default)('FormLayout__row', (0, _defineProperty2.default)({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && _react.default.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && _react.default.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), TagName === 'form' && _react.default.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  })));
};

FormLayout.defaultProps = {
  TagName: 'form',
  onSubmit: preventDefault
};
var _default = FormLayout;
exports.default = _default;
//# sourceMappingURL=FormLayout.js.map