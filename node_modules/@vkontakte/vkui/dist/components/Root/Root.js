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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var _platform = require("../../lib/platform");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseClassName = (0, _getClassName.default)('Root');

var Root =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Root, _React$Component);

  function Root(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Root);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Root).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAnimationEnd", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        manual: true
      };

      if (['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].indexOf(e.animationName) > -1 || e.manual) {
        var isBack = _this.state.isBack;
        var prevView = _this.state.prevView;
        var nextView = _this.state.nextView;

        _this.setState({
          activeView: nextView,
          prevView: null,
          nextView: null,
          visibleViews: [nextView],
          transition: false,
          isBack: undefined
        }, function () {
          isBack ? _this.window.scrollTo(0, _this.state.scrolls[_this.state.activeView]) : _this.window.scrollTo(0, 0);
          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevView,
            to: nextView
          });
        });
      }
    });
    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };
    return _this;
  }

  (0, _createClass2.default)(Root, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.popout && !prevProps.popout) {
        this.blurActiveElement();
      }

      if (this.props.activeView !== prevProps.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = prevProps.children.find(function (view) {
          return view.props.id === prevProps.activeView || view.props.id === _this2.props.activeView;
        }).props.id;
        var isBack = firstLayerId === this.props.activeView;
        this.blurActiveElement();
        var nextView = this.props.activeView;
        var prevView = prevProps.activeView;
        this.setState({
          scrolls: _objectSpread({}, this.state.scrolls, (0, _defineProperty2.default)({}, prevProps.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      }

      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById("view-".concat(this.state.prevView));
        var nextViewElement = this.document.getElementById("view-".concat(this.state.nextView));
        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }

        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents.default.supported) {
        var eventName = _transitionEvents.default.prefix ? _transitionEvents.default.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), _platform.IS_PLATFORM_ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          popout = _this$props.popout,
          modal = _this$props.modal;
      var _this$state = this.state,
          transition = _this$state.transition,
          isBack = _this$state.isBack,
          prevView = _this$state.prevView,
          activeView = _this$state.activeView,
          nextView = _this$state.nextView;
      var Views = this.arrayChildren.filter(function (View) {
        return _this3.state.visibleViews.indexOf(View.props.id) >= 0;
      });
      return _react.default.createElement("div", {
        className: (0, _classNames.default)(baseClassName, this.props.className, {
          'Root--transition': transition
        })
      }, Views.map(function (View) {
        return _react.default.createElement("div", {
          key: View.props.id,
          id: "view-".concat(View.props.id),
          className: (0, _classNames.default)('Root__view', {
            'Root__view--hide-back': View.props.id === prevView && isBack,
            'Root__view--hide-forward': View.props.id === prevView && !isBack,
            'Root__view--show-back': View.props.id === nextView && isBack,
            'Root__view--show-forward': View.props.id === nextView && !isBack,
            'Root__view--active': View.props.id === activeView
          })
        }, View);
      }), !!popout && _react.default.createElement("div", {
        className: "Root__popout"
      }, popout), !!modal && _react.default.createElement("div", {
        className: "Root__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "arrayChildren",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);
  return Root;
}(_react.default.Component);

exports.default = Root;
(0, _defineProperty2.default)(Root, "propTypes", {
  className: _propTypes.default.string,
  activeView: _propTypes.default.string.isRequired,
  popout: _propTypes.default.node,
  modal: _propTypes.default.node,
  onTransition: _propTypes.default.func,
  children: _propTypes.default.node
});
(0, _defineProperty2.default)(Root, "defaultProps", {
  popout: null
});
(0, _defineProperty2.default)(Root, "contextTypes", {
  window: _propTypes.default.any,
  document: _propTypes.default.any
});
//# sourceMappingURL=Root.js.map