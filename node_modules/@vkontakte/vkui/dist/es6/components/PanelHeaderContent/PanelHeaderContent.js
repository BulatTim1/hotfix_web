import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import Tappable from '../Tappable/Tappable';
var baseClassNames = getClassName('PanelHeaderContent');

var PanelHeaderContent = function PanelHeaderContent(_ref) {
  var className = _ref.className,
      style = _ref.style,
      aside = _ref.aside,
      status = _ref.status,
      before = _ref.before,
      children = _ref.children,
      onClick = _ref.onClick,
      restProps = _objectWithoutProperties(_ref, ["className", "style", "aside", "status", "before", "children", "onClick"]);

  var InComponent = onClick ? Tappable : 'div';
  var rootProps = onClick ? {} : restProps;
  var inProps = onClick ? _objectSpread({}, restProps, {
    activeEffectDelay: 200
  }) : {};
  return React.createElement("div", _extends({}, rootProps, {
    className: classNames(baseClassNames, className),
    style: style
  }), IS_PLATFORM_ANDROID && before && React.createElement("div", {
    className: "PanelHeaderContent__before"
  }, before), React.createElement(InComponent, _extends({}, inProps, {
    className: "PanelHeaderContent__in",
    onClick: onClick
  }), status && React.createElement("div", {
    className: "PanelHeaderContent__status"
  }, status), React.createElement("div", {
    className: "PanelHeaderContent__children"
  }, React.createElement("span", {
    className: "PanelHeaderContent__children-in"
  }, children), aside && React.createElement("div", {
    className: "PanelHeaderContent__aside"
  }, aside))));
};

PanelHeaderContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  aside: PropTypes.node,
  status: PropTypes.node,
  onClick: PropTypes.func,

  /**
   * Android only
   */
  before: PropTypes.node
};
export default PanelHeaderContent;
//# sourceMappingURL=PanelHeaderContent.js.map