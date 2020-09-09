import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import transitionEvents from '../../lib/transitionEvents';
import { ANDROID } from '../../lib/platform';
import withPlatform from '../../hoc/withPlatform';

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (item) {
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

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        closing: true
      });

      _this.waitTransitionFinish(function () {
        _this.props.onClose();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });

    _this.element = React.createRef();
    _this.state = {
      closing: false
    };
    return _this;
  }

  _createClass(Alert, [{
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(eventHandler) {
      if (transitionEvents.supported) {
        var eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';
        this.element.current.removeEventListener(eventName, eventHandler);
        this.element.current.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 200 : 300);
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
          restProps = _objectWithoutProperties(_this$props, ["actions", "actionsLayout", "children", "className", "style", "platform"]);

      var closing = this.state.closing;
      return React.createElement(PopoutWrapper, {
        className: className,
        closing: closing,
        style: style,
        onClick: this.onClose
      }, React.createElement("div", _extends({}, restProps, {
        ref: this.element,
        onClick: this.stopPropagation,
        className: classNames(getClassName('Alert', platform), {
          'Alert--v': actionsLayout === 'vertical',
          'Alert--h': actionsLayout === 'horizontal',
          'Alert--closing': closing
        })
      }), React.createElement("div", {
        className: "Alert__content"
      }, children), React.createElement("footer", {
        className: "Alert__footer"
      }, actions.map(function (button, i) {
        return React.createElement(Tappable, {
          component: "button",
          className: classNames('Alert__btn', "Alert__btn--".concat(button.style)),
          onClick: _this2.onItemClick(button),
          key: "alert-action-".concat(i)
        }, React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: button.title
          }
        }));
      }))));
    }
  }]);

  return Alert;
}(Component);

_defineProperty(Alert, "defaultProps", {
  actionsLayout: 'horizontal',
  actions: []
});

export default withPlatform(Alert);
//# sourceMappingURL=Alert.js.map