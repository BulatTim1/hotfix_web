import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Children, Component } from 'react';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import transitionEvents from '../../lib/transitionEvents';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import { ANDROID, IOS } from '../../lib/platform';

var ActionSheet =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionSheet, _Component);

  function ActionSheet() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionSheet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      closing: false
    });

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        closing: true
      });

      _this.waitTransitionFinish(_this.props.onClose);
    });

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (action, autoclose) {
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

    _defineProperty(_assertThisInitialized(_this), "getRef", function (el) {
      return _this.el = el;
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (e) {
      return e.stopPropagation();
    });

    return _this;
  }

  _createClass(ActionSheet, [{
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(eventHandler) {
      if (transitionEvents.supported) {
        var eventName = transitionEvents.prefix ? transitionEvents.prefix + 'TransitionEnd' : 'transitionend';
        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 200 : 300);
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
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "title", "text", "style", "insets", "platform"]);

      return React.createElement(PopoutWrapper, {
        closing: this.state.closing,
        v: "bottom",
        h: "center",
        className: className,
        style: style,
        onClick: this.onClose
      }, React.createElement("div", _extends({}, restProps, {
        ref: this.getRef,
        onClick: this.stopPropagation,
        className: classNames(getClassName('ActionSheet', platform), {
          'ActionSheet--closing': this.state.closing
        })
      }), platform === IOS && React.createElement("header", {
        className: "ActionSheet__header"
      }, title && React.createElement("div", {
        className: "ActionSheet__title"
      }, title), text && React.createElement("div", {
        className: "ActionSheet__text"
      }, text)), Children.toArray(children).map(function (child, index, arr) {
        return child && React.cloneElement(child, {
          onClick: _this2.onItemClick(child.props.onClick, child.props.autoclose),
          style: index === arr.length - 1 && isNumeric(insets.bottom) ? {
            marginBottom: insets.bottom
          } : null
        });
      })));
    }
  }]);

  return ActionSheet;
}(Component);

export default withPlatform(withInsets(ActionSheet));
//# sourceMappingURL=ActionSheet.js.map