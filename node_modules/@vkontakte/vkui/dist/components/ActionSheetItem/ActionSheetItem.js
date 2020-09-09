"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      theme = _ref.theme,
      before = _ref.before,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "autoclose", "theme", "before"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('ActionSheetItem', platform), className, "ActionSheetItem--".concat(theme)),
    component: theme === 'cancel' ? 'span' : 'div'
  }), before && _react.default.createElement("div", {
    className: "ActionSheetItem__before"
  }, before), _react.default.createElement("div", {
    className: "ActionSheetItem__container"
  }, _react.default.createElement("div", {
    className: "ActionSheetItem__content"
  }, _react.default.createElement("div", {
    className: "ActionSheetItem__children"
  }, children))));
};

ActionSheetItem.defaultProps = {
  theme: 'default'
};
var _default = ActionSheetItem;
exports.default = _default;
//# sourceMappingURL=ActionSheetItem.js.map