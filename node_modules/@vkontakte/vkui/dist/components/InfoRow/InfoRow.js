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

var baseClassName = (0, _getClassName.default)('InfoRow');

var InfoRow = function InfoRow(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["title", "className", "children"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)(baseClassName, className)
  }), title && _react.default.createElement("div", {
    className: "InfoRow__title"
  }, title), children && _react.default.createElement("div", null, children));
};

InfoRow.propTypes = {
  title: _propTypes.default.node.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
var _default = InfoRow;
exports.default = _default;
//# sourceMappingURL=InfoRow.js.map