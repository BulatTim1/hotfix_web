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

var _spinner = _interopRequireDefault(require("@vkontakte/icons/dist/24/spinner"));

var _spinner2 = _interopRequireDefault(require("@vkontakte/icons/dist/32/spinner"));

var _spinner3 = _interopRequireDefault(require("@vkontakte/icons/dist/44/spinner"));

var _spinner4 = _interopRequireDefault(require("@vkontakte/icons/dist/16/spinner"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var svgSpinner = function svgSpinner(size) {
  switch (size) {
    case 'large':
      return _react.default.createElement(_spinner3.default, {
        className: "Spinner__self"
      });

    case 'medium':
      return _react.default.createElement(_spinner2.default, {
        className: "Spinner__self"
      });

    case 'small':
      return _react.default.createElement(_spinner4.default, {
        className: "Spinner__self"
      });

    default:
      return _react.default.createElement(_spinner.default, {
        className: "Spinner__self"
      });
  }
};

var Spinner = _react.default.memo(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "size"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('Spinner', platform), className)
  }), svgSpinner(size));
});

Spinner.defaultProps = {
  size: 'regular'
};
var _default = Spinner;
exports.default = _default;
//# sourceMappingURL=Spinner.js.map