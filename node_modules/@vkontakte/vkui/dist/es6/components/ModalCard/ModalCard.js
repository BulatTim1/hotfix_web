import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import Button from '../Button/Button';
import HeaderButton from '../HeaderButton/HeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IOS } from '../../lib/platform';
import { isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';

var ModalCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalCard, _Component);

  function ModalCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function (event) {
      var target = event.currentTarget;
      var action = _this.props.actions[target.dataset.index].action;
      event.persist();

      if (typeof action === 'function') {
        action(event);
      }
    });

    return _this;
  }

  _createClass(ModalCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          insets = _this$props.insets,
          icon = _this$props.icon,
          title = _this$props.title,
          caption = _this$props.caption,
          children = _this$props.children,
          actions = _this$props.actions,
          actionsLayout = _this$props.actionsLayout,
          onClose = _this$props.onClose,
          platform = _this$props.platform;
      return React.createElement("div", {
        className: classNames(getClassName('ModalCard', platform))
      }, React.createElement("div", {
        className: "ModalCard__in"
      }, React.createElement("div", {
        className: "ModalCard__container",
        style: isNumeric(insets.bottom) ? {
          marginBottom: insets.bottom
        } : null
      }, icon && React.createElement("div", {
        className: "ModalCard__icon"
      }, icon), title && React.createElement("div", {
        className: "ModalCard__title"
      }, title), caption && React.createElement("div", {
        className: "ModalCard__caption"
      }, caption), children, actions.length > 0 && React.createElement("div", {
        className: classNames('ModalCard__actions', {
          'ModalCard__actions--v': actionsLayout === 'vertical'
        })
      }, actions.map(function (_ref, i) {
        var title = _ref.title,
            type = _ref.type;
        return React.createElement(Button, {
          key: i,
          "data-index": i,
          size: "xl",
          level: type,
          onClick: _this2.onButtonClick
        }, title);
      })), platform === IOS && React.createElement(HeaderButton, {
        className: "ModalCard__dismiss",
        onClick: onClose
      }, React.createElement(Icon24Dismiss, null)))));
    }
  }]);

  return ModalCard;
}(Component);

_defineProperty(ModalCard, "defaultProps", {
  actions: [],
  actionsLayout: 'horizontal',
  insets: {}
});

export default withPlatform(withInsets(ModalCard));
//# sourceMappingURL=ModalCard.js.map