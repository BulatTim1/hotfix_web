import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var FormField = function FormField(_ref) {
  var TagName = _ref.TagName,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["TagName", "className", "children", "status", "getRootRef"]);

  var platform = usePlatform(); // Не используем тут JSX из-за этой проблемы: https://github.com/Microsoft/TypeScript/issues/28892

  return React.createElement(TagName, _objectSpread({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassName('FormField', platform), _defineProperty({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), React.createElement(React.Fragment, null, children, React.createElement("div", {
    className: "FormField__border"
  })));
};

FormField.defaultProps = {
  status: 'default',
  TagName: 'div'
};
export default FormField;
//# sourceMappingURL=FormField.js.map