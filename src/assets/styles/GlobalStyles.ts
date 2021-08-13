import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import base from './base/base';

export default createGlobalStyle`
  /** Vendors */
  ${normalize}

  /** Base */
  ${base}
`;