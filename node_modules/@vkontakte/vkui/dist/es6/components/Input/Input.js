import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';

var Input = function Input(_ref) {
  var alignment = _ref.alignment,
      status = _ref.status,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["alignment", "status", "getRef", "className", "getRootRef"]);

  return React.createElement(FormField, {
    className: classNames('Input', className, _defineProperty({}, "Input--".concat(alignment), !!alignment)),
    status: status,
    getRootRef: getRootRef
  }, React.createElement("input", _extends({}, restProps, {
    className: "Input__el",
    ref: getRef
  })));
};

Input.defaultProps = {
  type: 'text'
};
export default Input;
//# sourceMappingURL=Input.js.map