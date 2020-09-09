"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var baseClassNames = (0, _getClassName.default)('Entity'); // @TODO Try to load photo

/**
 * @deprecated Используйте `Cell`. Этот компонент устарел и будет удален в 3.0.0
 */

var Entity =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Entity, _Component);

  function Entity() {
    (0, _classCallCheck2.default)(this, Entity);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Entity).apply(this, arguments));
  }

  (0, _createClass2.default)(Entity, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          photo = _this$props.photo,
          title = _this$props.title,
          description = _this$props.description,
          avatarProps = _this$props.avatarProps,
          children = _this$props.children;
      return _react.default.createElement("div", {
        className: (0, _classNames.default)(baseClassNames, className),
        style: style
      }, _react.default.createElement("div", {
        className: "Entity__aside"
      }, _react.default.createElement(_Avatar.default, (0, _extends2.default)({
        src: photo,
        alt: title,
        size: this.avatarSize
      }, avatarProps))), _react.default.createElement("div", {
        className: "Entity__main"
      }, title && _react.default.createElement("div", {
        className: "Entity__title"
      }, title), description && _react.default.createElement("div", {
        className: "Entity__description"
      }, description), children && _react.default.createElement("div", {
        className: "Entity__content"
      }, children)));
    }
  }, {
    key: "avatarSize",
    get: function get() {
      switch (this.props.size) {
        case 'm':
          return 64;

        case 's':
          return 48;

        default:
          return this.props.size;
      }
    }
  }]);
  return Entity;
}(_react.Component);

exports.default = Entity;
(0, _defineProperty2.default)(Entity, "propTypes", {
  style: _propTypes.default.object,

  /**
   * @deprecated Используйте `avatarProps.size`
   */
  size: _propTypes.default.oneOf(['m', 's', 80, 72, 64, 56, 48, 40, 36, 32, 28]),
  photo: _propTypes.default.string,
  title: _propTypes.default.node,
  description: _propTypes.default.node,
  className: _propTypes.default.string,
  avatarProps: _propTypes.default.shape(_Avatar.default.propTypes),
  children: _propTypes.default.node
});
(0, _defineProperty2.default)(Entity, "defaultProps", {
  size: 48,
  photo: '',
  title: '',
  description: ''
});
//# sourceMappingURL=Entity.js.map