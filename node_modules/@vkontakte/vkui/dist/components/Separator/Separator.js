"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "wide"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('Separator'), className, {
      'Separator--wide': wide
    })
  }), _react.default.createElement("div", {
    className: "Separator__in"
  }));
}

Separator.propTypes = {
  className: _propTypes.default.string,

  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide: _propTypes.default.bool
};

var _default = _react.default.memo(Separator);

exports.default = _default;
//# sourceMappingURL=Separator.js.map