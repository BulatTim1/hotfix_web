import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import HeaderButton from '../HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Search from '@vkontakte/icons/dist/24/search';
var baseClassName = getClassName('Search');

var SearchAndroid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchAndroid, _React$Component);

  function SearchAndroid(props) {
    var _this;

    _classCallCheck(this, SearchAndroid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchAndroid).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: ''
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange('');
      }

      _this.inputEl.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", function (element) {
      _this.inputEl = element;
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });

    var state = {};

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(SearchAndroid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.theme === 'header' && this.props.autoFocus && this.inputEl.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          getRef = _this$props.getRef,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          onClose = _this$props.onClose,
          theme = _this$props.theme,
          autoFocus = _this$props.autoFocus,
          inputProps = _objectWithoutProperties(_this$props, ["getRef", "value", "defaultValue", "onChange", "onClose", "theme", "autoFocus"]);

      var hasValue = !!this.value;
      var className = classNames(baseClassName, "Search--".concat(theme), {
        'Search--has-value': hasValue,
        'Search--vkapps': this.context.webviewType === 'vkapps'
      }, this.props.className);
      return React.createElement("div", {
        className: className
      }, React.createElement("div", {
        className: "Search__container"
      }, React.createElement("div", {
        className: "Search__before"
      }, theme === 'default' && React.createElement(Icon24Search, null), theme === 'header' && React.createElement(HeaderButton, {
        onClick: onClose
      }, React.createElement(Icon24Back, null))), React.createElement("div", {
        className: "Search__control"
      }, React.createElement("input", _extends({}, inputProps, {
        className: "Search__input",
        ref: this.inputRef,
        value: this.value,
        onChange: this.onChange
      }))), hasValue && React.createElement("div", {
        className: "Search__after"
      }, theme === 'default' && React.createElement(Icon24Cancel, {
        onClick: this.onCancel
      }), theme === 'header' && React.createElement(HeaderButton, {
        onClick: this.onCancel
      }, React.createElement(Icon24Cancel, null)))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchAndroid;
}(React.Component);

_defineProperty(SearchAndroid, "propTypes", {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClose: PropTypes.func,
  placeholder: PropTypes.node,
  theme: PropTypes.oneOf(['header', 'default']),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),
  autoFocus: PropTypes.bool
});

_defineProperty(SearchAndroid, "defaultProps", {
  placeholder: 'Поиск',
  theme: 'default',
  autoFocus: true
});

_defineProperty(SearchAndroid, "contextTypes", {
  webviewType: PropTypes.oneOf(['vkapps', 'internal'])
});

export { SearchAndroid as default };
//# sourceMappingURL=SearchAndroid.js.map