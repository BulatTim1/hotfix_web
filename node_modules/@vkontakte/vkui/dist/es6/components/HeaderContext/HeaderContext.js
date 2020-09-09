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
import PropTypes from 'prop-types';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import transitionEvents from '../../lib/transitionEvents';
var baseClassNames = getClassName('HeaderContext');

var HeaderContext =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderContext, _Component);

  function HeaderContext() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderContext);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderContext)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      closing: false
    });

    _defineProperty(_assertThisInitialized(_this), "elementRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onAnimationFinish", function () {
      _this.setState({
        closing: false
      });
    });

    return _this;
  }

  _createClass(HeaderContext, [{
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
      var eventName = transitionEvents.animationEndEventName;
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
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "opened", "onClose"]);

      var closing = this.state.closing;
      return React.createElement(FixedLayout, _extends({}, restProps, {
        className: classNames(baseClassNames, {
          'HeaderContext--opened': opened,
          'HeaderContext--closing': closing
        }, className),
        vertical: "top"
      }), React.createElement("div", {
        className: "HeaderContext__in",
        ref: this.elementRef
      }, (opened || closing) && children), (opened || closing) && React.createElement("div", {
        onClick: onClose,
        className: "HeaderContext__fade"
      }));
    }
  }]);

  return HeaderContext;
}(Component);

_defineProperty(HeaderContext, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
});

_defineProperty(HeaderContext, "defaultProps", {
  opened: false
});

export { HeaderContext as default };
//# sourceMappingURL=HeaderContext.js.map