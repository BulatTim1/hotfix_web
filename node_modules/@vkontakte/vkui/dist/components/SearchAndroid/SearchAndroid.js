"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _HeaderButton = _interopRequireDefault(require("../HeaderButton/HeaderButton"));

var _back = _interopRequireDefault(require("@vkontakte/icons/dist/24/back"));

var _cancel = _interopRequireDefault(require("@vkontakte/icons/dist/24/cancel"));

var _search = _interopRequireDefault(require("@vkontakte/icons/dist/24/search"));

var baseClassName = (0, _getClassName.default)('Search');

var SearchAndroid =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SearchAndroid, _React$Component);

  function SearchAndroid(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchAndroid);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchAndroid).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCancel", function () {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRef", function (element) {
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

  (0, _createClass2.default)(SearchAndroid, [{
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
          inputProps = (0, _objectWithoutProperties2.default)(_this$props, ["getRef", "value", "defaultValue", "onChange", "onClose", "theme", "autoFocus"]);
      var hasValue = !!this.value;
      var className = (0, _classNames.default)(baseClassName, "Search--".concat(theme), {
        'Search--has-value': hasValue,
        'Search--vkapps': this.context.webviewType === 'vkapps'
      }, this.props.className);
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        className: "Search__container"
      }, _react.default.createElement("div", {
        className: "Search__before"
      }, theme === 'default' && _react.default.createElement(_search.default, null), theme === 'header' && _react.default.createElement(_HeaderButton.default, {
        onClick: onClose
      }, _react.default.createElement(_back.default, null))), _react.default.createElement("div", {
        className: "Search__control"
      }, _react.default.createElement("input", (0, _extends2.default)({}, inputProps, {
        className: "Search__input",
        ref: this.inputRef,
        value: this.value,
        onChange: this.onChange
      }))), hasValue && _react.default.createElement("div", {
        className: "Search__after"
      }, theme === 'default' && _react.default.createElement(_cancel.default, {
        onClick: this.onCancel
      }), theme === 'header' && _react.default.createElement(_HeaderButton.default, {
        onClick: this.onCancel
      }, _react.default.createElement(_cancel.default, null)))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);
  return SearchAndroid;
}(_react.default.Component);

exports.default = SearchAndroid;
(0, _defineProperty2.default)(SearchAndroid, "propTypes", {
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onClose: _propTypes.default.func,
  placeholder: _propTypes.default.node,
  theme: _propTypes.default.oneOf(['header', 'default']),
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  autoFocus: _propTypes.default.bool
});
(0, _defineProperty2.default)(SearchAndroid, "defaultProps", {
  placeholder: 'Поиск',
  theme: 'default',
  autoFocus: true
});
(0, _defineProperty2.default)(SearchAndroid, "contextTypes", {
  webviewType: _propTypes.default.oneOf(['vkapps', 'internal'])
});
//# sourceMappingURL=SearchAndroid.js.map