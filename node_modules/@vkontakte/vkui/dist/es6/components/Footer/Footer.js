import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import Div from '../Div/Div';

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement(Div, _extends({}, restProps, {
    className: classNames('Footer', className)
  }), children);
};

export default Footer;
//# sourceMappingURL=Footer.js.map