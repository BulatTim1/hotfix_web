import { useContext } from 'react';
import { platform } from '../lib/platform';
import { SSRContext } from '../lib/SSR';
export default function usePlatform() {
  var ssrContext = useContext(SSRContext);
  return ssrContext.platform || platform();
}
//# sourceMappingURL=usePlatform.js.map