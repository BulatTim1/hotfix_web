"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _platform = require("../../lib/platform");

var _SearchIOS = _interopRequireDefault(require("../SearchIOS/SearchIOS"));

var _SearchAndroid = _interopRequireDefault(require("../SearchAndroid/SearchAndroid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Search =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck2.default)(this, Search);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Search).apply(this, arguments));
  }

  (0, _createClass2.default)(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          autoFocus = _this$props.autoFocus,
          iosProps = (0, _objectWithoutProperties2.default)(_this$props, ["onClose", "autoFocus"]);
      var _this$props2 = this.props,
          after = _this$props2.after,
          before = _this$props2.before,
          androidProps = (0, _objectWithoutProperties2.default)(_this$props2, ["after", "before"]);

      if (_platform.IS_PLATFORM_IOS) {
        return _react.default.createElement(_SearchIOS.default, iosProps);
      } else {
        return _react.default.createElement(_SearchAndroid.default, androidProps);
      }
    }
  }]);
  return Search;
}(_react.default.Component);

exports.default = Search;
(0, _defineProperty2.default)(Search, "propTypes", {
  className: _propTypes.default.string,
  getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]),

  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after: _propTypes.default.node,

  /**
   * iOS only
   */
  before: _propTypes.default.node,
  theme: _propTypes.default.oneOf(['header', 'default']),

  /**
   * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
   */
  onClose: _propTypes.default.func,

  /**
   * Android only. Определяет, будет ли установлен фокус в поле поиска.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
   * Объект события передается вторым аргументом.
   */
  onChange: _propTypes.default.func,
  autoComplete: _propTypes.default.string
});
(0, _defineProperty2.default)(Search, "defaultProps", {
  theme: 'default',
  autoComplete: 'off'
});
//# sourceMappingURL=Search.js.map