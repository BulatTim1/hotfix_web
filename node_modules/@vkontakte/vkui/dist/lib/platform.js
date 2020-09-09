"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform = platform;
exports.IS_PLATFORM_ANDROID = exports.IS_PLATFORM_IOS = exports.IOS = exports.ANDROID = exports.OS = void 0;

var _dom = require("./dom");

var OS;
exports.OS = OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
})(OS || (exports.OS = OS = {}));

var ANDROID = OS.ANDROID;
exports.ANDROID = ANDROID;
var IOS = OS.IOS;
exports.IOS = IOS;

function platform(useragent) {
  var ua = useragent || _dom.canUseDOM && navigator.userAgent || '';
  return /android/i.test(ua) ? ANDROID : IOS;
} // @TODO выпилить в 3.0.0

/**
 * @deprecated будет удалено в 3.0.0, так как для SSR нужно определять osname не один раз при запуске, а на каждый
 * запрос.
 */


var osname = platform();
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.IOS
 */

var IS_PLATFORM_IOS = osname === IOS;
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.ANDROID
 */

exports.IS_PLATFORM_IOS = IS_PLATFORM_IOS;
var IS_PLATFORM_ANDROID = osname === ANDROID;
exports.IS_PLATFORM_ANDROID = IS_PLATFORM_ANDROID;
//# sourceMappingURL=platform.js.map