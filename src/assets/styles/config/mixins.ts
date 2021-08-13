import { css, CSSProp } from 'styled-components';

import breakpoints from './breakpoints';

type ResponsiveMixin = (styles: CSSProp) => CSSProp;

export const large: ResponsiveMixin = (styles) => {
  return css`
    @media screen and (min-width: ${breakpoints.large}) {
      ${styles}
    }
  `;
}