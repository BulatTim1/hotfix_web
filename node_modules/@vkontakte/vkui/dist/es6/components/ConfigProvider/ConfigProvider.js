import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import vkConnect from '@vkontakte/vk-connect';
import { canUseDOM } from '../../lib/dom';

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider(props, context) {
    var _this;

    _classCallCheck(this, ConfigProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfigProvider).call(this, props));

    if (canUseDOM) {
      (context.document || window.document).body.setAttribute('scheme', props.scheme);
    }

    return _this;
  }

  _createClass(ConfigProvider, [{
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
}(React.Component);

_defineProperty(ConfigProvider, "childContextTypes", {
  isWebView: PropTypes.bool,
  scheme: PropTypes.string,
  webviewType: PropTypes.oneOf(['vkapps', 'internal']),
  app: PropTypes.string
});

_defineProperty(ConfigProvider, "defaultProps", {
  webviewType: 'internal',
  isWebView: vkConnect.isWebView(),
  scheme: 'client_light'
});

_defineProperty(ConfigProvider, "contextTypes", {
  document: PropTypes.object
});

export { ConfigProvider as default };
//# sourceMappingURL=ConfigProvider.js.map