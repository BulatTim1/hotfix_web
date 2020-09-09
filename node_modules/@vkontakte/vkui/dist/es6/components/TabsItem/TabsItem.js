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
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';
var baseClassName = getClassName('TabsItem');

var TabsItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabsItem, _React$Component);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabsItem).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          selected = _this$props.selected,
          className = _this$props.className,
          after = _this$props.after,
          restProps = _objectWithoutProperties(_this$props, ["children", "selected", "className", "after"]);

      return React.createElement(Tappable, _extends({}, restProps, {
        className: classNames(baseClassName, {
          'TabsItem--selected': selected
        }, className),
        activeEffectDelay: IS_PLATFORM_IOS ? 0 : ACTIVE_EFFECT_DELAY
      }), React.createElement("div", {
        className: "TabsItem__in"
      }, children), after && React.createElement("div", {
        className: "TabsItem__after"
      }, after));
    }
  }]);

  return TabsItem;
}(React.Component);

_defineProperty(TabsItem, "propTypes", {
  children: PropTypes.node,
  selected: PropTypes.bool,
  className: PropTypes.string,
  after: PropTypes.node
});

_defineProperty(TabsItem, "defaultProps", {
  selected: false
});

export { TabsItem as default };
//# sourceMappingURL=TabsItem.js.map