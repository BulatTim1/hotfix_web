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

var _propTypes = _interopRequireDefault(require("prop-types"));

var baseClassName = (0, _getClassName.default)('Link');

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "Component", "getRootRef"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)(baseClassName, className)
  }), children);
};

Link.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  Component: _propTypes.default.any,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
Link.defaultProps = {
  Component: 'a'
};
var _default = Link;
exports.default = _default;
//# sourceMappingURL=Link.js.map