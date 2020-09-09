import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';
var baseClassNames = getClassName('Header');

function mapOldLevel(level) {
  switch (level) {
    case '1':
      return 'primary';

    case '2':
      return 'secondary';

    default:
      return level;
  }
}

var Header = function Header(_ref) {
  var className = _ref.className,
      level = _ref.level,
      children = _ref.children,
      indicator = _ref.indicator,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "level", "children", "indicator", "aside", "getRootRef"]);

  return React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassNames, className, _defineProperty({}, "Header--level-".concat(mapOldLevel(level)), true))
  }), React.createElement("div", {
    className: "Header__in"
  }, React.createElement("div", {
    className: "Header__content"
  }, children), indicator && React.createElement("div", {
    className: "Header__indicator"
  }, indicator), aside && React.createElement("div", {
    className: "Header__aside"
  }, aside)));
};

Header.mapOldLevel = mapOldLevel;
Header.propTypes = {
  className: PropTypes.string,

  /**
   * Значения `1` и `2` устарели. Вместо них используйте `primary` и `secondary`. Маппинг на новые значения находится в
   * статическом методе `Header.mapOldLevel(level)`. Старые значения будут удалены в 3.0.0
   */
  level: PropTypes.oneOf(['1', '2', 'primary', 'secondary']),
  indicator: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  getRootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any
  })])
};
Header.defaultProps = {
  level: 'primary'
};
export default Header;
//# sourceMappingURL=Header.js.map