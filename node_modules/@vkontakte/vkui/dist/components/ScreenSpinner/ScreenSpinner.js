"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));

var _PopoutWrapper = _interopRequireDefault(require("../PopoutWrapper/PopoutWrapper"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var ScreenSpinner = function ScreenSpinner(props) {
  var style = props.style,
      className = props.className,
      restProps = (0, _objectWithoutProperties2.default)(props, ["style", "className"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_PopoutWrapper.default, {
    className: (0, _classNames.default)((0, _getClassName.default)('ScreenSpinner', platform), className),
    style: style
  }, _react.default.createElement("div", {
    className: "ScreenSpinner__container"
  }, _react.default.createElement(_Spinner.default, (0, _extends2.default)({
    size: "large"
  }, restProps))));
};

var _default = ScreenSpinner;
exports.default = _default;
//# sourceMappingURL=ScreenSpinner.js.map