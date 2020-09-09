import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Children, Fragment } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      TagName = props.TagName,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = _objectWithoutProperties(props, ["children", "TagName", "className", "getRef", "onSubmit"]);

  var platform = usePlatform(); // Не используем тут JSX из-за этой проблемы: https://github.com/Microsoft/TypeScript/issues/28892

  return React.createElement(TagName, _objectSpread({}, restProps, {
    className: classNames(getClassName('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), React.createElement(Fragment, null, React.createElement("div", {
    className: "FormLayout__container"
  }, Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return React.createElement("div", {
        className: classNames('FormLayout__row', _defineProperty({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && React.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && React.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), TagName === 'form' && React.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  })));
};

FormLayout.defaultProps = {
  TagName: 'form',
  onSubmit: preventDefault
};
export default FormLayout;
//# sourceMappingURL=FormLayout.js.map