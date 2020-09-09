import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Avatar from '../Avatar/Avatar';
var baseClassNames = getClassName('Entity'); // @TODO Try to load photo

/**
 * @deprecated Используйте `Cell`. Этот компонент устарел и будет удален в 3.0.0
 */

var Entity =
/*#__PURE__*/
function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, _getPrototypeOf(Entity).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          photo = _this$props.photo,
          title = _this$props.title,
          description = _this$props.description,
          avatarProps = _this$props.avatarProps,
          children = _this$props.children;
      return React.createElement("div", {
        className: classNames(baseClassNames, className),
        style: style
      }, React.createElement("div", {
        className: "Entity__aside"
      }, React.createElement(Avatar, _extends({
        src: photo,
        alt: title,
        size: this.avatarSize
      }, avatarProps))), React.createElement("div", {
        className: "Entity__main"
      }, title && React.createElement("div", {
        className: "Entity__title"
      }, title), description && React.createElement("div", {
        className: "Entity__description"
      }, description), children && React.createElement("div", {
        className: "Entity__content"
      }, children)));
    }
  }, {
    key: "avatarSize",
    get: function get() {
      switch (this.props.size) {
        case 'm':
          return 64;

        case 's':
          return 48;

        default:
          return this.props.size;
      }
    }
  }]);

  return Entity;
}(Component);

_defineProperty(Entity, "propTypes", {
  style: PropTypes.object,

  /**
   * @deprecated Используйте `avatarProps.size`
   */
  size: PropTypes.oneOf(['m', 's', 80, 72, 64, 56, 48, 40, 36, 32, 28]),
  photo: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string,
  avatarProps: PropTypes.shape(Avatar.propTypes),
  children: PropTypes.node
});

_defineProperty(Entity, "defaultProps", {
  size: 48,
  photo: '',
  title: '',
  description: ''
});

export { Entity as default };
//# sourceMappingURL=Entity.js.map