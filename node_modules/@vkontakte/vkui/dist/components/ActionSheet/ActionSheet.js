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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _PopoutWrapper = _interopRequireDefault(require("../PopoutWrapper/PopoutWrapper"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _utils = require("../../lib/utils");

var _platform = require("../../lib/platform");

var ActionSheet =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ActionSheet, _Component);

  function ActionSheet() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ActionSheet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ActionSheet)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      closing: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "el", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClose", function () {
      _this.setState({
        closing: true
      });

      _this.waitTransitionFinish(_this.props.onClose);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onItemClick", function (action, autoclose) {
      return function (event) {
        event.persist();

        if (autoclose) {
          _this.setState({
            closing: true
          });

          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            action && action(event);
          });
        } else {
          action && action(event);
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (el) {
      return _this.el = el;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });
    return _this;
  }

  (0, _createClass2.default)(ActionSheet, [{
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(eventHandler) {
      if (_transitionEvents.default.supported) {
        var eventName = _transitionEvents.default.prefix ? _transitionEvents.default.prefix + 'TransitionEnd' : 'transitionend';
        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), this.props.platform === _platform.ANDROID ? 200 : 300);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          title = _this$props.title,
          text = _this$props.text,
          style = _this$props.style,
          insets = _this$props.insets,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "title", "text", "style", "insets", "platform"]);
      return _react.default.createElement(_PopoutWrapper.default, {
        closing: this.state.closing,
        v: "bottom",
        h: "center",
        className: className,
        style: style,
        onClick: this.onClose
      }, _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        ref: this.getRef,
        onClick: this.stopPropagation,
        className: (0, _classNames.default)((0, _getClassName.default)('ActionSheet', platform), {
          'ActionSheet--closing': this.state.closing
        })
      }), platform === _platform.IOS && _react.default.createElement("header", {
        className: "ActionSheet__header"
      }, title && _react.default.createElement("div", {
        className: "ActionSheet__title"
      }, title), text && _react.default.createElement("div", {
        className: "ActionSheet__text"
      }, text)), _react.Children.toArray(children).map(function (child, index, arr) {
        return child && _react.default.cloneElement(child, {
          onClick: _this2.onItemClick(child.props.onClick, child.props.autoclose),
          style: index === arr.length - 1 && (0, _utils.isNumeric)(insets.bottom) ? {
            marginBottom: insets.bottom
          } : null
        });
      })));
    }
  }]);
  return ActionSheet;
}(_react.Component);

var _default = (0, _withPlatform.default)((0, _withInsets.default)(ActionSheet));

exports.default = _default;
//# sourceMappingURL=ActionSheet.js.map