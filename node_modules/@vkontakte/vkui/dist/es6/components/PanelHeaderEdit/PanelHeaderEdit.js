import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import { ANDROID } from '../../lib/platform';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderEdit = function PanelHeaderEdit(_ref) {
  var isActive = _ref.isActive,
      editLabel = _ref.editLabel,
      doneLabel = _ref.doneLabel,
      restProps = _objectWithoutProperties(_ref, ["isActive", "editLabel", "doneLabel"]);

  var iOSText = isActive ? doneLabel : editLabel;
  var AndroidIcon = isActive ? React.createElement(Icon24Done, null) : React.createElement(Icon24Write, null);
  var platform = usePlatform();
  return React.createElement(HeaderButton, restProps, platform === ANDROID ? AndroidIcon : iOSText);
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};
export default PanelHeaderEdit;
//# sourceMappingURL=PanelHeaderEdit.js.map