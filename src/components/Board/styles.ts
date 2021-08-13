import styled, { css } from 'styled-components';
import { mixins } from '../../assets/styles/config';

export const BoardStyled = styled.div`
  & > * + * {
    margin-top: 8px;
    
    ${mixins.large(css`
      margin-top: 18px;
    `)}
  }
`;

export const BoardRow = styled.div`
  & > * + * {
    margin-left: 8px;

    ${mixins.large(css`
      margin-left: 18px;
    `)}  
  }
`;