import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import transitionEvents from '../../lib/transitionEvents';
var baseClassNames = getClassName('PopoutWrapper');

var PopoutWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PopoutWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopoutWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      opened: false
    });

    _defineProperty(_assertThisInitialized(_this), "onFadeInEnd", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        manual: true
      };

      if (e.animationName === 'animation-full-fade-in' || e.manual) {
        _this.setState({
          opened: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "preventTouch", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      return _this.state.opened && _this.props.onClick && _this.props.onClick(e);
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (el) {
      return _this.el = el;
    });

    return _this;
  }

  _createClass(PopoutWrapper, [{
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
      if (transitionEvents.supported) {
        var eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), IS_PLATFORM_ANDROID ? 300 : 600);
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
          restProps = _objectWithoutProperties(_this$props, ["v", "h", "closing", "children", "hasMask", "onClick", "className"]);

      return React.createElement("div", _extends({}, restProps, {
        className: classNames(baseClassNames, (_classNames = {}, _defineProperty(_classNames, "PopoutWrapper--v-".concat(v), v), _defineProperty(_classNames, "PopoutWrapper--h-".concat(h), h), _defineProperty(_classNames, 'PopoutWrapper--closing', closing), _classNames), className),
        onClick: this.onClick,
        ref: this.getRef
      }), hasMask && React.createElement("div", {
        className: "PopoutWrapper__mask"
      }), React.createElement("div", {
        className: "PopoutWrapper__container"
      }, children));
    }
  }]);

  return PopoutWrapper;
}(React.Component);

_defineProperty(PopoutWrapper, "propTypes", {
  hasMask: PropTypes.bool,
  v: PropTypes.oneOf(['top', 'center', 'bottom']),
  h: PropTypes.oneOf(['left', 'center', 'right']),
  closing: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
});

_defineProperty(PopoutWrapper, "defaultProps", {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
});

export { PopoutWrapper as default };
//# sourceMappingURL=PopoutWrapper.js.map