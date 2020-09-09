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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var baseClassNames = (0, _getClassName.default)('HeaderContext');

var HeaderContext =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeaderContext, _Component);

  function HeaderContext() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HeaderContext);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HeaderContext)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      closing: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "elementRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAnimationFinish", function () {
      _this.setState({
        closing: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(HeaderContext, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.opened !== prevProps.opened) {
        if (this.props.opened === false) {
          this.setState({
            closing: true
          });
          this.waitAnimationFinish(this.onAnimationFinish);
        }
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(eventHandler) {
      var eventName = _transitionEvents.default.animationEndEventName;
      var element = this.elementRef.current;

      if (element) {
        element.removeEventListener(eventName, eventHandler);
        element.addEventListener(eventName, eventHandler);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          opened = _this$props.opened,
          onClose = _this$props.onClose,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "opened", "onClose"]);
      var closing = this.state.closing;
      return _react.default.createElement(_FixedLayout.default, (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)(baseClassNames, {
          'HeaderContext--opened': opened,
          'HeaderContext--closing': closing
        }, className),
        vertical: "top"
      }), _react.default.createElement("div", {
        className: "HeaderContext__in",
        ref: this.elementRef
      }, (opened || closing) && children), (opened || closing) && _react.default.createElement("div", {
        onClick: onClose,
        className: "HeaderContext__fade"
      }));
    }
  }]);
  return HeaderContext;
}(_react.Component);

exports.default = HeaderContext;
(0, _defineProperty2.default)(HeaderContext, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  onClose: _propTypes.default.func.isRequired,
  opened: _propTypes.default.bool.isRequired
});
(0, _defineProperty2.default)(HeaderContext, "defaultProps", {
  opened: false
});
//# sourceMappingURL=HeaderContext.js.map