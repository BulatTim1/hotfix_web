import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import removeObjectKeys from '../../lib/removeObjectKeys';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import ActionSheet from '../ActionSheet/ActionSheet';
import ActionSheetItem from '../ActionSheetItem/ActionSheetItem';

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
  _inherits(NativePopouts, _React$Component);

  function NativePopouts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NativePopouts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NativePopouts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      popout: null
    });

    _defineProperty(_assertThisInitialized(_this), "actions", []);

    _defineProperty(_assertThisInitialized(_this), "actionsStore", {});

    _defineProperty(_assertThisInitialized(_this), "vkuiListener", function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);

          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    });

    return _this;
  }

  _createClass(NativePopouts, [{
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
          return removeObjectKeys(item, ['action']);
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
        popout: React.createElement(Alert, {
          actions: this.actions.map(function (item) {
            return removeObjectKeys(item, ['params']);
          }),
          onClose: onClose,
          actionsLayout: actionsLayout
        }, title && React.createElement("h2", null, title), text && React.createElement("p", null, text))
      });
    }
  }, {
    key: "renderNativeSheet",
    value: function renderNativeSheet(popout) {
      var style = popout.style;
      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return removeObjectKeys(item, ['action']);
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
        popout: React.createElement(ActionSheet, {
          title: title,
          text: text,
          onClose: onClose
        }, this.actions.map(function (item, index) {
          return React.createElement(ActionSheetItem, {
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
      return React.createElement(Component, _extends({}, removeObjectKeys(this.props, ['popout']), {
        popout: this.state.popout
      }));
    }
  }]);

  return NativePopouts;
}(React.Component);

_defineProperty(NativePopouts, "propTypes", {
  popout: PropTypes.oneOfType([PropTypes.shape({
    style: PropTypes.oneOf(['alert', 'actionSheet']).isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      style: PropTypes.oneOf(['cancel', 'default', 'destructive']),
      title: PropTypes.string,
      action: PropTypes.func
    }))
  }), PropTypes.element]),
  vkuiConnect: PropTypes.object.isRequired,

  /**
   * Root or View
   */
  component: PropTypes.func.isRequired
});

_defineProperty(NativePopouts, "contextTypes", {
  isWebView: PropTypes.bool
});

export { NativePopouts as default };
//# sourceMappingURL=NativePopouts.js.map