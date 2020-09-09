"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassname;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _platform = require("../lib/platform");

var _classNames2 = _interopRequireDefault(require("../lib/classNames"));

function getClassname(base) {
  var _classNames;

  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _platform.platform)();
  return (0, _classNames2.default)(base, (_classNames = {}, (0, _defineProperty2.default)(_classNames, base + '--ios', osname === _platform.OS.IOS), (0, _defineProperty2.default)(_classNames, base + '--android', osname === _platform.OS.ANDROID), _classNames));
}
//# sourceMappingURL=getClassName.js.map