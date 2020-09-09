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
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import ReactDOM from 'react-dom';

var isElement = function isElement(element) {
  return React.isValidElement(element);
};

var isDOMTypeElement = function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
};

var baseClassName = getClassName('Tooltip');

var TooltipPortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TooltipPortal, _React$Component);

  function TooltipPortal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TooltipPortal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TooltipPortal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      x: 0,
      y: 0
    });

    _defineProperty(_assertThisInitialized(_this), "fixedPortal", false);

    _defineProperty(_assertThisInitialized(_this), "portalTarget", _this.findPortalTarget());

    _defineProperty(_assertThisInitialized(_this), "getRef", function (el) {
      return _this.el = el;
    });

    return _this;
  }

  _createClass(TooltipPortal, [{
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
      return ReactDOM.createPortal(React.createElement("div", {
        className: classNames(baseClassName, (_classNames = {}, _defineProperty(_classNames, "Tooltip--x-".concat(alignX), true), _defineProperty(_classNames, "Tooltip--y-".concat(alignY), true), _defineProperty(_classNames, 'Tooltip--fixed', this.fixedPortal), _classNames))
      }, React.createElement("div", {
        className: "Tooltip__container",
        style: {
          top: this.state.y,
          left: this.state.x
        },
        ref: this.getRef
      }, React.createElement("div", {
        className: "Tooltip__corner",
        style: _defineProperty({}, alignX, 20 + cornerOffset)
      }), React.createElement("div", {
        className: "Tooltip__content"
      }, title && React.createElement("div", {
        className: "Tooltip__title"
      }, title), text && React.createElement("div", {
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
}(React.Component);

_defineProperty(TooltipPortal, "propTypes", {
  target: PropTypes.object,
  text: PropTypes.node,
  title: PropTypes.node,
  alignX: PropTypes.oneOf(['left', 'right']),
  alignY: PropTypes.oneOf(['top', 'bottom']),
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  cornerOffset: PropTypes.number,
  onClose: PropTypes.func.isRequired
});

_defineProperty(TooltipPortal, "contextTypes", {
  document: PropTypes.any,
  panel: PropTypes.string
});

var Tooltip =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Tooltip, _React$Component2);

  function Tooltip() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Tooltip);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      ready: false
    });

    _defineProperty(_assertThisInitialized(_this2), "getRef", function (el) {
      return _this2.targetEl = el;
    });

    return _this2;
  }

  _createClass(Tooltip, [{
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
          portalProps = _objectWithoutProperties(_this$props3, ["children", "isShown"]);

      var child = React.cloneElement(children, (_React$cloneElement = {}, _defineProperty(_React$cloneElement, isDOMTypeElement(children) ? 'ref' : 'getRootRef', this.getRef), _defineProperty(_React$cloneElement, "key", 'c'), _React$cloneElement));

      if (!isShown || !this.state.ready) {
        return child;
      }

      return [child, React.createElement(TooltipPortal, _extends({}, portalProps, {
        target: this.targetEl,
        key: "t"
      }))];
    }
  }]);

  return Tooltip;
}(React.Component);

_defineProperty(Tooltip, "propTypes", {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: PropTypes.node.isRequired,

  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown: PropTypes.bool.isRequired,

  /**
   * Текст тултипа.
   */
  text: PropTypes.node,

  /**
   * Заголовок тултипа.
   */
  title: PropTypes.node,

  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX: PropTypes.oneOf(['left', 'right']),

  /**
   * Положение по вертикали (расположение над или под `children`).
   */
  alignY: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX: PropTypes.number,

  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY: PropTypes.number,

  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset: PropTypes.number,

  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose: PropTypes.func.isRequired
});

_defineProperty(Tooltip, "defaultProps", {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true
});

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map