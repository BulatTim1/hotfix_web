import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import CellButton from '../CellButton/CellButton';
import usePlatform from '../../hooks/usePlatform';

var mapOldLevel = function mapOldLevel(level) {
  switch (level) {
    case '1':
      return 'primary';

    case '2':
      return 'secondary';

    case '3':
      return 'tertiary';

    case 'sell':
      return 'outline';

    case 'buy':
      return 'commerce';

    default:
      return level;
  }
};

var Button = function Button(props) {
  var platform = usePlatform();

  if (props.type === 'cell') {
    return React.createElement(CellButton, _extends({}, props, {
      level: props.level === 'destructive' ? 'danger' : 'primary'
    }));
  } else {
    var _classNames;

    var className = props.className,
        size = props.size,
        level = props.level,
        stretched = props.stretched,
        align = props.align,
        children = props.children,
        before = props.before,
        after = props.after,
        type = props.type,
        getRootRef = props.getRootRef,
        restProps = _objectWithoutProperties(props, ["className", "size", "level", "stretched", "align", "children", "before", "after", "type", "getRootRef"]);

    return React.createElement(Tappable, _extends({}, restProps, {
      className: classNames(getClassName('Button', platform), className, (_classNames = {}, _defineProperty(_classNames, "Button--sz-".concat(size), true), _defineProperty(_classNames, "Button--lvl-".concat(mapOldLevel(level)), true), _defineProperty(_classNames, "Button--aln-".concat(align || 'center'), true), _defineProperty(_classNames, "Button--str", stretched), _classNames)),
      getRootRef: getRootRef
    }), React.createElement("div", {
      className: "Button__in"
    }, before && React.createElement("div", {
      className: "Button__before"
    }, before), children && React.createElement("div", {
      className: "Button__content"
    }, children), after && React.createElement("div", {
      className: "Button__after"
    }, after)));
  }
};

Button.defaultProps = {
  level: 'primary',
  type: 'default',
  component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true
};
export default Button;
//# sourceMappingURL=Button.js.map