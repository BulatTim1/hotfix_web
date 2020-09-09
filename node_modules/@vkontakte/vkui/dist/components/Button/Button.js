"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _CellButton = _interopRequireDefault(require("../CellButton/CellButton"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var mapOldLevel = function mapOldLevel(level) {
  switch (level) {
    case '1':
      return 'primary';

    case '2':
      return 'secondary';

    case '3':
      return 'tertiary';

    case 'sell':
      return 'outline';

    case 'buy':
      return 'commerce';

    default:
      return level;
  }
};

var Button = function Button(props) {
  var platform = (0, _usePlatform.default)();

  if (props.type === 'cell') {
    return _react.default.createElement(_CellButton.default, (0, _extends2.default)({}, props, {
      level: props.level === 'destructive' ? 'danger' : 'primary'
    }));
  } else {
    var _classNames;

    var className = props.className,
        size = props.size,
        level = props.level,
        stretched = props.stretched,
        align = props.align,
        children = props.children,
        before = props.before,
        after = props.after,
        type = props.type,
        getRootRef = props.getRootRef,
        restProps = (0, _objectWithoutProperties2.default)(props, ["className", "size", "level", "stretched", "align", "children", "before", "after", "type", "getRootRef"]);
    return _react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
      className: (0, _classNames2.default)((0, _getClassName.default)('Button', platform), className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "Button--sz-".concat(size), true), (0, _defineProperty2.default)(_classNames, "Button--lvl-".concat(mapOldLevel(level)), true), (0, _defineProperty2.default)(_classNames, "Button--aln-".concat(align || 'center'), true), (0, _defineProperty2.default)(_classNames, "Button--str", stretched), _classNames)),
      getRootRef: getRootRef
    }), _react.default.createElement("div", {
      className: "Button__in"
    }, before && _react.default.createElement("div", {
      className: "Button__before"
    }, before), children && _react.default.createElement("div", {
      className: "Button__content"
    }, children), after && _react.default.createElement("div", {
      className: "Button__after"
    }, after)));
  }
};

Button.defaultProps = {
  level: 'primary',
  type: 'default',
  component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true
};
var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map