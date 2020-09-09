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
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';

var Textarea =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Textarea, _PureComponent);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isControlledOutside", void 0);

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "getRef", function (element) {
      _this.element = element;
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;
        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);
        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({
            height: scrollHeight - diff
          });
        }

        _this.setState({
          height: 0
        }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({
            height: height
          });

          _this.props.onResize(el);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        window.requestAnimationFrame(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          onChange = _this$props.onChange,
          grow = _this$props.grow,
          style = _this$props.style,
          onResize = _this$props.onResize,
          className = _this$props.className,
          getRootRef = _this$props.getRootRef,
          getRef = _this$props.getRef,
          status = _this$props.status,
          restProps = _objectWithoutProperties(_this$props, ["defaultValue", "value", "onChange", "grow", "style", "onResize", "className", "getRootRef", "getRef", "status"]);

      var height = this.state.height || style.height || 66;
      return React.createElement(FormField, {
        className: classNames('Textarea', className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, React.createElement("textarea", _extends({}, restProps, {
        className: "Textarea__el",
        value: this.value,
        onChange: this.onChange,
        ref: this.getRef,
        style: {
          height: height
        }
      })));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(PureComponent);

_defineProperty(Textarea, "defaultProps", {
  style: {},
  defaultValue: '',
  grow: true,
  onResize: function onResize() {}
});

export { Textarea as default };
//# sourceMappingURL=Textarea.js.map