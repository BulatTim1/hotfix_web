import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      className = _ref.className,
      status = _ref.status,
      restProps = _objectWithoutProperties(_ref, ["children", "top", "bottom", "className", "status"]);

  var platform = usePlatform();
  return React.createElement("div", _extends({
    className: classNames(getClassName('FormLayoutGroup', platform), className)
  }, restProps), children);
};

export default FormLayoutGroup;
//# sourceMappingURL=FormLayoutGroup.js.map