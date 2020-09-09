import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { SSRContext } from '../lib/SSR';
import { platform } from '../lib/platform';
export default function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = React.useContext(SSRContext); // @ts-ignore

    return React.createElement(Component, _extends({}, props, {
      platform: ssrContext.platform || platform()
    }));
  }

  return WithPlatform;
}
//# sourceMappingURL=withPlatform.js.map