import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      restProps = _objectWithoutProperties(_ref, ["className", "wide"]);

  return React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('Separator'), className, {
      'Separator--wide': wide
    })
  }), React.createElement("div", {
    className: "Separator__in"
  }));
}

Separator.propTypes = {
  className: PropTypes.string,

  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide: PropTypes.bool
};
export default React.memo(Separator);
//# sourceMappingURL=Separator.js.map