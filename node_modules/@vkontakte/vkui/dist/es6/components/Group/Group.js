import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Header from '../Header/Header';
var baseClassNames = getClassName('Group');

var Group = function Group(props) {
  var title = props.title,
      description = props.description,
      className = props.className,
      children = props.children,
      getRootRef = props.getRootRef,
      restProps = _objectWithoutProperties(props, ["title", "description", "className", "children", "getRootRef"]);

  return React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className)
  }), title && React.createElement(Header, {
    level: "secondary"
  }, title), children && React.createElement("div", {
    className: "Group__content"
  }, children), description && React.createElement("div", {
    className: "Group__description"
  }, description));
};

Group.propTypes = {
  style: PropTypes.object,
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
Group.defaultProps = {
  title: null,
  description: null
};
export default Group;
//# sourceMappingURL=Group.js.map