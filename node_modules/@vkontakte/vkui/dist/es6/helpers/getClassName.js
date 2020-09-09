import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { OS, platform } from '../lib/platform';
import classNames from '../lib/classNames';
export default function getClassname(base) {
  var _classNames;

  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return classNames(base, (_classNames = {}, _defineProperty(_classNames, base + '--ios', osname === OS.IOS), _defineProperty(_classNames, base + '--android', osname === OS.ANDROID), _classNames));
}
//# sourceMappingURL=getClassName.js.map