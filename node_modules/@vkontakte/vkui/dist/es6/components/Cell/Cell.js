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
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Touch from '../Touch/Touch';
import { ANDROID, IOS } from '../../lib/platform';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import Icon24ReorderIos from '@vkontakte/icons/dist/24/reorder_ios';
import withPlatform from '../../hoc/withPlatform';

var Cell =
/*#__PURE__*/
function (_Component) {
  _inherits(Cell, _Component);

  function Cell(props) {
    var _this;

    _classCallCheck(this, Cell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cell).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "rootEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "removeButton", void 0);

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "activateRemove", function () {
      _this.setState({
        isRemoveActivated: true
      });

      _this.document.addEventListener('click', _this.deactivateRemove);
    });

    _defineProperty(_assertThisInitialized(_this), "deactivateRemove", function () {
      _this.setState({
        isRemoveActivated: false,
        removeOffset: 0
      });

      _this.document.removeEventListener('click', _this.deactivateRemove);
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveClick", function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove(e, _this.rootEl);
    });

    _defineProperty(_assertThisInitialized(_this), "getRemoveRef", function (el) {
      return _this.removeButton = el;
    });

    _defineProperty(_assertThisInitialized(_this), "getRootRef", function (element) {
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

    _defineProperty(_assertThisInitialized(_this), "dragShift", void 0);

    _defineProperty(_assertThisInitialized(_this), "listEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "siblings", void 0);

    _defineProperty(_assertThisInitialized(_this), "dragStartIndex", void 0);

    _defineProperty(_assertThisInitialized(_this), "dragEndIndex", void 0);

    _defineProperty(_assertThisInitialized(_this), "dragDirection", void 0);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function () {
      _this.setState({
        dragging: true
      });

      _this.dragShift = 0;
      _this.listEl = _this.rootEl.closest('.List');
      _this.listEl && _this.listEl.classList.add('List--dragging');
      _this.siblings = Array.prototype.slice.call(_this.rootEl.parentElement.childNodes);
      _this.dragStartIndex = _this.siblings.indexOf(_this.rootEl);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragMove", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function () {
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

  _createClass(Cell, [{
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
          restProps = _objectWithoutProperties(_this$props2, ["before", "indicator", "asideContent", "expandable", "onClick", "children", "getRootRef", "description", "selectable", "multiline", "className", "onRemove", "removable", "removePlaceholder", "draggable", "onDragFinish", "href", "size", "bottomContent", "platform"]);

      selectable = selectable && !draggable;
      var rootProps = selectable ? {} : restProps;
      var inputProps = selectable ? restProps : {};
      var linkProps = href ? restProps : {};
      var IS_PLATFORM_ANDROID = platform === ANDROID;
      var IS_PLATFORM_IOS = platform === IOS;
      return React.createElement("div", _extends({}, rootProps, {
        onClick: href || draggable ? null : this.onClick,
        className: classNames(getClassName('Cell', platform), {
          'Cell--expandable': expandable,
          'Cell--multiline': multiline,
          'Cell--dragging': this.state.dragging,
          'Cell--draggable': draggable
        }, "Cell--".concat(size), className),
        ref: this.getRootRef
      }), React.createElement(Tappable, _extends({}, linkProps, {
        onClick: href ? this.onClick : null,
        component: selectable ? 'label' : href ? 'a' : 'div',
        className: "Cell__in",
        href: href,
        disabled: !selectable && !onClick && !href || removable || draggable,
        style: removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }), selectable && React.createElement("input", _extends({}, inputProps, {
        type: "checkbox",
        className: "Cell__checkbox"
      })), React.createElement("div", {
        className: "Cell__before"
      }, selectable && IS_PLATFORM_IOS && React.createElement("div", {
        className: "Cell__checkbox-marker"
      }, React.createElement(Icon16Done, null)), removable && IS_PLATFORM_IOS && React.createElement("div", {
        className: "Cell__remove-marker",
        onClick: this.activateRemove
      }), IS_PLATFORM_ANDROID && draggable && React.createElement(Touch, {
        onStart: this.onDragStart,
        onMoveY: this.onDragMove,
        onEnd: this.onDragEnd,
        className: "Cell__dragger"
      }, React.createElement(Icon24Reorder, null)), before && React.createElement("div", {
        className: "Cell__before-in"
      }, before)), React.createElement("div", {
        className: "Cell__main"
      }, React.createElement("div", {
        className: "Cell__children"
      }, children), description && React.createElement("div", {
        className: "Cell__description"
      }, description), size === 'l' && bottomContent && React.createElement("div", {
        className: "Cell__bottom"
      }, bottomContent)), React.createElement("div", {
        className: "Cell__indicator"
      }, indicator), React.createElement("div", {
        className: "Cell__aside"
      }, asideContent, selectable && IS_PLATFORM_ANDROID && React.createElement("div", {
        className: "Cell__checkbox-marker"
      }, React.createElement(Icon16Done, null)), removable && IS_PLATFORM_ANDROID && React.createElement("div", {
        className: "Cell__remove-marker",
        onClick: this.onRemoveClick
      }, React.createElement(Icon24Cancel, null)), IS_PLATFORM_IOS && expandable && !draggable && React.createElement(Icon24Chevron, {
        className: "Cell__chevron"
      }), IS_PLATFORM_IOS && draggable && React.createElement(Touch, {
        className: "Cell__dragger",
        onStart: this.onDragStart,
        onMoveY: this.onDragMove,
        onEnd: this.onDragEnd
      }, React.createElement(Icon24ReorderIos, null)))), removable && IS_PLATFORM_IOS && React.createElement("div", {
        ref: this.getRemoveRef,
        className: "Cell__remove",
        onClick: this.onRemoveClick,
        style: removable ? {
          transform: "translateX(-".concat(this.state.removeOffset, "px)")
        } : null
      }, React.createElement("span", {
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
}(Component);

_defineProperty(Cell, "defaultProps", {
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

_defineProperty(Cell, "contextTypes", {
  document: PropTypes.any
});

export default withPlatform(Cell);
//# sourceMappingURL=Cell.js.map