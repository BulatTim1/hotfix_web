"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SSRWrapper = exports.SSRContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _platform = require("./platform");

var SSRContext = _react.default.createContext({
  platform: null
});

exports.SSRContext = SSRContext;

var SSRWrapper = function SSRWrapper(_ref) {
  var userAgent = _ref.userAgent,
      children = _ref.children;
  return _react.default.createElement(SSRContext.Provider, {
    value: {
      platform: (0, _platform.platform)(userAgent)
    }
  }, children);
};

exports.SSRWrapper = SSRWrapper;
//# sourceMappingURL=SSR.js.map