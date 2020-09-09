import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Spinner from '../Spinner/Spinner';
var PanelSpinner = React.memo(function (_ref) {
  var height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ["height"]);

  return React.createElement(Spinner, _extends({
    size: "small"
  }, restProps, {
    style: {
      height: height
    }
  }));
});
PanelSpinner.defaultProps = {
  height: 96
};
export default PanelSpinner;
//# sourceMappingURL=PanelSpinner.js.map