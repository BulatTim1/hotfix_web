"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _HeaderButton = _interopRequireDefault(require("../HeaderButton/HeaderButton"));

var _platform = require("../../lib/platform");

var _write = _interopRequireDefault(require("@vkontakte/icons/dist/24/write"));

var _done = _interopRequireDefault(require("@vkontakte/icons/dist/24/done"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var PanelHeaderEdit = function PanelHeaderEdit(_ref) {
  var isActive = _ref.isActive,
      editLabel = _ref.editLabel,
      doneLabel = _ref.doneLabel,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["isActive", "editLabel", "doneLabel"]);
  var iOSText = isActive ? doneLabel : editLabel;
  var AndroidIcon = isActive ? _react.default.createElement(_done.default, null) : _react.default.createElement(_write.default, null);
  var platform = (0, _usePlatform.default)();
  return _react.default.createElement(_HeaderButton.default, restProps, platform === _platform.ANDROID ? AndroidIcon : iOSText);
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};
var _default = PanelHeaderEdit;
exports.default = _default;
//# sourceMappingURL=PanelHeaderEdit.js.map