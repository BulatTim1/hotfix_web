import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
var baseClassNames = getClassName('List');

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({}, restProps, {
    className: classNames(baseClassNames, className)
  }), children);
};

List.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
List.defaultProps = {
  style: {},
  children: ''
};
export default List;
//# sourceMappingURL=List.js.map