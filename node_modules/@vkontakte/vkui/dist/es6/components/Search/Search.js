import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { IS_PLATFORM_IOS } from '../../lib/platform';
import SearchIOS from '../SearchIOS/SearchIOS';
import SearchAndroid from '../SearchAndroid/SearchAndroid';
import PropTypes from 'prop-types';

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          autoFocus = _this$props.autoFocus,
          iosProps = _objectWithoutProperties(_this$props, ["onClose", "autoFocus"]);

      var _this$props2 = this.props,
          after = _this$props2.after,
          before = _this$props2.before,
          androidProps = _objectWithoutProperties(_this$props2, ["after", "before"]);

      if (IS_PLATFORM_IOS) {
        return React.createElement(SearchIOS, iosProps);
      } else {
        return React.createElement(SearchAndroid, androidProps);
      }
    }
  }]);

  return Search;
}(React.Component);

_defineProperty(Search, "propTypes", {
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })]),

  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after: PropTypes.node,

  /**
   * iOS only
   */
  before: PropTypes.node,
  theme: PropTypes.oneOf(['header', 'default']),

  /**
   * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
   */
  onClose: PropTypes.func,

  /**
   * Android only. Определяет, будет ли установлен фокус в поле поиска.
   */
  autoFocus: PropTypes.bool,

  /**
   * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
   * Объект события передается вторым аргументом.
   */
  onChange: PropTypes.func,
  autoComplete: PropTypes.string
});

_defineProperty(Search, "defaultProps", {
  theme: 'default',
  autoComplete: 'off'
});

export { Search as default };
//# sourceMappingURL=Search.js.map