import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
var baseClassNames = getClassName('Switch');

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["style", "className", "getRef", "getRootRef"]);

  return React.createElement("label", {
    className: classNames(baseClassNames, className),
    style: style,
    ref: getRootRef
  }, React.createElement("input", _extends({}, restProps, {
    type: "checkbox",
    className: "Switch__self",
    ref: getRef
  })), React.createElement("span", {
    className: "Switch__pseudo"
  }));
};

Switch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
export default Switch;
//# sourceMappingURL=Switch.js.map