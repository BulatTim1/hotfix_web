"use strict";

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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _platform = require("../../lib/platform");

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var baseClassNames = (0, _getClassName.default)('PopoutWrapper');

var PopoutWrapper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PopoutWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PopoutWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      opened: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFadeInEnd", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        manual: true
      };

      if (e.animationName === 'animation-full-fade-in' || e.manual) {
        _this.setState({
          opened: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "preventTouch", function (e) {
      return e.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function (e) {
      return _this.state.opened && _this.props.onClick && _this.props.onClick(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (el) {
      return _this.el = el;
    });
    return _this;
  }

  (0, _createClass2.default)(PopoutWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('touchmove', this.preventTouch, {
        passive: false
      });
      this.waitAnimationFinish(this.el, this.onFadeInEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('touchmove', this.preventTouch, {
        passive: false
      });
      clearTimeout(this.animationFinishTimeout);
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents.default.supported) {
        var eventName = _transitionEvents.default.prefix ? _transitionEvents.default.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), _platform.IS_PLATFORM_ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          v = _this$props.v,
          h = _this$props.h,
          closing = _this$props.closing,
          children = _this$props.children,
          hasMask = _this$props.hasMask,
          onClick = _this$props.onClick,
          className = _this$props.className,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["v", "h", "closing", "children", "hasMask", "onClick", "className"]);
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames2.default)(baseClassNames, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "PopoutWrapper--v-".concat(v), v), (0, _defineProperty2.default)(_classNames, "PopoutWrapper--h-".concat(h), h), (0, _defineProperty2.default)(_classNames, 'PopoutWrapper--closing', closing), _classNames), className),
        onClick: this.onClick,
        ref: this.getRef
      }), hasMask && _react.default.createElement("div", {
        className: "PopoutWrapper__mask"
      }), _react.default.createElement("div", {
        className: "PopoutWrapper__container"
      }, children));
    }
  }]);
  return PopoutWrapper;
}(_react.default.Component);

exports.default = PopoutWrapper;
(0, _defineProperty2.default)(PopoutWrapper, "propTypes", {
  hasMask: _propTypes.default.bool,
  v: _propTypes.default.oneOf(['top', 'center', 'bottom']),
  h: _propTypes.default.oneOf(['left', 'center', 'right']),
  closing: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  children: _propTypes.default.node,
  className: _propTypes.default.string
});
(0, _defineProperty2.default)(PopoutWrapper, "defaultProps", {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
});
//# sourceMappingURL=PopoutWrapper.js.map