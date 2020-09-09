import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @deprecated будет удален в версии 3.0.0
 */
var querystring = {
  parse: function parse() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (typeof string !== 'string') return {};
    var matches = /\?(.+)$/ig.exec(string);
    var str = matches ? matches[1] : string;
    return str.split('&').reduce(function (acc, item) {
      var param = item.split('=');

      if (param[1]) {
        acc[param[0]] = decodeURIComponent(param[1]);
      }

      return acc;
    }, {});
  },
  create: function create() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments.length > 1 ? arguments[1] : undefined;
    if (_typeof(data) !== 'object' || data === null) return '';

    var options = _objectSpread({
      encode: true
    }, opts);

    return Object.keys(data).reduce(function (acc, item) {
      var type = _typeof(data[item]);

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + (options.encode ? encodeURIComponent(data[item]) : data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(function (value) {
          acc.push(item + '[]=' + (options.encode ? encodeURIComponent(value) : value));
        });
      }

      return acc;
    }, []).join('&');
  }
};
export default querystring;
//# sourceMappingURL=querystring.js.map