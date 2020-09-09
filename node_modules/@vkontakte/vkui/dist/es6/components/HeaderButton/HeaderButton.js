import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var HeaderButton = function HeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = _objectWithoutProperties(_ref, ["className", "children", "primary"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return React.createElement(Tappable, _extends({}, restProps, {
    component: component,
    activeEffectDelay: 200,
    className: classNames(getClassName('HeaderButton', platform), className, {
      'HeaderButton--primary': primary
    })
  }), isPrimitive ? React.createElement("span", {
    className: "HeaderButton__primitive"
  }, children) : children);
};

HeaderButton.defaultProps = {
  primary: false
};
export default HeaderButton;
//# sourceMappingURL=HeaderButton.js.map