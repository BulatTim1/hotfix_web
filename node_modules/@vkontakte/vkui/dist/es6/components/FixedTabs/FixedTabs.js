import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import FixedLayout from '../FixedLayout/FixedLayout';
import Tabs from '../Tabs/Tabs';
import { IS_PLATFORM_IOS } from '../../lib/platform';
/**
 * @deprecated Для отрисовки фиксированных табов используйте связку `Tabs` и `FixedLayout`.
 * Этот компонент устарел и будет удален в 3.0.0.
 */

var FixedTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FixedTabs, _React$Component);

  function FixedTabs() {
    _classCallCheck(this, FixedTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(FixedTabs).apply(this, arguments));
  }

  _createClass(FixedTabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vertical = _this$props.vertical,
          className = _this$props.className,
          style = _this$props.style,
          theme = _this$props.theme,
          children = _this$props.children;
      return React.createElement(FixedLayout, {
        vertical: vertical,
        className: className,
        style: style
      }, React.createElement(Tabs, {
        theme: theme
      }, children));
    }
  }]);

  return FixedTabs;
}(React.Component);

_defineProperty(FixedTabs, "propTypes", {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  vertical: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.object,

  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии.
   * Для Android актуален только header
   */
  theme: PropTypes.oneOf(['light', 'header']),

  /**
   * iOS only
   */
  type: PropTypes.oneOf(['default', 'buttons'])
});

_defineProperty(FixedTabs, "defaultProps", {
  theme: IS_PLATFORM_IOS ? 'light' : 'header',
  vertical: 'top'
});

export { FixedTabs as default };
//# sourceMappingURL=FixedTabs.js.map