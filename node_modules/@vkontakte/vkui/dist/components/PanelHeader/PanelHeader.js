"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.baseClassNames = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames6 = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var baseClassNames = (0, _getClassName.default)('PanelHeader');
exports.baseClassNames = baseClassNames;

var PanelHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PanelHeader, _React$Component);

  function PanelHeader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PanelHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PanelHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      ready: false
    });
    return _this;
  }

  (0, _createClass2.default)(PanelHeader, [{
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
      return this.state.ready ? [_reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames6.default)('PanelHeader-bg', (_classNames = {}, (0, _defineProperty2.default)(_classNames, "PanelHeader-bg--".concat(theme), true), (0, _defineProperty2.default)(_classNames, 'PanelHeader-bg--tp', transparent), (0, _defineProperty2.default)(_classNames, "PanelHeader-bg--no-shadow", noShadow || ['bright_light', 'space_gray'].indexOf(this.context.scheme) >= 0), _classNames))
      }), this.bgNode), _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames6.default)('PanelHeader-left-in', (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "PanelHeader-left-in--".concat(theme), true), (0, _defineProperty2.default)(_classNames2, 'PanelHeader-left-in--tp', transparent), _classNames2))
      }, left), this.leftNode), _platform.IS_PLATFORM_IOS && _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames6.default)('PanelHeader-addon', (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, "PanelHeader-addon--".concat(theme), true), (0, _defineProperty2.default)(_classNames3, 'PanelHeader-addon--tp', transparent), _classNames3))
      }, addon), this.addonNode), _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames6.default)('PanelHeader-content', (_classNames4 = {}, (0, _defineProperty2.default)(_classNames4, "PanelHeader-content--".concat(theme), true), (0, _defineProperty2.default)(_classNames4, 'PanelHeader-content--tp', transparent), _classNames4))
      }, isPrimitive ? _react.default.createElement("span", null, children) : children), this.titleNode), _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames6.default)('PanelHeader-right', (_classNames5 = {}, (0, _defineProperty2.default)(_classNames5, "PanelHeader-right--".concat(theme), true), (0, _defineProperty2.default)(_classNames5, 'PanelHeader-right--tp', transparent), (0, _defineProperty2.default)(_classNames5, 'PanelHeader-right--vkapps', this.webviewType === 'vkapps'), _classNames5))
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
}(_react.default.Component);

exports.default = PanelHeader;
(0, _defineProperty2.default)(PanelHeader, "propTypes", {
  left: _propTypes.default.node,

  /**
   * iOS only
   */
  addon: _propTypes.default.node,
  right: _propTypes.default.node,
  children: _propTypes.default.node,

  /**
   * Вместо `light` используйте `alternate`. Значение `light` устарело и будет удалено в следующей
   * мажорной версии.
   */
  theme: _propTypes.default.oneOf(['light', 'alternate', 'brand']),

  /**
   * @ignore
   */
  transparent: _propTypes.default.bool,
  noShadow: _propTypes.default.bool,
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
});
(0, _defineProperty2.default)(PanelHeader, "defaultProps", {
  theme: 'brand',
  transparent: false,
  noShadow: false
});
(0, _defineProperty2.default)(PanelHeader, "contextTypes", {
  panel: _propTypes.default.string,
  document: _propTypes.default.any,
  scheme: _propTypes.default.string,
  webviewType: _propTypes.default.oneOf(['vkapps', 'internal'])
});
//# sourceMappingURL=PanelHeader.js.map