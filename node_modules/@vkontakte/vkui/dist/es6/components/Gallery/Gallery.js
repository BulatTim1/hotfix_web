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
import getClassName from '../../helpers/getClassName';
import Touch from '../Touch/Touch';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';

var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "slidesStore", void 0);

    _defineProperty(_assertThisInitialized(_this), "viewport", void 0);

    _defineProperty(_assertThisInitialized(_this), "timeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "isChildrenDirty", void 0);

    _defineProperty(_assertThisInitialized(_this), "go", function (targetIndex) {
      _this.setState({
        animation: true,
        shiftX: _this.calculateIndent(targetIndex),
        current: targetIndex
      });

      if (_this.timeout) {
        _this.clearTimeout();

        _this.setTimeout(_this.props.autoplay);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onStart", function (e) {
      _this.setState({
        animation: false,
        startT: e.startT
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMoveX", function (e) {
      if (_this.isDraggable()) {
        e.originalEvent.preventDefault();

        if (e.isSlideX) {
          _this.props.onDragStart && _this.props.onDragStart();

          if (_this.state.deltaX !== e.shiftX || _this.state.dragging !== e.isSlideX) {
            _this.setState({
              deltaX: e.shiftX,
              dragging: e.isSlideX
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEnd", function (e) {
      var targetIndex = e.isSlide ? _this.getTarget() : _this.state.current;
      _this.props.onDragEnd && _this.props.onDragEnd();

      _this.setState({
        shiftX: _this.calculateIndent(targetIndex),
        deltaX: 0,
        animation: true,
        current: targetIndex
      });

      if (_this.props.onEnd) {
        _this.props.onEnd({
          targetIndex: targetIndex
        });
      }

      if (_this.timeout) {
        _this.clearTimeout();

        _this.setTimeout(_this.props.autoplay);
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.initializeSlides();

      var _this$state = _this.state,
          layerWidth = _this$state.layerWidth,
          slides = _this$state.slides;
      var containerWidth = _this.container.current.offsetWidth;
      var viewportWidth = _this.viewport.offsetWidth;

      _this.setState({
        shiftX: _this.calculateIndent(_this.state.current),
        containerWidth: containerWidth,
        min: _this.calcMin({
          layerWidth: layerWidth,
          containerWidth: containerWidth,
          viewportWidth: viewportWidth,
          slides: slides
        }),
        max: _this.calcMax({
          viewportWidth: viewportWidth,
          slides: slides
        }),
        animation: false
      }, function () {
        window.requestAnimationFrame(function () {
          return _this.setState({
            animation: true
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTimeout", function (duration) {
      if (canUseDOM) {
        _this.timeout = window.setTimeout(function () {
          var _this$state2 = _this.state,
              slides = _this$state2.slides,
              current = _this$state2.current;
          var targetIndex = current < slides.length - 1 ? current + 1 : 0;

          _this.go(targetIndex);
        }, duration);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearTimeout", function () {
      clearTimeout(_this.timeout);
    });

    _defineProperty(_assertThisInitialized(_this), "getSlideRef", function (id) {
      return function (slide) {
        _this.slidesStore["slide-".concat(id)] = slide;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getViewportRef", function (viewport) {
      _this.viewport = viewport ? viewport.container : {};
    });

    var _current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    _this.state = {
      containerWidth: 0,
      current: _current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };
    _this.container = React.createRef();
    _this.slidesStore = {};
    return _this;
  }

  _createClass(Gallery, [{
    key: "initializeSlides",
    value: function initializeSlides() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var slides = React.Children.map(this.props.children, function (_item, i) {
        var elem = _this2.slidesStore["slide-".concat(i)];

        return {
          coordX: elem.offsetLeft,
          width: elem.offsetWidth
        };
      });
      var containerWidth = this.container.current.offsetWidth;
      var viewportWidth = this.viewport.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({
        containerWidth: containerWidth,
        layerWidth: layerWidth,
        viewportWidth: viewportWidth,
        slides: slides
      });
      var max = this.calcMax({
        viewportWidth: viewportWidth,
        slides: slides
      });
      this.setState({
        min: min,
        max: max,
        layerWidth: layerWidth,
        containerWidth: containerWidth,
        slides: slides
      }, callback);
    }
  }, {
    key: "calcMin",
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          viewportWidth = _ref.viewportWidth,
          slides = _ref.slides;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;

        case 'right':
          return viewportWidth - layerWidth;

        case 'center':
          if (this.isCenterWithCustomWidth && slides.length) {
            var _slides = slides[slides.length - 1],
                coordX = _slides.coordX,
                width = _slides.width;
            return viewportWidth / 2 - coordX - width / 2;
          } else {
            return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
          }

      }
    }
  }, {
    key: "calcMax",
    value: function calcMax(_ref2) {
      var viewportWidth = _ref2.viewportWidth,
          slides = _ref2.slides;

      if (this.isCenterWithCustomWidth && slides.length) {
        var _slides$ = slides[0],
            width = _slides$.width,
            coordX = _slides$.coordX;
        return viewportWidth / 2 - coordX - width / 2;
      } else {
        return 0;
      }
    }
    /**
     * Считает отступ слоя галереи
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: "calculateIndent",
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;

      if (!this.isDraggable()) {
        return 0;
      }

      var targetSlide = slides.length ? slides[targetIndex] : null;

      if (targetSlide) {
        var coordX = targetSlide.coordX,
            width = targetSlide.width;

        if (this.isCenterWithCustomWidth) {
          var viewportWidth = this.viewport.offsetWidth;
          return viewportWidth / 2 - coordX - width / 2;
        }

        return this.validateIndent(-1 * coordX);
      } else {
        return 0;
      }
    }
    /**
     * Считает отступ слоя галереи во время драга
     * @returns {Number} Значения отступа
     */

  }, {
    key: "calculateDragIndent",
    value: function calculateDragIndent() {
      var _this$state3 = this.state,
          shiftX = _this$state3.shiftX,
          deltaX = _this$state3.deltaX,
          min = _this$state3.min,
          max = _this$state3.max;
      var indent = shiftX + deltaX;

      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }
  }, {
    key: "validateIndent",
    value: function validateIndent(value) {
      var _this$state4 = this.state,
          min = _this$state4.min,
          max = _this$state4.max;

      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: "isDraggable",
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }
    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     * @returns {Number} Индекс слайда
     */

  }, {
    key: "getTarget",
    value: function getTarget() {
      var _this$state5 = this.state,
          slides = _this$state5.slides,
          current = _this$state5.current,
          deltaX = _this$state5.deltaX,
          shiftX = _this$state5.shiftX,
          startT = _this$state5.startT,
          max = _this$state5.max;
      var expectDeltaX = deltaX / (Date.now() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX - max;
      var direction = deltaX < 0 ? 1 : -1; // Находим ближайшую границу слайда к текущему отступу

      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);
        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.state.current)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.children !== prevProps.children) {
        this.isChildrenDirty = true;
      }

      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }

      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }

      if (this.props.autoplay && !prevProps.autoplay) {
        if (this.props.autoplay) {
          this.setTimeout(this.props.autoplay);
        }
      }

      if (!this.props.autoplay && prevProps.autoplay) {
        this.clearTimeout();
      }

      if (this.props.slideIndex !== prevProps.slideIndex && typeof this.props.slideIndex === 'number') {
        this.go(this.props.slideIndex);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
      this.clearTimeout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state6 = this.state,
          animation = _this$state6.animation,
          duration = _this$state6.duration,
          current = _this$state6.current,
          dragging = _this$state6.dragging;

      var _this$props = this.props,
          children = _this$props.children,
          slideWidth = _this$props.slideWidth,
          autoplay = _this$props.autoplay,
          initialSlideIndex = _this$props.initialSlideIndex,
          slideIndex = _this$props.slideIndex,
          onDragStart = _this$props.onDragStart,
          onDragEnd = _this$props.onDragEnd,
          onChange = _this$props.onChange,
          onEnd = _this$props.onEnd,
          align = _this$props.align,
          bullets = _this$props.bullets,
          className = _this$props.className,
          platform = _this$props.platform,
          restProps = _objectWithoutProperties(_this$props, ["children", "slideWidth", "autoplay", "initialSlideIndex", "slideIndex", "onDragStart", "onDragEnd", "onChange", "onEnd", "align", "bullets", "className", "platform"]);

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var layerStyle = {
        WebkitTransform: "translateX(".concat(indent, "px)"),
        transform: "translateX(".concat(indent, "px)"),
        WebkitTransition: animation ? "-webkit-transform ".concat(duration, "s cubic-bezier(.1, 0, .25, 1)") : 'none',
        transition: animation ? "transform ".concat(duration, "s cubic-bezier(.1, 0, .25, 1)") : 'none'
      };
      return React.createElement("div", _extends({
        className: classNames(getClassName('Gallery', platform), className, "Gallery--".concat(align), {
          'Gallery--dragging': dragging,
          'Gallery--custom-width': slideWidth === 'custom'
        })
      }, restProps, {
        ref: this.container
      }), React.createElement(Touch, {
        className: "Gallery__viewport",
        onStartX: this.onStart,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd,
        style: {
          width: slideWidth === 'custom' ? '100%' : slideWidth
        },
        ref: this.getViewportRef
      }, React.createElement("div", {
        className: "Gallery__layer",
        style: layerStyle
      }, React.Children.map(children, function (item, i) {
        return React.createElement("div", {
          className: "Gallery__slide",
          key: "slide-".concat(i),
          ref: _this4.getSlideRef(i)
        }, item);
      }))), bullets && React.createElement("div", {
        className: classNames('Gallery__bullets', "Gallery__bullets--".concat(bullets))
      }, React.Children.map(children, function (_item, index) {
        return React.createElement("div", {
          className: classNames('Gallery__bullet', {
            'Gallery__bullet--active': index === current
          }),
          key: index
        });
      })));
    }
  }, {
    key: "isCenterWithCustomWidth",
    get: function get() {
      return this.props.slideWidth === 'custom' && this.props.align === 'center';
    }
  }]);

  return Gallery;
}(Component);

_defineProperty(Gallery, "defaultProps", {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0,
  align: 'left',
  bullets: false
});

export default withPlatform(Gallery);
//# sourceMappingURL=Gallery.js.map