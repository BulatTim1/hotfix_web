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

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var baseClassNames = (0, _getClassName.default)('Header');

function mapOldLevel(level) {
  switch (level) {
    case '1':
      return 'primary';

    case '2':
      return 'secondary';

    default:
      return level;
  }
}

var Header = function Header(_ref) {
  var className = _ref.className,
      level = _ref.level,
      children = _ref.children,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "level", "children", "indicator", "aside", "getRootRef"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames2.default)(baseClassNames, className, (0, _defineProperty2.default)({}, "Header--level-".concat(mapOldLevel(level)), true))
  }), _react.default.createElement("div", {
    className: "Header__in"
  }, _react.default.createElement("div", {
    className: "Header__content"
  }, children), indicator && _react.default.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && _react.default.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.mapOldLevel = mapOldLevel;
Header.propTypes = {
  className: _propTypes.default.string,

  /**
   * Значения `1` и `2` устарели. Вместо них используйте `primary` и `secondary`. Маппинг на новые значения находится в
   * статическом методе `Header.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
   */
  level: _propTypes.default.oneOf(['1', '2', 'primary', 'secondary']),
  indicator: _propTypes.default.node,
  aside: _propTypes.default.node,
  children: _propTypes.default.node,
  style: _propTypes.default.object,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
};
Header.defaultProps = {
  level: 'primary'
};
var _default = Header;
exports.default = _default;
//# sourceMappingURL=Header.js.map