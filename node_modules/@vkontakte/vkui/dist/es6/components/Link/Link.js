import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';
var baseClassName = getClassName('Link');

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "Component", "getRootRef"]);

  return React.createElement(Component, _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassName, className)
  }), children);
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Component: PropTypes.any,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
Link.defaultProps = {
  Component: 'a'
};
export default Link;
//# sourceMappingURL=Link.js.map