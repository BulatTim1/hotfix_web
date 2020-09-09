import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isControlledOutside", void 0);

    _defineProperty(_assertThisInitialized(_this), "selectEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setTitle();

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.currentTarget.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTitle", function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (element) {
      _this.selectEl = element;
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });

    var state = {
      title: '',
      notSelected: false
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
        this.setTitle();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTitle();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          style = _this$props.style,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          alignment = _this$props.alignment,
          status = _this$props.status,
          placeholder = _this$props.placeholder,
          children = _this$props.children,
          className = _this$props.className,
          getRef = _this$props.getRef,
          getRootRef = _this$props.getRootRef,
          restProps = _objectWithoutProperties(_this$props, ["style", "value", "defaultValue", "onChange", "alignment", "status", "placeholder", "children", "className", "getRef", "getRootRef"]);

      return React.createElement(FormField, {
        TagName: "label",
        className: classNames('Select', (_classNames = {}, _defineProperty(_classNames, "Select--not-selected", this.state.notSelected), _defineProperty(_classNames, "Select--align-".concat(alignment), !!alignment), _classNames), className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, React.createElement("select", _extends({}, restProps, {
        className: "Select__el",
        onChange: this.onChange,
        value: this.value,
        ref: this.getRef
      }), placeholder && React.createElement("option", {
        value: ""
      }, placeholder), children), React.createElement("div", {
        className: "Select__container"
      }, React.createElement("div", {
        className: "Select__title"
      }, this.state.title), React.createElement(Icon24Dropdown, null)));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Select;
}(Component);

export { Select as default };
//# sourceMappingURL=Select.js.map