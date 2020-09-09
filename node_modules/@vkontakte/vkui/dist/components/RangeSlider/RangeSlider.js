"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Slider2 = _interopRequireDefault(require("../Slider/Slider"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseClassNames = (0, _getClassName.default)('Slider');

var RangeSlider =
/*#__PURE__*/
function (_Slider) {
  (0, _inherits2.default)(RangeSlider, _Slider);

  function RangeSlider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, RangeSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RangeSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStart", function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);

      var percentPosition = _this.absoluteToPecent(absolutePosition);

      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange), e);

      if (_this.isControlledOutside) {
        _this.setState({
          startX: absolutePosition
        });
      } else {
        _this.setState(_objectSpread({
          startX: absolutePosition
        }, percentRange));
      }

      var thumb = e.originalEvent.target.closest('.Slider__thumb');

      if (thumb === _this.thumbStart) {
        _this.setState({
          active: 'start'
        });
      } else if (thumb === _this.thumbEnd) {
        _this.setState({
          active: 'end'
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMoveX", function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));

      var percentPosition = _this.absoluteToPecent(absolutePosition);

      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange), e);

      if (!_this.isControlledOutside) {
        _this.setState(percentRange);
      }

      e.originalEvent.preventDefault();
    });
    return _this;
  }

  (0, _createClass2.default)(RangeSlider, [{
    key: "calcPercentRange",
    value: function calcPercentRange(percent) {
      var _this$state = this.state,
          percentStart = _this$state.percentStart,
          percentEnd = _this$state.percentEnd;

      if (percentStart === 100) {
        return {
          percentStart: percent,
          percentEnd: percentEnd
        };
      } else if (percentEnd === 0) {
        return {
          percentEnd: percent,
          percentStart: percentStart
        };
      } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
        return {
          percentStart: percent,
          percentEnd: percentEnd
        };
      } else {
        return {
          percentEnd: percent,
          percentStart: percentStart
        };
      }
    }
  }, {
    key: "validatePercent",
    value: function validatePercent(_ref) {
      var percentStart = _ref.percentStart,
          percentEnd = _ref.percentEnd;
      return {
        percentStart: (0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "validatePercent", this).call(this, percentStart),
        percentEnd: (0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "validatePercent", this).call(this, percentEnd)
      };
    }
  }, {
    key: "percentToValue",
    value: function percentToValue(_ref2) {
      var percentStart = _ref2.percentStart,
          percentEnd = _ref2.percentEnd;
      return [(0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "percentToValue", this).call(this, percentStart), (0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "percentToValue", this).call(this, percentEnd)];
    }
  }, {
    key: "valueToPercent",
    value: function valueToPercent(_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
          valueStart = _ref4[0],
          valueEnd = _ref4[1];

      return {
        percentStart: (0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "valueToPercent", this).call(this, valueStart),
        percentEnd: (0, _get2.default)((0, _getPrototypeOf3.default)(RangeSlider.prototype), "valueToPercent", this).call(this, valueEnd)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState(_this2.validatePercent(_this2.valueToPercent(_this2.value)));
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState(this.validatePercent(this.valueToPercent(nextProps.value)));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          getRootRef = _this$props.getRootRef,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "min", "max", "step", "value", "defaultValue", "onChange", "getRootRef"]);
      return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)(baseClassNames, className),
        ref: this.getRef
      }), _react.default.createElement(_Touch.default, {
        onStart: this.onStart,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd,
        className: "Slider__in"
      }, _react.default.createElement("div", {
        className: "Slider__dragger",
        style: {
          width: this.state.percentEnd - this.state.percentStart + '%',
          left: this.state.percentStart + '%'
        }
      }, _react.default.createElement("span", {
        className: (0, _classNames.default)('Slider__thumb', 'Slider__thumb--start', {
          'Slider__thumb--active': this.state.active === 'start'
        }),
        ref: function ref(el) {
          return _this3.thumbStart = el;
        }
      }), _react.default.createElement("span", {
        className: (0, _classNames.default)('Slider__thumb', 'Slider__thumb--end', {
          'Slider__thumb--active': this.state.active === 'end'
        }),
        ref: function ref(el) {
          return _this3.thumbEnd = el;
        }
      }))));
    }
  }, {
    key: "value",
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return [this.props.min, this.props.max];
      }
    }
  }]);
  return RangeSlider;
}(_Slider2.default);

exports.default = RangeSlider;
(0, _defineProperty2.default)(RangeSlider, "propTypes", _objectSpread({}, _Slider2.default.propTypes, {
  value: _propTypes.default.arrayOf(_propTypes.default.number),
  defaultValue: _propTypes.default.arrayOf(_propTypes.default.number)
}));
(0, _defineProperty2.default)(RangeSlider, "defaultProps", _Slider2.default.defaultProps);
//# sourceMappingURL=RangeSlider.js.map