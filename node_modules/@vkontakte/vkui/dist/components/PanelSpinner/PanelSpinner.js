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

var PanelSpinner = _react.default.memo(function (_ref) {
  var height = _ref.height,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["height"]);
  return _react.default.createElement(_Spinner.default, (0, _extends2.default)({
    size: "small"
  }, restProps, {
    style: {
      height: height
    }
  }));
});

PanelSpinner.defaultProps = {
  height: 96
};
var _default = PanelSpinner;
exports.default = _default;
//# sourceMappingURL=PanelSpinner.js.map