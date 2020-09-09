"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withPlatform;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _SSR = require("../lib/SSR");

var _platform = require("../lib/platform");

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = _react.default.useContext(_SSR.SSRContext); // @ts-ignore


    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      platform: ssrContext.platform || (0, _platform.platform)()
    }));
  }

  return WithPlatform;
}
//# sourceMappingURL=withPlatform.js.map