import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
var baseClassName = getClassName('Counter');

var Counter = function Counter(props) {
  var type = props.type,
      children = props.children;
  return React.createElement("div", {
    className: classNames(baseClassName, "Counter--".concat(type))
  }, React.createElement("div", {
    className: "Counter__in"
  }, children));
};

Counter.defaultProps = {
  type: 'secondary'
};
export default React.memo(Counter);
//# sourceMappingURL=Counter.js.map