import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _get from "@babel/runtime/helpers/get";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Touch from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import Slider from '../Slider/Slider';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
var baseClassNames = getClassName('Slider');

var RangeSlider =
/*#__PURE__*/
function (_Slider) {
  _inherits(RangeSlider, _Slider);

  function RangeSlider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RangeSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onStart", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onMoveX", function (e) {
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

  _createClass(RangeSlider, [{
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
        percentStart: _get(_getPrototypeOf(RangeSlider.prototype), "validatePercent", this).call(this, percentStart),
        percentEnd: _get(_getPrototypeOf(RangeSlider.prototype), "validatePercent", this).call(this, percentEnd)
      };
    }
  }, {
    key: "percentToValue",
    value: function percentToValue(_ref2) {
      var percentStart = _ref2.percentStart,
          percentEnd = _ref2.percentEnd;
      return [_get(_getPrototypeOf(RangeSlider.prototype), "percentToValue", this).call(this, percentStart), _get(_getPrototypeOf(RangeSlider.prototype), "percentToValue", this).call(this, percentEnd)];
    }
  }, {
    key: "valueToPercent",
    value: function valueToPercent(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          valueStart = _ref4[0],
          valueEnd = _ref4[1];

      return {
        percentStart: _get(_getPrototypeOf(RangeSlider.prototype), "valueToPercent", this).call(this, valueStart),
        percentEnd: _get(_getPrototypeOf(RangeSlider.prototype), "valueToPercent", this).call(this, valueEnd)
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
          restProps = _objectWithoutProperties(_this$props, ["className", "min", "max", "step", "value", "defaultValue", "onChange", "getRootRef"]);

      return React.createElement("div", _extends({}, restProps, {
        className: classNames(baseClassNames, className),
        ref: this.getRef
      }), React.createElement(Touch, {
        onStart: this.onStart,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd,
        className: "Slider__in"
      }, React.createElement("div", {
        className: "Slider__dragger",
        style: {
          width: this.state.percentEnd - this.state.percentStart + '%',
          left: this.state.percentStart + '%'
        }
      }, React.createElement("span", {
        className: classNames('Slider__thumb', 'Slider__thumb--start', {
          'Slider__thumb--active': this.state.active === 'start'
        }),
        ref: function ref(el) {
          return _this3.thumbStart = el;
        }
      }), React.createElement("span", {
        className: classNames('Slider__thumb', 'Slider__thumb--end', {
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
}(Slider);

_defineProperty(RangeSlider, "propTypes", _objectSpread({}, Slider.propTypes, {
  value: PropTypes.arrayOf(PropTypes.number),
  defaultValue: PropTypes.arrayOf(PropTypes.number)
}));

_defineProperty(RangeSlider, "defaultProps", Slider.defaultProps);

export { RangeSlider as default };
//# sourceMappingURL=RangeSlider.js.map