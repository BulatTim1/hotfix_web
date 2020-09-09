"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ACTIVE_EFFECT_DELAY = void 0;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Touch = _interopRequireWildcard(require("../Touch/Touch"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _platform = require("../../lib/platform");

var _offset = require("../../lib/offset");

var _touch = require("../../lib/touch");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ts = function ts() {
  return +Date.now();
};

var baseClassNames = (0, _getClassName.default)('Tappable');
var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
exports.ACTIVE_EFFECT_DELAY = ACTIVE_EFFECT_DELAY;
var storage = {};
/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */

function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();
    delete storage[id];
  });
}

var Tappable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Tappable, _Component);

  function Tappable(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tappable);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tappable).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isSlide", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStart", function (_ref) {
      var originalEvent = _ref.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (_platform.IS_PLATFORM_ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMove", function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;

        _this.stop();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEnd", function (_ref3) {
      var originalEvent = _ref3.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);

          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDown", function (e) {
      if (_platform.IS_PLATFORM_ANDROID) {
        var _getOffsetRect = (0, _offset.getOffsetRect)(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = (0, _touch.coordX)(e);
        var y = (0, _touch.coordY)(e);
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: _objectSpread({}, state.clicks, (0, _defineProperty2.default)({}, key, {
              x: Math.round(x - left),
              y: Math.round(y - top)
            }))
          };
        });

        _this.wavesTimeout = setTimeout(function () {
          _this.setState(function (state) {
            var clicks = _objectSpread({}, state.clicks);

            delete clicks[key];
            return {
              clicks: clicks
            };
          });
        }, 225);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "start", function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }

      deactivateOtherInstances(_this.id);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stop", function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }

      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getStorage", function () {
      return storage[_this.id];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (container) {
      _this.container = container;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(container);
        } else {
          getRootRef.current = container;
        }
      }
    });
    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  (0, _createClass2.default)(Tappable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);
        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicks = _this$state.clicks,
          active = _this$state.active;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          component = _this$props.component,
          activeEffectDelay = _this$props.activeEffectDelay,
          stopPropagation = _this$props.stopPropagation,
          getRootRef = _this$props.getRootRef,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "component", "activeEffectDelay", "stopPropagation", "getRootRef"]);
      var Component = !restProps.disabled ? _Touch.default : component;
      var classes = (0, _classNames.default)(baseClassNames, className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });
      var props = {};

      if (!restProps.disabled) {
        props.component = component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
      }

      if (typeof Component === 'string') {
        props.ref = this.getRef;
      } else {
        props.getRootRef = this.getRef;
      }

      return _react.default.createElement(_Touch.TouchRootContext.Consumer, null, function (insideTouchRoot) {
        _this2.insideTouchRoot = insideTouchRoot;
        return _react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
          className: classes
        }, props), _platform.IS_PLATFORM_ANDROID && _react.default.createElement("span", {
          className: "Tappable__waves"
        }, Object.keys(clicks).map(function (k) {
          return _react.default.createElement("span", {
            className: "Tappable__wave",
            style: {
              top: clicks[k].y,
              left: clicks[k].x
            },
            key: k
          });
        })), children);
      });
    }
  }]);
  return Tappable;
}(_react.Component);

exports.default = Tappable;
(0, _defineProperty2.default)(Tappable, "propTypes", {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  role: _propTypes.default.string,
  activeEffectDelay: _propTypes.default.number,
  stopPropagation: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })])
});
(0, _defineProperty2.default)(Tappable, "defaultProps", {
  component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
});
//# sourceMappingURL=Tappable.js.map