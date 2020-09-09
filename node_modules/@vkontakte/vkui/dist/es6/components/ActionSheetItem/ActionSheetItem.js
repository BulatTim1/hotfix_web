import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      theme = _ref.theme,
      before = _ref.before,
      restProps = _objectWithoutProperties(_ref, ["className", "children", "autoclose", "theme", "before"]);

  var platform = usePlatform();
  return React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('ActionSheetItem', platform), className, "ActionSheetItem--".concat(theme)),
    component: theme === 'cancel' ? 'span' : 'div'
  }), before && React.createElement("div", {
    className: "ActionSheetItem__before"
  }, before), React.createElement("div", {
    className: "ActionSheetItem__container"
  }, React.createElement("div", {
    className: "ActionSheetItem__content"
  }, React.createElement("div", {
    className: "ActionSheetItem__children"
  }, children))));
};

ActionSheetItem.defaultProps = {
  theme: 'default'
};
export default ActionSheetItem;
//# sourceMappingURL=ActionSheetItem.js.map