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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _platform = require("../../lib/platform");

var _chevron = _interopRequireDefault(require("@vkontakte/icons/dist/24/chevron"));

var _done = _interopRequireDefault(require("@vkontakte/icons/dist/16/done"));

var _cancel = _interopRequireDefault(require("@vkontakte/icons/dist/24/cancel"));

var _reorder = _interopRequireDefault(require("@vkontakte/icons/dist/24/reorder"));

var _reorder_ios = _interopRequireDefault(require("@vkontakte/icons/dist/24/reorder_ios"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var Cell =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Cell, _Component);

  function Cell(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Cell);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Cell).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "rootEl", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeButton", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function (e) {
      var _this$props = _this.props,
          removable = _this$props.removable,
          onClick = _this$props.onClick;

      if (e.target.tagName.toLowerCase() === 'input') {
        e.stopPropagation();
      } else if (removable) {
        return null;
      } else {
        onClick && onClick(e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "activateRemove", function () {
      _this.setState({
        isRemoveActivated: true
      });

      _this.document.addEventListener('click', _this.deactivateRemove);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deactivateRemove", function () {
      _this.setState({
        isRemoveActivated: false,
        removeOffset: 0
      });

      _this.document.removeEventListener('click', _this.deactivateRemove);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRemoveClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove(e, _this.rootEl);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRemoveRef", function (el) {
      return _this.removeButton = el;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRootRef", function (element) {
      _this.rootEl = element;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(element);
        } else {
          getRootRef.current = element;
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dragShift", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listEl", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "siblings", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dragStartIndex", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dragEndIndex", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dragDirection", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragStart", function () {
      _this.setState({
        dragging: true
      });

      _this.dragShift = 0;
      _this.listEl = _this.rootEl.closest('.List');
      _this.listEl && _this.listEl.classList.add('List--dragging');
      _this.siblings = Array.prototype.slice.call(_this.rootEl.parentElement.childNodes);
      _this.dragStartIndex = _this.siblings.indexOf(_this.rootEl);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragMove", function (e) {
      e.originalEvent.preventDefault();
      if (_this.state.removeOffset) return;
      _this.rootEl.style.transform = "translateY(".concat(e.shiftY, "px)");

      var rootGesture = _this.rootEl.getBoundingClientRect();

      _this.dragDirection = _this.dragShift - e.shiftY < 0 ? 'down' : 'up';
      _this.dragShift = e.shiftY;
      _this.dragEndIndex = _this.dragStartIndex;

      _this.siblings.forEach(function (sibling, siblingIndex) {
        var siblingGesture = sibling.getBoundingClientRect();

        if (_this.dragStartIndex < siblingIndex) {
          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
            if (_this.dragDirection === 'down') sibling.style.transform = "translateY(-100%)";
            _this.dragEndIndex++;
          }

          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && _this.dragDirection === 'up') {
            sibling.style.transform = "translateY(0)";
          }
        } else if (_this.dragStartIndex > siblingIndex) {
          if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
            if (_this.dragDirection === 'up') sibling.style.transform = "translateY(100%)";
            _this.dragEndIndex--;
          }

          if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && _this.dragDirection === 'down') {
            sibling.style.transform = "translateY(0)";
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragEnd", function () {
      _this.setState({
        dragging: false
      });

      _this.listEl && _this.listEl.classList.remove('List--dragging');
      _this.props.onDragFinish && _this.props.onDragFinish({
        from: _this.dragStartIndex,
        to: _this.dragEndIndex
      });

      _this.siblings.forEach(function (sibling) {
        return sibling.style.transform = null;
      });

      delete _this.dragShift;
      delete _this.listEl;
      delete _this.siblings;
      delete _this.dragStartIndex;
      delete _this.dragEndIndex;
      delete _this.dragDirection;
    });
    _this.state = {
      isRemoveActivated: false,
      removeOffset: 0,
      dragging: false
    };
    return _this;
  }

  (0, _createClass2.default)(Cell, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({
          removeOffset: this.removeButton.offsetWidth
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          before = _this$props2.before,
          indicator = _this$props2.indicator,
          asideContent = _this$props2.asideContent,
          expandable = _this$props2.expandable,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          getRootRef = _this$props2.getRootRef,
          description = _this$props2.description,
          selectable = _this$props2.selectable,
          multiline = _this$props2.multiline,
          className = _this$props2.className,
          onRemove = _this$props2.onRemove,
          removable = _this$props2.removable,
          removePlaceholder = _this$props2.removePlaceholder,
          draggable = _this$props2.draggable,
          onDragFinish = _this$props2.onDragFinish,
          href = _this$props2.href,
          size = _this$props2.size,
          bottomContent = _this$props2.bottomContent,
          platform = _this$props2.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props2, ["before", "indicator", "asideContent", "expandable", "onClick", "children", "getRootRef", "description", "selectable", "multiline", "className", "onRemove", "removable", "removePlaceholder", "draggable", "onDragFinish", "href", "size", "bottomContent", "platform"]);
      selectable = selectable && !draggable;
      var rootProps = selectable ? {} : restProps;
      var inputProps = selectable ? restProps : {};
      var linkProps = href ? restProps : {};
      var IS_PLATFORM_ANDROID = platform === _platform.ANDROID;
      var IS_PLATFORM_IOS = platform === _platform.IOS;
      return _react.default.createElement("div", (0, _extends2.default)({}, rootProps, {
        onClick: href || draggable ? null : this.onClick,
        className: (0, _classNames.default)((0, _getClassName.default)('Cell', platform), {
          'Cell--expandable': expandable,
          'Cell--multiline': multiline,
          'Cell--dragging': this.state.dragging,
          'Cell--draggable': draggable
        }, "Cell--".concat(size), className),
        ref: this.getRootRef
      }), _react.default.createElement(_Tappable.default, (0, _extends2.default)({}, linkProps, {
        onClick: href ? this.onClick : null,
        component: selectable ? 'label' : href ? 'a' : 'div',
        className: "Cell__in",
        href: href,
        disabled: !selectable && !onClick && !href || removable || draggable,
        style: removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }), selectable && _react.default.createElement("input", (0, _extends2.default)({}, inputProps, {
        type: "checkbox",
        className: "Cell__checkbox"
      })), _react.default.createElement("div", {
        className: "Cell__before"
      }, selectable && IS_PLATFORM_IOS && _react.default.createElement("div", {
        className: "Cell__checkbox-marker"
      }, _react.default.createElement(_done.default, null)), removable && IS_PLATFORM_IOS && _react.default.createElement("div", {
        className: "Cell__remove-marker",
        onClick: this.activateRemove
      }), IS_PLATFORM_ANDROID && draggable && _react.default.createElement(_Touch.default, {
        onStart: this.onDragStart,
        onMoveY: this.onDragMove,
        onEnd: this.onDragEnd,
        className: "Cell__dragger"
      }, _react.default.createElement(_reorder.default, null)), before && _react.default.createElement("div", {
        className: "Cell__before-in"
      }, before)), _react.default.createElement("div", {
        className: "Cell__main"
      }, _react.default.createElement("div", {
        className: "Cell__children"
      }, children), description && _react.default.createElement("div", {
        className: "Cell__description"
      }, description), size === 'l' && bottomContent && _react.default.createElement("div", {
        className: "Cell__bottom"
      }, bottomContent)), _react.default.createElement("div", {
        className: "Cell__indicator"
      }, indicator), _react.default.createElement("div", {
        className: "Cell__aside"
      }, asideContent, selectable && IS_PLATFORM_ANDROID && _react.default.createElement("div", {
        className: "Cell__checkbox-marker"
      }, _react.default.createElement(_done.default, null)), removable && IS_PLATFORM_ANDROID && _react.default.createElement("div", {
        className: "Cell__remove-marker",
        onClick: this.onRemoveClick
      }, _react.default.createElement(_cancel.default, null)), IS_PLATFORM_IOS && expandable && !draggable && _react.default.createElement(_chevron.default, {
        className: "Cell__chevron"
      }), IS_PLATFORM_IOS && draggable && _react.default.createElement(_Touch.default, {
        className: "Cell__dragger",
        onStart: this.onDragStart,
        onMoveY: this.onDragMove,
        onEnd: this.onDragEnd
      }, _react.default.createElement(_reorder_ios.default, null)))), removable && IS_PLATFORM_IOS && _react.default.createElement("div", {
        ref: this.getRemoveRef,
        className: "Cell__remove",
        onClick: this.onRemoveClick,
        style: removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }, _react.default.createElement("span", {
        className: "Cell__remove-in"
      }, removePlaceholder)));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
    /**
     * предотвращает двойное срабатывание в случае с input
     * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
     * предотвращает клик в случае, когда включен режим removable
     * @param e
     */

  }]);
  return Cell;
}(_react.Component);

(0, _defineProperty2.default)(Cell, "defaultProps", {
  before: null,
  indicator: '',
  asideContent: '',
  bottomContent: null,
  expandable: false,
  children: '',
  selectable: false,
  multiline: false,
  removable: false,
  size: 'm',
  removePlaceholder: 'Удалить'
});
(0, _defineProperty2.default)(Cell, "contextTypes", {
  document: _propTypes.default.any
});

var _default = (0, _withPlatform.default)(Cell);

exports.default = _default;
//# sourceMappingURL=Cell.js.map