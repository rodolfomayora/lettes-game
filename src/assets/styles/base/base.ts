import { css } from 'styled-components';

import { colors } from '../config';

export default css`
  html * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: ${colors.transparent};
  }

  html,
  body {
    min-width: 320px;
    min-height: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    background-color: ${colors.white};
  }
`;