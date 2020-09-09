import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';
var baseClassName = getClassName('InnerScroll');

var InnerScroll =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerScroll, _React$Component);

  function InnerScroll() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InnerScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InnerScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      if (_this.el.scrollTop <= 0) {
        _this.el.scrollTop = 1;
      } else if (_this.el.scrollTop >= _this.el.scrollHeight - _this.el.offsetHeight) {
        _this.el.scrollTop = _this.el.scrollHeight - _this.el.offsetHeight - 1;
      }

      _this.props.onScroll && _this.props.onScroll(e);
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (el) {
      return _this.el = el;
    });

    return _this;
  }

  _createClass(InnerScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.el.scrollTop = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          onScroll = _this$props.onScroll,
          restProps = _objectWithoutProperties(_this$props, ["className", "children", "onScroll"]);

      return React.createElement("div", _extends({}, restProps, {
        className: classNames(baseClassName, className),
        onScroll: this.onScroll,
        ref: this.getRef
      }), children);
    }
  }]);

  return InnerScroll;
}(React.Component);

_defineProperty(InnerScroll, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  onScroll: PropTypes.func
});

export { InnerScroll as default };
//# sourceMappingURL=InnerScroll.js.map