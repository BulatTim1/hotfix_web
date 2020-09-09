import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Spinner24 from '@vkontakte/icons/dist/24/spinner';
import Spinner32 from '@vkontakte/icons/dist/32/spinner';
import Spinner44 from '@vkontakte/icons/dist/44/spinner';
import Spinner16 from '@vkontakte/icons/dist/16/spinner';
import usePlatform from '../../hooks/usePlatform';

var svgSpinner = function svgSpinner(size) {
  switch (size) {
    case 'large':
      return React.createElement(Spinner44, {
        className: "Spinner__self"
      });

    case 'medium':
      return React.createElement(Spinner32, {
        className: "Spinner__self"
      });

    case 'small':
      return React.createElement(Spinner16, {
        className: "Spinner__self"
      });

    default:
      return React.createElement(Spinner24, {
        className: "Spinner__self"
      });
  }
};

var Spinner = React.memo(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ["className", "size"]);

  var platform = usePlatform();
  return React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('Spinner', platform), className)
  }), svgSpinner(size));
});
Spinner.defaultProps = {
  size: 'regular'
};
export default Spinner;
//# sourceMappingURL=Spinner.js.map