import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

var FormStatus = function FormStatus(_ref) {
  var state = _ref.state,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      restProps = _objectWithoutProperties(_ref, ["state", "title", "children", "className", "dangerouslySetInnerHTML"]);

  var platform = usePlatform();
  return React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('FormStatus', platform), _defineProperty({}, "FormStatus--".concat(state), !!state), className)
  }), title && React.createElement("div", {
    className: "FormStatus__title"
  }, title), dangerouslySetInnerHTML && React.createElement("div", {
    className: "FormStatus__content",
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }), children && !dangerouslySetInnerHTML && React.createElement("div", {
    className: "FormStatus__content"
  }, children));
};

export default FormStatus;
//# sourceMappingURL=FormStatus.js.map