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

var _Header = _interopRequireDefault(require("../Header/Header"));

var baseClassNames = (0, _getClassName.default)('Group');

var Group = function Group(props) {
  var title = props.title,
      description = props.description,
      className = props.className,
      children = props.children,
      getRootRef = props.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(props, ["title", "description", "className", "children", "getRootRef"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)(baseClassNames, className)
  }), title && _react.default.createElement(_Header.default, {
    level: "secondary"
  }, title), children && _react.default.createElement("div", {
    className: "Group__content"
  }, children), description && _react.default.createElement("div", {
    className: "Group__description"
  }, description));
};

Group.propTypes = {
  style: _propTypes.default.object,
  title: _propTypes.default.node,
  description: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
Group.defaultProps = {
  title: null,
  description: null
};
var _default = Group;
exports.default = _default;
//# sourceMappingURL=Group.js.map