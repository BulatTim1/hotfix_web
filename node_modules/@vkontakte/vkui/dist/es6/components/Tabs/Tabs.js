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
var baseClassName = getClassName('Tabs');

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          theme = _this$props.theme,
          style = _this$props.style,
          type = _this$props.type,
          getRootRef = _this$props.getRootRef,
          restProps = _objectWithoutProperties(_this$props, ["className", "children", "theme", "style", "type", "getRootRef"]);

      return React.createElement("div", _extends({}, restProps, {
        ref: getRootRef,
        className: classNames(baseClassName, (_classNames = {}, _defineProperty(_classNames, "Tabs--".concat(this.theme), true), _defineProperty(_classNames, "Tabs--".concat(type), true), _classNames), className),
        style: style
      }), children);
    }
  }, {
    key: "theme",

    /**
     * Метод нужен для маппинга устаревших значений theme на новые
     * @returns {string}
     */
    get: function get() {
      switch (this.props.theme) {
        case 'white':
          return 'header';

        case 'gray':
          return 'light';

        default:
          return this.props.theme;
      }
    }
  }]);

  return Tabs;
}(React.Component);

_defineProperty(Tabs, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии
   */
  theme: PropTypes.oneOf(['light', 'header']),

  /**
   * Свойство отвечает за растягивание табов
   */
  type: PropTypes.oneOf(['default', 'buttons']),
  style: PropTypes.object,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
});

_defineProperty(Tabs, "defaultProps", {
  theme: 'light',
  type: 'default'
});

export { Tabs as default };
//# sourceMappingURL=Tabs.js.map