"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TouchRootContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _touch = require("../../lib/touch");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var events = (0, _touch.getSupportedEvents)();
/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = _react.default.createContext(false);

exports.TouchRootContext = TouchRootContext;

var Touch =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Touch, _Component);

  function Touch() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Touch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Touch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelClick", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "gesture", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStart", function (e) {
      _this.gesture = {
        startX: (0, _touch.coordX)(e),
        startY: (0, _touch.coordY)(e),
        startT: new Date(),
        isPressed: true
      }; // Вызываем нужные колбеки из props

      var outputEvent = _objectSpread({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !_touch.touchEnabled && _this.subscribe(_this.document);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = (0, _touch.coordX)(e) - startX;
        var shiftY = (0, _touch.coordY)(e) - startY; // абсолютные значения смещений

        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        } // если мы ещё не определились


        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;
          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs; // Вызываем нужные колбеки из props

          var outputEvent = _objectSpread({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEnd", function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;

      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = _objectSpread({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      } // Если закончили жест на ссылке, выставляем флаг для отмены перехода


      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};
      !_touch.touchEnabled && _this.unsubscribe(_this.document);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragStart", function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
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
    return _this;
  }

  (0, _createClass2.default)(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, {
        capture: this.props.useCapture,
        passive: false
      });
      _touch.touchEnabled && this.subscribe(this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, {
        capture: this.props.useCapture,
        passive: false
      });
      _touch.touchEnabled && this.unsubscribe(this.container);
    }
    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: "subscribe",
    value: function subscribe(element) {
      element.addEventListener(events[1], this.onMove, {
        capture: this.props.useCapture,
        passive: false
      });
      element.addEventListener(events[2], this.onEnd, {
        capture: this.props.useCapture,
        passive: false
      });
      element.addEventListener(events[3], this.onEnd, {
        capture: this.props.useCapture,
        passive: false
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(element) {
      element.removeEventListener(events[1], this.onMove, {
        capture: this.props.useCapture,
        passive: false
      });
      element.removeEventListener(events[2], this.onEnd, {
        capture: this.props.useCapture,
        passive: false
      });
      element.removeEventListener(events[3], this.onEnd, {
        capture: this.props.useCapture,
        passive: false
      });
    }
    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStart = _this$props.onStart,
          onStartX = _this$props.onStartX,
          onStartY = _this$props.onStartY,
          onMove = _this$props.onMove,
          onMoveX = _this$props.onMoveX,
          onMoveY = _this$props.onMoveY,
          onEnd = _this$props.onEnd,
          onEndX = _this$props.onEndX,
          onEndY = _this$props.onEndY,
          useCapture = _this$props.useCapture,
          component = _this$props.component,
          getRootRef = _this$props.getRootRef,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onEnd", "onEndX", "onEndY", "useCapture", "component", "getRootRef"]);
      var ComponentName = component;
      return _react.default.createElement(ComponentName, (0, _extends2.default)({}, restProps, {
        onDragStart: this.onDragStart,
        onClick: this.onClick,
        ref: this.getRef
      }), this.props.children);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);
  return Touch;
}(_react.Component);

exports.default = Touch;
(0, _defineProperty2.default)(Touch, "propTypes", {
  onStart: _propTypes.default.func,
  onStartX: _propTypes.default.func,
  onStartY: _propTypes.default.func,
  onMove: _propTypes.default.func,
  onMoveX: _propTypes.default.func,
  onMoveY: _propTypes.default.func,
  onEnd: _propTypes.default.func,
  onEndX: _propTypes.default.func,
  onEndY: _propTypes.default.func,
  useCapture: _propTypes.default.bool,
  component: _propTypes.default.string,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func,
  getRootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.node
  })])
});
(0, _defineProperty2.default)(Touch, "defaultProps", {
  component: 'div',
  children: '',
  useCapture: false
});
(0, _defineProperty2.default)(Touch, "contextTypes", {
  document: _propTypes.default.any
});
//# sourceMappingURL=Touch.js.map