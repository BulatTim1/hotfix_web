import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSupportedEvents, coordX, coordY, touchEnabled } from '../../lib/touch';
var events = getSupportedEvents();
/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

export var TouchRootContext = React.createContext(false);

var Touch =
/*#__PURE__*/
function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Touch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "cancelClick", false);

    _defineProperty(_assertThisInitialized(_this), "gesture", {});

    _defineProperty(_assertThisInitialized(_this), "onStart", function (e) {
      _this.gesture = {
        startX: coordX(e),
        startY: coordY(e),
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

      !touchEnabled && _this.subscribe(_this.document);
    });

    _defineProperty(_assertThisInitialized(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = coordX(e) - startX;
        var shiftY = coordY(e) - startY; // абсолютные значения смещений

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

    _defineProperty(_assertThisInitialized(_this), "onEnd", function (e) {
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
      !touchEnabled && _this.unsubscribe(_this.document);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (container) {
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

  _createClass(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, {
        capture: this.props.useCapture,
        passive: false
      });
      touchEnabled && this.subscribe(this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, {
        capture: this.props.useCapture,
        passive: false
      });
      touchEnabled && this.unsubscribe(this.container);
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
          restProps = _objectWithoutProperties(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onEnd", "onEndX", "onEndY", "useCapture", "component", "getRootRef"]);

      var ComponentName = component;
      return React.createElement(ComponentName, _extends({}, restProps, {
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
}(Component);

_defineProperty(Touch, "propTypes", {
  onStart: PropTypes.func,
  onStartX: PropTypes.func,
  onStartY: PropTypes.func,
  onMove: PropTypes.func,
  onMoveX: PropTypes.func,
  onMoveY: PropTypes.func,
  onEnd: PropTypes.func,
  onEndX: PropTypes.func,
  onEndY: PropTypes.func,
  useCapture: PropTypes.bool,
  component: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.node
  })])
});

_defineProperty(Touch, "defaultProps", {
  component: 'div',
  children: '',
  useCapture: false
});

_defineProperty(Touch, "contextTypes", {
  document: PropTypes.any
});

export { Touch as default };
//# sourceMappingURL=Touch.js.map