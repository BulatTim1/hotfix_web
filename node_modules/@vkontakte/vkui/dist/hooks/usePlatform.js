"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePlatform;

var _react = require("react");

var _platform = require("../lib/platform");

var _SSR = require("../lib/SSR");

function usePlatform() {
  var ssrContext = (0, _react.useContext)(_SSR.SSRContext);
  return ssrContext.platform || (0, _platform.platform)();
}
//# sourceMappingURL=usePlatform.js.map