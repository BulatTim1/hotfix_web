import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Touch, { TouchRootContext } from '../Touch/Touch';
import FixedLayout from '../FixedLayout/FixedLayout';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '../../lib/platform';
import getClassName from '../../helpers/getClassName';
import PullToRefreshSpinner from './PullToRefreshSpinner';
var baseClassName = getClassName('PullToRefresh');

function cancelEvent(event) {
  if (!event) return false;

  while (event.originalEvent) {
    event = event.originalEvent;
  }

  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();
  return false;
}

var PullToRefresh =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PullToRefresh, _PureComponent);

  function PullToRefresh(props) {
    var _this;

    _classCallCheck(this, PullToRefresh);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PullToRefresh).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      if (_this.state.refreshing) cancelEvent(e);

      _this.setState({
        touchDown: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowTouchMove", function (e) {
      if (_this.state.refreshing) cancelEvent(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      var isY = e.isY,
          shiftY = e.shiftY;
      var _this$params = _this.params,
          start = _this$params.start,
          max = _this$params.max;
      var pageYOffset = _this.window.pageYOffset;
      var _this$state = _this.state,
          refreshing = _this$state.refreshing,
          watching = _this$state.watching,
          touchDown = _this$state.touchDown;

      if (watching && touchDown) {
        cancelEvent(e);
        var positionMultiplier = _this.params.positionMultiplier;
        var shift = Math.max(0, shiftY - _this.state.touchY);
        var currentY = Math.max(start, Math.min(_this.params.maxY, start + shift * positionMultiplier));
        var progress = currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0;

        _this.setState({
          spinnerY: currentY,
          spinnerProgress: Math.min(80, Math.max(0, progress)),
          canRefresh: progress > 80,
          contentShift: (currentY + 10) * 2.3
        });

        if (progress > 85 && !refreshing && IS_PLATFORM_IOS) {
          _this.runRefreshing();
        }
      } else if (isY && pageYOffset === 0 && shiftY > 0 && !refreshing && touchDown) {
        cancelEvent(e);

        _this.setState({
          watching: true,
          touchY: shiftY,
          spinnerY: start,
          spinnerProgress: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      var _this$state2 = _this.state,
          refreshing = _this$state2.refreshing,
          canRefresh = _this$state2.canRefresh,
          refreshingFinished = _this$state2.refreshingFinished;

      _this.setState({
        watching: false,
        touchDown: false
      }, function () {
        if (canRefresh && !refreshing) {
          _this.runRefreshing();
        } else if (refreshing && refreshingFinished) {
          _this.resetRefreshingState();
        } else {
          _this.setState({
            spinnerY: refreshing ? _this.params.refreshing : _this.params.start,
            spinnerProgress: 0,
            contentShift: 0
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRefreshingFinish", function () {
      _this.setState({
        refreshingFinished: true
      }, function () {
        !_this.state.touchDown && _this.resetRefreshingState();
      });
    });

    _this.params = {
      start: IS_PLATFORM_ANDROID ? -45 : -10,
      max: IS_PLATFORM_ANDROID ? 80 : 50,
      maxY: IS_PLATFORM_ANDROID ? 80 : 400,
      refreshing: IS_PLATFORM_ANDROID ? 50 : 36,
      positionMultiplier: IS_PLATFORM_ANDROID ? 1 : 0.21
    };
    _this.state = {
      watching: false,
      refreshing: false,
      canRefresh: false,
      touchDown: false,
      refreshingFinished: false,
      touchY: 0,
      spinnerY: _this.params.start,
      spinnerProgress: 0,
      contentShift: 0
    };
    _this.contentRef = React.createRef();
    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.document.addEventListener('touchmove', this.onWindowTouchMove, {
        cancelable: true,
        passive: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener('touchmove', this.onWindowTouchMove);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isFetching && !this.props.isFetching) {
        this.onRefreshingFinish();
      }
    }
  }, {
    key: "runRefreshing",
    value: function runRefreshing() {
      if (!this.state.refreshing && this.props.onRefresh) {
        this.setState({
          refreshing: true,
          spinnerY: IS_PLATFORM_ANDROID ? this.params.refreshing : this.state.spinnerY
        });
        this.props.onRefresh();
      }
    }
  }, {
    key: "resetRefreshingState",
    value: function resetRefreshingState() {
      this.setState({
        watching: false,
        canRefresh: false,
        refreshing: false,
        refreshingFinished: false,
        spinnerY: this.params.start,
        spinnerProgress: 0,
        contentShift: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onRefresh = _this$props.onRefresh,
          isFetching = _this$props.isFetching,
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "onRefresh", "isFetching"]);

      var _this$state3 = this.state,
          watching = _this$state3.watching,
          refreshing = _this$state3.refreshing,
          spinnerY = _this$state3.spinnerY,
          spinnerProgress = _this$state3.spinnerProgress,
          canRefresh = _this$state3.canRefresh,
          touchDown = _this$state3.touchDown,
          contentShift = _this$state3.contentShift;
      var spinnerTransform = "translate3d(0, ".concat(spinnerY, "px, 0)");
      var contentTransform = refreshing && !touchDown && IS_PLATFORM_IOS ? "translate3d(0, 100px, 0)" : IS_PLATFORM_IOS && contentShift ? "translate3d(0, ".concat(contentShift, "px, 0)") : '';
      return React.createElement(TouchRootContext.Provider, {
        value: true
      }, React.createElement(Touch, _extends({}, restProps, {
        onStart: this.onTouchStart,
        onMove: this.onTouchMove,
        onEnd: this.onTouchEnd,
        className: classNames(baseClassName, className, {
          'PullToRefresh--watching': watching,
          'PullToRefresh--refreshing': refreshing
        })
      }), React.createElement(FixedLayout, {
        className: "PullToRefresh__controls"
      }, React.createElement(PullToRefreshSpinner, {
        style: {
          transform: spinnerTransform,
          WebkitTransform: spinnerTransform,
          opacity: watching || refreshing || canRefresh ? 1 : 0
        },
        on: refreshing,
        progress: refreshing ? null : spinnerProgress
      })), React.createElement("div", {
        className: "PullToRefresh__content",
        ref: this.contentRef,
        style: {
          transform: contentTransform,
          WebkitTransform: contentTransform
        }
      }, children)));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "scrollTop",
    get: function get() {
      return this.document.scrollingElement.scrollTop;
    }
  }]);

  return PullToRefresh;
}(PureComponent);

_defineProperty(PullToRefresh, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Будет вызвана для обновления контента
   */
  onRefresh: PropTypes.func.isRequired,

  /**
   * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
   */
  isFetching: PropTypes.bool
});

_defineProperty(PullToRefresh, "contextTypes", {
  window: PropTypes.any,
  document: PropTypes.any
});

export { PullToRefresh as default };
//# sourceMappingURL=PullToRefresh.js.map