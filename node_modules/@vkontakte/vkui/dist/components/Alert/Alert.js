"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _PopoutWrapper = _interopRequireDefault(require("../PopoutWrapper/PopoutWrapper"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var _platform = require("../../lib/platform");

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var Alert =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Alert, _Component);

  function Alert(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Alert);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alert).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "element", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onItemClick", function (item) {
      return function () {
        var action = item.action,
            autoclose = item.autoclose;

        if (autoclose) {
          _this.setState({
            closing: true
          });

          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            action && action();
          });
        } else {
          action && action();
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClose", function () {
      _this.setState({
        closing: true
      });

      _this.waitTransitionFinish(function () {
        _this.props.onClose();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });
    _this.element = _react.default.createRef();
    _this.state = {
      closing: false
    };
    return _this;
  }

  (0, _createClass2.default)(Alert, [{
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(eventHandler) {
      if (_transitionEvents.default.supported) {
        var eventName = _transitionEvents.default.prefix ? _transitionEvents.default.prefix + 'TransitionEnd' : 'transitionend';
        this.element.current.removeEventListener(eventName, eventHandler);
        this.element.current.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), this.props.platform === _platform.ANDROID ? 200 : 300);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          actionsLayout = _this$props.actionsLayout,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["actions", "actionsLayout", "children", "className", "style", "platform"]);
      var closing = this.state.closing;
      return _react.default.createElement(_PopoutWrapper.default, {
        className: className,
        closing: closing,
        style: style,
        onClick: this.onClose
      }, _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        ref: this.element,
        onClick: this.stopPropagation,
        className: (0, _classNames.default)((0, _getClassName.default)('Alert', platform), {
          'Alert--v': actionsLayout === 'vertical',
          'Alert--h': actionsLayout === 'horizontal',
          'Alert--closing': closing
        })
      }), _react.default.createElement("div", {
        className: "Alert__content"
      }, children), _react.default.createElement("footer", {
        className: "Alert__footer"
      }, actions.map(function (button, i) {
        return _react.default.createElement(_Tappable.default, {
          component: "button",
          className: (0, _classNames.default)('Alert__btn', "Alert__btn--".concat(button.style)),
          onClick: _this2.onItemClick(button),
          key: "alert-action-".concat(i)
        }, _react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: button.title
          }
        }));
      }))));
    }
  }]);
  return Alert;
}(_react.Component);

(0, _defineProperty2.default)(Alert, "defaultProps", {
  actionsLayout: 'horizontal',
  actions: []
});

var _default = (0, _withPlatform.default)(Alert);

exports.default = _default;
//# sourceMappingURL=Alert.js.map