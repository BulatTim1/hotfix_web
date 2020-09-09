import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
var baseClassName = getClassName('InfoRow');

var InfoRow = function InfoRow(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["title", "className", "children"]);

  return React.createElement("div", _extends({}, restProps, {
    className: classNames(baseClassName, className)
  }), title && React.createElement("div", {
    className: "InfoRow__title"
  }, title), children && React.createElement("div", null, children));
};

InfoRow.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};
export default InfoRow;
//# sourceMappingURL=InfoRow.js.map