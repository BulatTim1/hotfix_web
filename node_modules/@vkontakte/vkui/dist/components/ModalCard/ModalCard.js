"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _HeaderButton = _interopRequireDefault(require("../HeaderButton/HeaderButton"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _dismiss = _interopRequireDefault(require("@vkontakte/icons/dist/24/dismiss"));

var _platform = require("../../lib/platform");

var _utils = require("../../lib/utils");

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var ModalCard =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ModalCard, _Component);

  function ModalCard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ModalCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ModalCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onButtonClick", function (event) {
      var target = event.currentTarget;
      var action = _this.props.actions[target.dataset.index].action;
      event.persist();

      if (typeof action === 'function') {
        action(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ModalCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          insets = _this$props.insets,
          icon = _this$props.icon,
          title = _this$props.title,
          caption = _this$props.caption,
          children = _this$props.children,
          actions = _this$props.actions,
          actionsLayout = _this$props.actionsLayout,
          onClose = _this$props.onClose,
          platform = _this$props.platform;
      return _react.default.createElement("div", {
        className: (0, _classNames.default)((0, _getClassName.default)('ModalCard', platform))
      }, _react.default.createElement("div", {
        className: "ModalCard__in"
      }, _react.default.createElement("div", {
        className: "ModalCard__container",
        style: (0, _utils.isNumeric)(insets.bottom) ? {
          marginBottom: insets.bottom
        } : null
      }, icon && _react.default.createElement("div", {
        className: "ModalCard__icon"
      }, icon), title && _react.default.createElement("div", {
        className: "ModalCard__title"
      }, title), caption && _react.default.createElement("div", {
        className: "ModalCard__caption"
      }, caption), children, actions.length > 0 && _react.default.createElement("div", {
        className: (0, _classNames.default)('ModalCard__actions', {
          'ModalCard__actions--v': actionsLayout === 'vertical'
        })
      }, actions.map(function (_ref, i) {
        var title = _ref.title,
            type = _ref.type;
        return _react.default.createElement(_Button.default, {
          key: i,
          "data-index": i,
          size: "xl",
          level: type,
          onClick: _this2.onButtonClick
        }, title);
      })), platform === _platform.IOS && _react.default.createElement(_HeaderButton.default, {
        className: "ModalCard__dismiss",
        onClick: onClose
      }, _react.default.createElement(_dismiss.default, null)))));
    }
  }]);
  return ModalCard;
}(_react.Component);

(0, _defineProperty2.default)(ModalCard, "defaultProps", {
  actions: [],
  actionsLayout: 'horizontal',
  insets: {}
});

var _default = (0, _withPlatform.default)((0, _withInsets.default)(ModalCard));

exports.default = _default;
//# sourceMappingURL=ModalCard.js.map