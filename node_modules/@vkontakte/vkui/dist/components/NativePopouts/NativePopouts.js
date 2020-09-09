"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _removeObjectKeys = _interopRequireDefault(require("../../lib/removeObjectKeys"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Alert = _interopRequireDefault(require("../Alert/Alert"));

var _ActionSheet = _interopRequireDefault(require("../ActionSheet/ActionSheet"));

var _ActionSheetItem = _interopRequireDefault(require("../ActionSheetItem/ActionSheetItem"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function brToNl() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var regex = /<br\s*\/?>/gi;
  return str.replace(regex, '\n');
}

var actionId = 1;
/**
 * @deprecated будет удален в 3.0.0
 */

var NativePopouts =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NativePopouts, _React$Component);

  function NativePopouts() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, NativePopouts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NativePopouts)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      popout: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "actions", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "actionsStore", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "vkuiListener", function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);

          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(NativePopouts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.vkuiConnect.subscribe(this.vkuiListener);

      if (this.props.popout) {
        this.renderPopout(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.vkuiConnect.unsubscribe(this.vkuiListener);
    }
  }, {
    key: "renderNativeAlert",
    value: function renderNativeAlert(popout) {
      var style = popout.style,
          title = popout.title,
          message = popout.text;
      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        title: brToNl(title),
        message: brToNl(message),
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys.default)(item, ['action']);
        })
      });
    }
  }, {
    key: "renderUIAlert",
    value: function renderUIAlert(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose,
          actionsLayout = popout.actionsLayout;
      this.setState({
        popout: _react.default.createElement(_Alert.default, {
          actions: this.actions.map(function (item) {
            return (0, _removeObjectKeys.default)(item, ['params']);
          }),
          onClose: onClose,
          actionsLayout: actionsLayout
        }, title && _react.default.createElement("h2", null, title), text && _react.default.createElement("p", null, text))
      });
    }
  }, {
    key: "renderNativeSheet",
    value: function renderNativeSheet(popout) {
      var style = popout.style;
      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys.default)(item, ['action']);
        })
      });
    }
  }, {
    key: "renderUISheet",
    value: function renderUISheet(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;
      this.setState({
        popout: _react.default.createElement(_ActionSheet.default, {
          title: title,
          text: text,
          onClose: onClose
        }, this.actions.map(function (item, index) {
          return _react.default.createElement(_ActionSheetItem.default, {
            autoclose: item.autoclose,
            theme: item.style,
            onClick: item.action,
            key: "".concat(index)
          }, item.title);
        }))
      });
    }
  }, {
    key: "closeUIPopout",
    value: function closeUIPopout() {
      this.setState({
        popout: null
      });
    }
  }, {
    key: "renderPopout",
    value: function renderPopout(props) {
      if (props.popout.style) {
        this.actions = props.popout.actions.map(function (item) {
          return _objectSpread({}, item, {
            autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
            action: item.action || props.popout.onClose,
            handler: _objectSpread({}, item.params, {
              action: "action-".concat(actionId++)
            })
          });
        });
        this.actionsStore = this.actions.reduce(function (res, item) {
          res[item.handler.action] = item.action;
          return res;
        }, {});

        switch (props.popout.style) {
          case 'alert':
            this.context.isWebView ? this.renderNativeAlert(props.popout) : this.renderUIAlert(props.popout);
            break;

          case 'actionSheet':
            this.context.isWebView ? this.renderNativeSheet(props.popout) : this.renderUISheet(props.popout);
            break;
        }
      } else {
        this.setState({
          popout: props.popout
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.popout && this.props.popout) {
        this.closeUIPopout();
      }

      if (nextProps.popout && nextProps.popout !== this.props.popout) {
        this.context.isWebView && this.closeUIPopout();
        this.renderPopout(nextProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.props.component;
      return _react.default.createElement(Component, (0, _extends2.default)({}, (0, _removeObjectKeys.default)(this.props, ['popout']), {
        popout: this.state.popout
      }));
    }
  }]);
  return NativePopouts;
}(_react.default.Component);

exports.default = NativePopouts;
(0, _defineProperty2.default)(NativePopouts, "propTypes", {
  popout: _propTypes.default.oneOfType([_propTypes.default.shape({
    style: _propTypes.default.oneOf(['alert', 'actionSheet']).isRequired,
    title: _propTypes.default.string,
    text: _propTypes.default.string,
    onClose: _propTypes.default.func.isRequired,
    actions: _propTypes.default.arrayOf(_propTypes.default.shape({
      style: _propTypes.default.oneOf(['cancel', 'default', 'destructive']),
      title: _propTypes.default.string,
      action: _propTypes.default.func
    }))
  }), _propTypes.default.element]),
  vkuiConnect: _propTypes.default.object.isRequired,

  /**
   * Root or View
   */
  component: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(NativePopouts, "contextTypes", {
  isWebView: _propTypes.default.bool
});
//# sourceMappingURL=NativePopouts.js.map