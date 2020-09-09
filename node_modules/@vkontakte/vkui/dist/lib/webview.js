"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWebView = void 0;

var _vkConnect = _interopRequireDefault(require("@vkontakte/vk-connect"));

var isWebView = _vkConnect.default.isWebView();

exports.isWebView = isWebView;
//# sourceMappingURL=webview.js.map