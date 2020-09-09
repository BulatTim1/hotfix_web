import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var CellButton = function CellButton(_ref) {
  var className = _ref.className,
      align = _ref.align,
      level = _ref.level,
      before = _ref.before,
      children = _ref.children,
      stopPropagation = _ref.stopPropagation,
      restProps = _objectWithoutProperties(_ref, ["className", "align", "level", "before", "children", "stopPropagation"]);

  var platform = usePlatform();
  return React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('CellButton', platform), className, "CellButton--lvl-".concat(level), "CellButton--aln-".concat(align))
  }), React.createElement("div", {
    className: "CellButton__in"
  }, before && React.createElement("div", {
    className: "CellButton__before"
  }, before), children && React.createElement("div", {
    className: "CellButton__content"
  }, children)));
};

CellButton.defaultProps = {
  level: 'primary',
  component: 'button',
  align: 'left',
  stopPropagation: true
};
export default CellButton;
//# sourceMappingURL=CellButton.js.map