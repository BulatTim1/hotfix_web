import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';
export var baseClassNames = getClassName('PanelHeader');

var PanelHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PanelHeader, _React$Component);

  function PanelHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PanelHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PanelHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      ready: false
    });

    return _this;
  }

  _createClass(PanelHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var panelId = this.context.panel;
      this.leftNode = this.document.getElementById('header-left-' + panelId);
      this.addonNode = this.document.getElementById('header-addon-' + panelId);
      this.titleNode = this.document.getElementById('header-title-' + panelId);
      this.rightNode = this.document.getElementById('header-right-' + panelId);
      this.bgNode = this.document.getElementById('header-bg-' + panelId);
      var getRef = this.props.getRef;

      if (getRef) {
        var element = this.document.getElementById("panel-header-".concat(panelId));

        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }

      this.setState({
        ready: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;

      var _this$props = this.props,
          left = _this$props.left,
          addon = _this$props.addon,
          children = _this$props.children,
          right = _this$props.right,
          theme = _this$props.theme,
          noShadow = _this$props.noShadow,
          transparent = _this$props.transparent;
      var isPrimitive = typeof children === 'string' || typeof children === 'number';
      return this.state.ready ? [ReactDOM.createPortal(React.createElement("div", {
        className: classNames('PanelHeader-bg', (_classNames = {}, _defineProperty(_classNames, "PanelHeader-bg--".concat(theme), true), _defineProperty(_classNames, 'PanelHeader-bg--tp', transparent), _defineProperty(_classNames, "PanelHeader-bg--no-shadow", noShadow || ['bright_light', 'space_gray'].indexOf(this.context.scheme) >= 0), _classNames))
      }), this.bgNode), ReactDOM.createPortal(React.createElement("div", {
        className: classNames('PanelHeader-left-in', (_classNames2 = {}, _defineProperty(_classNames2, "PanelHeader-left-in--".concat(theme), true), _defineProperty(_classNames2, 'PanelHeader-left-in--tp', transparent), _classNames2))
      }, left), this.leftNode), IS_PLATFORM_IOS && ReactDOM.createPortal(React.createElement("div", {
        className: classNames('PanelHeader-addon', (_classNames3 = {}, _defineProperty(_classNames3, "PanelHeader-addon--".concat(theme), true), _defineProperty(_classNames3, 'PanelHeader-addon--tp', transparent), _classNames3))
      }, addon), this.addonNode), ReactDOM.createPortal(React.createElement("div", {
        className: classNames('PanelHeader-content', (_classNames4 = {}, _defineProperty(_classNames4, "PanelHeader-content--".concat(theme), true), _defineProperty(_classNames4, 'PanelHeader-content--tp', transparent), _classNames4))
      }, isPrimitive ? React.createElement("span", null, children) : children), this.titleNode), ReactDOM.createPortal(React.createElement("div", {
        className: classNames('PanelHeader-right', (_classNames5 = {}, _defineProperty(_classNames5, "PanelHeader-right--".concat(theme), true), _defineProperty(_classNames5, 'PanelHeader-right--tp', transparent), _defineProperty(_classNames5, 'PanelHeader-right--vkapps', this.webviewType === 'vkapps'), _classNames5))
      }, this.webviewType === 'internal' ? right : null), this.rightNode)] : null;
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "webviewType",
    get: function get() {
      return this.context.webviewType || 'vkapps';
    }
  }]);

  return PanelHeader;
}(React.Component);

_defineProperty(PanelHeader, "propTypes", {
  left: PropTypes.node,

  /**
   * iOS only
   */
  addon: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,

  /**
   * Вместо `light` используйте `alternate`. Значение `light` устарело и будет удалено в следующей
   * мажорной версии.
   */
  theme: PropTypes.oneOf(['light', 'alternate', 'brand']),

  /**
   * @ignore
   */
  transparent: PropTypes.bool,
  noShadow: PropTypes.bool,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
});

_defineProperty(PanelHeader, "defaultProps", {
  theme: 'brand',
  transparent: false,
  noShadow: false
});

_defineProperty(PanelHeader, "contextTypes", {
  panel: PropTypes.string,
  document: PropTypes.any,
  scheme: PropTypes.string,
  webviewType: PropTypes.oneOf(['vkapps', 'internal'])
});

export { PanelHeader as default };
//# sourceMappingURL=PanelHeader.js.map