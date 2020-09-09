"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _chevron_back = _interopRequireDefault(require("@vkontakte/icons/dist/28/chevron_back"));

var _back = _interopRequireDefault(require("@vkontakte/icons/dist/24/back"));

var _HeaderButton = _interopRequireDefault(require("../HeaderButton/HeaderButton"));

var _platform = require("../../lib/platform");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var PanelHeaderBack = _react.default.memo(function (props) {
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_HeaderButton.default, props, platform === _platform.ANDROID ? _react.default.createElement(_back.default, null) : _react.default.createElement(_chevron_back.default, null));
});

var _default = PanelHeaderBack;
exports.default = _default;
//# sourceMappingURL=PanelHeaderBack.js.map