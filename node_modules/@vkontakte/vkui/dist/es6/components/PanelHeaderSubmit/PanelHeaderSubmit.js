import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderSubmit = function PanelHeaderSubmit(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return React.createElement(HeaderButton, _extends({
    primary: true
  }, restProps), platform === ANDROID ? React.createElement(Icon24Done, null) : children);
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово'
};
export default PanelHeaderSubmit;
//# sourceMappingURL=PanelHeaderSubmit.js.map