import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';

var Panel =
/*#__PURE__*/
function (_Component) {
  _inherits(Panel, _Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Panel).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          theme = _this$props.theme,
          insets = _this$props.insets,
          platform = _this$props.platform,
          restProps = _objectWithoutProperties(_this$props, ["className", "centered", "children", "theme", "insets", "platform"]);

      var tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
      return React.createElement("div", _extends({}, restProps, {
        className: classNames(getClassName('Panel', platform), className, _defineProperty({
          'Panel--centered': centered
        }, "Panel--tm-".concat(theme), theme))
      }), React.createElement(Touch, {
        className: "Panel__in",
        style: {
          paddingBottom: isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null
        }
      }, React.createElement("div", {
        className: "Panel__in-before"
      }), children, React.createElement("div", {
        className: "Panel__in-after"
      })));
    }
  }]);

  return Panel;
}(Component);

_defineProperty(Panel, "childContextTypes", {
  panel: PropTypes.string
});

_defineProperty(Panel, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'gray']),
  id: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  style: PropTypes.object,

  /**
   * @ignore
   */
  insets: PropTypes.object,

  /**
   * @ignore
   */
  platform: PropTypes.string
});

_defineProperty(Panel, "defaultProps", {
  children: '',
  theme: 'gray',
  centered: false
});

_defineProperty(Panel, "contextTypes", {
  hasTabbar: PropTypes.bool
});

export default withPlatform(withInsets(Panel));
//# sourceMappingURL=Panel.js.map