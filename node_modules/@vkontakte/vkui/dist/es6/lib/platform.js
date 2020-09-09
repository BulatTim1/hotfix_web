import { canUseDOM } from './dom';
export var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
})(OS || (OS = {}));

export var ANDROID = OS.ANDROID;
export var IOS = OS.IOS;
export function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
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

export var IS_PLATFORM_IOS = osname === IOS;
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.ANDROID
 */

export var IS_PLATFORM_ANDROID = osname === ANDROID;
//# sourceMappingURL=platform.js.map