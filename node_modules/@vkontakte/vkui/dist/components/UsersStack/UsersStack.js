"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var _masks = require("./masks");

(0, _masks.createMasks)();

var UsersStack = function UsersStack(props) {
  var platform = (0, _usePlatform.default)();
  var className = props.className,
      photos = props.photos,
      count = props.count,
      size = props.size,
      vertical = props.vertical,
      children = props.children,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className", "photos", "count", "size", "vertical", "children"]);
  var othersCount = Math.max(0, photos.length - count);
  var canShowOthers = othersCount > 0 && size === 'm';
  var photosShown = photos.slice(0, count);
  return _react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('UsersStack', platform), className, 'UsersStack--size-' + size, {
      'UsersStack--with-others': canShowOthers,
      'UsersStack--v': vertical
    })
  }), _react.default.createElement("div", {
    className: "UsersStack__photos"
  }, photosShown.map(function (photo, i) {
    return _react.default.createElement("div", {
      key: i,
      className: "UsersStack__photo",
      style: {
        backgroundImage: "url(".concat(photo, ")")
      }
    });
  }), canShowOthers && _react.default.createElement("div", {
    className: "UsersStack__photo UsersStack__photo--others"
  }, "+".concat(othersCount))), children && _react.default.createElement("div", {
    className: "UsersStack__text"
  }, children));
};

UsersStack.defaultProps = {
  photos: [],
  size: 's',
  count: 3
};

var _default = _react.default.memo(UsersStack);

exports.default = _default;
//# sourceMappingURL=UsersStack.js.map