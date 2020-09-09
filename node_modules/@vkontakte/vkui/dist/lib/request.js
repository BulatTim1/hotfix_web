"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _querystring = _interopRequireDefault(require("./querystring"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOptions = {
  method: 'GET',
  data: null
};

function getXMLHttpRequest() {
  if (typeof XMLHttpRequest !== 'undefined') {
    // eslint-disable-next-line
    return new XMLHttpRequest();
  }
}

function makeRequest(url, options) {
  var isCanceled;
  var error = new Error('Request was aborted');
  var request = getXMLHttpRequest();

  var opts = _objectSpread({}, defaultOptions, {}, options);

  if (opts.data && opts.method.toLowerCase() === 'get') {
    url += "?".concat(_querystring.default.create(opts.data));
  }

  var requestPromise = new Promise(function (resolve, reject) {
    if (!request) {
      reject(new Error('XMLHttpRequest not supported'));
    }

    if (opts.timeout) {
      request.timeout = opts.timeout;
    }

    request.open(opts.method, url, true);

    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        request.setRequestHeader(key, opts.headers[key]);
      });
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error(request.status));
        }
      }
    };

    request.ontimeout = function () {
      reject(new Error('XMLHttpRequest timeout expires'));
    };

    request.send(opts.data);
  });
  return {
    promise: new Promise(function (resolve, reject) {
      requestPromise.then(function (res) {
        return isCanceled ? reject(error) : resolve(res);
      }).catch(function (e) {
        return isCanceled ? console.log(error) || reject(error) : reject(e);
      });
    }),
    abort: function abort() {
      isCanceled = true;

      if (request) {
        request.abort();
      }
    }
  };
}
/**
 * @deprecated будет удален в версии 3.0.0
 */


var _default = function _default(url, options) {
  return makeRequest(url, options);
};

exports.default = _default;
//# sourceMappingURL=request.js.map