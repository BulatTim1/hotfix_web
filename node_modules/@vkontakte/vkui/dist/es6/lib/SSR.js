import React from 'react';
import { platform } from './platform';
export var SSRContext = React.createContext({
  platform: null
});
export var SSRWrapper = function SSRWrapper(_ref) {
  var userAgent = _ref.userAgent,
      children = _ref.children;
  return React.createElement(SSRContext.Provider, {
    value: {
      platform: platform(userAgent)
    }
  }, children);
};
//# sourceMappingURL=SSR.js.map