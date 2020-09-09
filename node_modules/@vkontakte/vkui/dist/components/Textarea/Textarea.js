"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _FormField = _interopRequireDefault(require("../FormField/FormField"));

var Textarea =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Textarea, _PureComponent);

  function Textarea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Textarea);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Textarea).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isControlledOutside", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "element", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (element) {
      _this.element = element;
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resize", function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;
        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);
        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({
            height: scrollHeight - diff
          });
        }

        _this.setState({
          height: 0
        }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({
            height: height
          });

          _this.props.onResize(el);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }

    return _this;
  }

  (0, _createClass2.default)(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        window.requestAnimationFrame(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          onChange = _this$props.onChange,
          grow = _this$props.grow,
          style = _this$props.style,
          onResize = _this$props.onResize,
          className = _this$props.className,
          getRootRef = _this$props.getRootRef,
          getRef = _this$props.getRef,
          status = _this$props.status,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["defaultValue", "value", "onChange", "grow", "style", "onResize", "className", "getRootRef", "getRef", "status"]);
      var height = this.state.height || style.height || 66;
      return _react.default.createElement(_FormField.default, {
        className: (0, _classNames.default)('Textarea', className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, _react.default.createElement("textarea", (0, _extends2.default)({}, restProps, {
        className: "Textarea__el",
        value: this.value,
        onChange: this.onChange,
        ref: this.getRef,
        style: {
          height: height
        }
      })));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);
  return Textarea;
}(_react.PureComponent);

exports.default = Textarea;
(0, _defineProperty2.default)(Textarea, "defaultProps", {
  style: {},
  defaultValue: '',
  grow: true,
  onResize: function onResize() {}
});
//# sourceMappingURL=Textarea.js.map