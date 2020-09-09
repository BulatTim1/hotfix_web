import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import HeaderButton from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderClose = function PanelHeaderClose(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return React.createElement(HeaderButton, restProps, platform === ANDROID ? React.createElement(Icon24Cancel, null) : children);
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};
export default PanelHeaderClose;
//# sourceMappingURL=PanelHeaderClose.js.map