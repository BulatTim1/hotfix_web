import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';

var Epic =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Epic, _React$Component);

  function Epic() {
    _classCallCheck(this, Epic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Epic).apply(this, arguments));
  }

  _createClass(Epic, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        hasTabbar: this.props.hasOwnProperty('tabbar')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          activeStory = _this$props.activeStory,
          tabbar = _this$props.tabbar,
          children = _this$props.children,
          platform = _this$props.platform,
          restProps = _objectWithoutProperties(_this$props, ["className", "activeStory", "tabbar", "children", "platform"]);

      return React.createElement("div", _extends({}, restProps, {
        className: classNames(getClassName('Epic', platform), className)
      }), React.Children.toArray(children).find(function (item) {
        return item.props.id === activeStory;
      }), tabbar);
    }
  }]);

  return Epic;
}(React.Component);

_defineProperty(Epic, "childContextTypes", {
  hasTabbar: PropTypes.bool
});

export default withPlatform(Epic);
//# sourceMappingURL=Epic.js.map