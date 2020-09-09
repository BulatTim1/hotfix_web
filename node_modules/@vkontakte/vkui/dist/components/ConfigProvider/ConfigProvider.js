"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _vkConnect = _interopRequireDefault(require("@vkontakte/vk-connect"));

var _dom = require("../../lib/dom");

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ConfigProvider, _React$Component);

  function ConfigProvider(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ConfigProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfigProvider).call(this, props));

    if (_dom.canUseDOM) {
      (context.document || window.document).body.setAttribute('scheme', props.scheme);
    }

    return _this;
  }

  (0, _createClass2.default)(ConfigProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scheme !== this.props.scheme) {
        this.document.body.setAttribute('scheme', this.props.scheme);
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isWebView: this.props.isWebView,
        webviewType: this.props.webviewType,
        scheme: this.props.scheme,
        app: this.props.app
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || window.document;
    }
  }]);
  return ConfigProvider;
}(_react.default.Component);

exports.default = ConfigProvider;
(0, _defineProperty2.default)(ConfigProvider, "childContextTypes", {
  isWebView: _propTypes.default.bool,
  scheme: _propTypes.default.string,
  webviewType: _propTypes.default.oneOf(['vkapps', 'internal']),
  app: _propTypes.default.string
});
(0, _defineProperty2.default)(ConfigProvider, "defaultProps", {
  webviewType: 'internal',
  isWebView: _vkConnect.default.isWebView(),
  scheme: 'client_light'
});
(0, _defineProperty2.default)(ConfigProvider, "contextTypes", {
  document: _propTypes.default.object
});
//# sourceMappingURL=ConfigProvider.js.map