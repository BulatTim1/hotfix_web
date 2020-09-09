import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';

function calcStrokeDashOffset(value, radius) {
  var progress = value / 100;
  return 2 * Math.PI * radius * (1 - progress);
}

var PullToRefreshSpinner = React.memo(function (_ref) {
  var on = _ref.on,
      progress = _ref.progress,
      size = _ref.size,
      strokeWidth = _ref.strokeWidth,
      style = _ref.style;
  var radius = 0.5 * size - 0.5 * strokeWidth;
  var dasharray = 2 * Math.PI * radius;
  var circleCenter = 0.5 * size;
  var dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);
  return React.createElement("div", {
    className: classNames('PullToRefresh__spinner', {
      'PullToRefresh__spinner--on': on
    }),
    style: style
  }, React.createElement("svg", {
    className: "PullToRefresh__spinner-self",
    style: {
      width: size,
      height: size
    },
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    style: {
      width: size,
      height: size,
      transformOrigin: "".concat(circleCenter, "px ").concat(circleCenter, "px")
    }
  }, React.createElement("circle", {
    className: "PullToRefresh__spinner-path",
    fill: "none",
    strokeDasharray: dasharray,
    strokeDashoffset: dashoffset,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    cx: circleCenter,
    cy: circleCenter,
    r: radius
  }))));
});
PullToRefreshSpinner.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  on: PropTypes.bool,
  progress: PropTypes.number,
  style: PropTypes.object
};
PullToRefreshSpinner.defaultProps = {
  size: 24,
  strokeWidth: 2.5,
  on: true,
  progress: null
};
export default PullToRefreshSpinner;
//# sourceMappingURL=PullToRefreshSpinner.js.map