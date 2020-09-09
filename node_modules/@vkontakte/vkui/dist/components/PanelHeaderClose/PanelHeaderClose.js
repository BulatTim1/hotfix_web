"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _cancel = _interopRequireDefault(require("@vkontakte/icons/dist/24/cancel"));

var _HeaderButton = _interopRequireDefault(require("../HeaderButton/HeaderButton"));

var _platform = require("../../lib/platform");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var PanelHeaderClose = function PanelHeaderClose(_ref) {
  var children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_HeaderButton.default, restProps, platform === _platform.ANDROID ? _react.default.createElement(_cancel.default, null) : children);
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};
var _default = PanelHeaderClose;
exports.default = _default;
//# sourceMappingURL=PanelHeaderClose.js.map