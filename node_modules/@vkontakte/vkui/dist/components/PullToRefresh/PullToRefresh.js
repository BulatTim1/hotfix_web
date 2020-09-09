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

var _Touch = _interopRequireWildcard(require("../Touch/Touch"));

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _PullToRefreshSpinner = _interopRequireDefault(require("./PullToRefreshSpinner"));

var baseClassName = (0, _getClassName.default)('PullToRefresh');

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
  (0, _inherits2.default)(PullToRefresh, _PureComponent);

  function PullToRefresh(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PullToRefresh);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PullToRefresh).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchStart", function (e) {
      if (_this.state.refreshing) cancelEvent(e);

      _this.setState({
        touchDown: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onWindowTouchMove", function (e) {
      if (_this.state.refreshing) cancelEvent(e);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchMove", function (e) {
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

        if (progress > 85 && !refreshing && _platform.IS_PLATFORM_IOS) {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchEnd", function () {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRefreshingFinish", function () {
      _this.setState({
        refreshingFinished: true
      }, function () {
        !_this.state.touchDown && _this.resetRefreshingState();
      });
    });
    _this.params = {
      start: _platform.IS_PLATFORM_ANDROID ? -45 : -10,
      max: _platform.IS_PLATFORM_ANDROID ? 80 : 50,
      maxY: _platform.IS_PLATFORM_ANDROID ? 80 : 400,
      refreshing: _platform.IS_PLATFORM_ANDROID ? 50 : 36,
      positionMultiplier: _platform.IS_PLATFORM_ANDROID ? 1 : 0.21
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
    _this.contentRef = _react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(PullToRefresh, [{
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
          spinnerY: _platform.IS_PLATFORM_ANDROID ? this.params.refreshing : this.state.spinnerY
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
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "onRefresh", "isFetching"]);
      var _this$state3 = this.state,
          watching = _this$state3.watching,
          refreshing = _this$state3.refreshing,
          spinnerY = _this$state3.spinnerY,
          spinnerProgress = _this$state3.spinnerProgress,
          canRefresh = _this$state3.canRefresh,
          touchDown = _this$state3.touchDown,
          contentShift = _this$state3.contentShift;
      var spinnerTransform = "translate3d(0, ".concat(spinnerY, "px, 0)");
      var contentTransform = refreshing && !touchDown && _platform.IS_PLATFORM_IOS ? "translate3d(0, 100px, 0)" : _platform.IS_PLATFORM_IOS && contentShift ? "translate3d(0, ".concat(contentShift, "px, 0)") : '';
      return _react.default.createElement(_Touch.TouchRootContext.Provider, {
        value: true
      }, _react.default.createElement(_Touch.default, (0, _extends2.default)({}, restProps, {
        onStart: this.onTouchStart,
        onMove: this.onTouchMove,
        onEnd: this.onTouchEnd,
        className: (0, _classNames.default)(baseClassName, className, {
          'PullToRefresh--watching': watching,
          'PullToRefresh--refreshing': refreshing
        })
      }), _react.default.createElement(_FixedLayout.default, {
        className: "PullToRefresh__controls"
      }, _react.default.createElement(_PullToRefreshSpinner.default, {
        style: {
          transform: spinnerTransform,
          WebkitTransform: spinnerTransform,
          opacity: watching || refreshing || canRefresh ? 1 : 0
        },
        on: refreshing,
        progress: refreshing ? null : spinnerProgress
      })), _react.default.createElement("div", {
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
}(_react.PureComponent);

exports.default = PullToRefresh;
(0, _defineProperty2.default)(PullToRefresh, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Будет вызвана для обновления контента
   */
  onRefresh: _propTypes.default.func.isRequired,

  /**
   * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
   */
  isFetching: _propTypes.default.bool
});
(0, _defineProperty2.default)(PullToRefresh, "contextTypes", {
  window: _propTypes.default.any,
  document: _propTypes.default.any
});
//# sourceMappingURL=PullToRefresh.js.map