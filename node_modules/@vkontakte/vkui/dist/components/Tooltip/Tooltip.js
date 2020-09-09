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

var _getPrototypeOf4 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var isElement = function isElement(element) {
  return _react.default.isValidElement(element);
};

var isDOMTypeElement = function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
};

var baseClassName = (0, _getClassName.default)('Tooltip');

var TooltipPortal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TooltipPortal, _React$Component);

  function TooltipPortal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TooltipPortal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf4.default)(TooltipPortal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      x: 0,
      y: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fixedPortal", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "portalTarget", _this.findPortalTarget());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (el) {
      return _this.el = el;
    });
    return _this;
  }

  (0, _createClass2.default)(TooltipPortal, [{
    key: "findPortalTarget",
    value: function findPortalTarget() {
      var target = this.props.target;
      var closestFixed = target.closest('.FixedLayout');
      var closestHeader = target.closest('.PanelHeader__in');
      var closestPanel = this.document.getElementById(this.context.panel).childNodes[0];

      if (closestFixed || closestHeader) {
        this.fixedPortal = true;
      }

      return closestFixed || closestHeader || closestPanel;
    }
  }, {
    key: "getBoundingTargetRect",
    value: function getBoundingTargetRect() {
      var target = this.props.target;
      var targetBounds = target.getBoundingClientRect();
      var portalBounds = this.portalTarget.getBoundingClientRect();
      return {
        width: targetBounds.width,
        height: targetBounds.height,
        x: targetBounds.left - portalBounds.left,
        y: targetBounds.top - portalBounds.top
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.props.onClose);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          offsetY = _this$props.offsetY,
          offsetX = _this$props.offsetX,
          alignX = _this$props.alignX,
          alignY = _this$props.alignY;
      var coords = this.getBoundingTargetRect();
      this.document.addEventListener('click', this.props.onClose);
      this.setState({
        x: coords.x + offsetX + (alignX === 'right' ? coords.width - this.el.offsetWidth : 0),
        y: coords.y + (alignY === 'top' ? -this.el.offsetHeight - offsetY : coords.height + offsetY)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          title = _this$props2.title,
          text = _this$props2.text,
          alignX = _this$props2.alignX,
          alignY = _this$props2.alignY,
          cornerOffset = _this$props2.cornerOffset;
      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: (0, _classNames2.default)(baseClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "Tooltip--x-".concat(alignX), true), (0, _defineProperty2.default)(_classNames, "Tooltip--y-".concat(alignY), true), (0, _defineProperty2.default)(_classNames, 'Tooltip--fixed', this.fixedPortal), _classNames))
      }, _react.default.createElement("div", {
        className: "Tooltip__container",
        style: {
          top: this.state.y,
          left: this.state.x
        },
        ref: this.getRef
      }, _react.default.createElement("div", {
        className: "Tooltip__corner",
        style: (0, _defineProperty2.default)({}, alignX, 20 + cornerOffset)
      }), _react.default.createElement("div", {
        className: "Tooltip__content"
      }, title && _react.default.createElement("div", {
        className: "Tooltip__title"
      }, title), text && _react.default.createElement("div", {
        className: "Tooltip__text"
      }, text)))), this.portalTarget);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);
  return TooltipPortal;
}(_react.default.Component);

(0, _defineProperty2.default)(TooltipPortal, "propTypes", {
  target: _propTypes.default.object,
  text: _propTypes.default.node,
  title: _propTypes.default.node,
  alignX: _propTypes.default.oneOf(['left', 'right']),
  alignY: _propTypes.default.oneOf(['top', 'bottom']),
  offsetX: _propTypes.default.number,
  offsetY: _propTypes.default.number,
  cornerOffset: _propTypes.default.number,
  onClose: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(TooltipPortal, "contextTypes", {
  document: _propTypes.default.any,
  panel: _propTypes.default.string
});

var Tooltip =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Tooltip, _React$Component2);

  function Tooltip() {
    var _getPrototypeOf3;

    var _this2;

    (0, _classCallCheck2.default)(this, Tooltip);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf3 = (0, _getPrototypeOf4.default)(Tooltip)).call.apply(_getPrototypeOf3, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "state", {
      ready: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "getRef", function (el) {
      return _this2.targetEl = el;
    });
    return _this2;
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.targetEl && this.setState({
        ready: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$cloneElement;

      var _this$props3 = this.props,
          children = _this$props3.children,
          isShown = _this$props3.isShown,
          portalProps = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "isShown"]);

      var child = _react.default.cloneElement(children, (_React$cloneElement = {}, (0, _defineProperty2.default)(_React$cloneElement, isDOMTypeElement(children) ? 'ref' : 'getRootRef', this.getRef), (0, _defineProperty2.default)(_React$cloneElement, "key", 'c'), _React$cloneElement));

      if (!isShown || !this.state.ready) {
        return child;
      }

      return [child, _react.default.createElement(TooltipPortal, (0, _extends2.default)({}, portalProps, {
        target: this.targetEl,
        key: "t"
      }))];
    }
  }]);
  return Tooltip;
}(_react.default.Component);

exports.default = Tooltip;
(0, _defineProperty2.default)(Tooltip, "propTypes", {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown: _propTypes.default.bool.isRequired,

  /**
   * Текст тултипа.
   */
  text: _propTypes.default.node,

  /**
   * Заголовок тултипа.
   */
  title: _propTypes.default.node,

  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX: _propTypes.default.oneOf(['left', 'right']),

  /**
   * Положение по вертикали (расположение над или под `children`).
   */
  alignY: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX: _propTypes.default.number,

  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY: _propTypes.default.number,

  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset: _propTypes.default.number,

  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(Tooltip, "defaultProps", {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true
});
//# sourceMappingURL=Tooltip.js.map