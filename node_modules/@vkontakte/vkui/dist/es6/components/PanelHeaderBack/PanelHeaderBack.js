import React from 'react';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';
var PanelHeaderBack = React.memo(function (props) {
  var platform = usePlatform();
  return React.createElement(HeaderButton, props, platform === ANDROID ? React.createElement(Icon24Back, null) : React.createElement(Icon28ChevronBack, null));
});
export default PanelHeaderBack;
//# sourceMappingURL=PanelHeaderBack.js.map