import styled, { css } from "styled-components";

import { mixins } from '../../assets/styles/config';

export const BoardGameStyled = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 3;

  ${mixins.large(css`
    grid-template-columns: 2;
    grid-template-rows: 2;
    grid-column-gap: 38px;
  `)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 94px;

  ${mixins.large(css`
    grid-area: 1 / 2 / 1 span / 1 span;
    align-self: self-start;
    margin-bottom: 0;
  `)}
`;

export const BoardWrapper = styled.div`
  ${mixins.large(css`
    grid-area: 1 / 1 / 2 span / 1 span;
  `)}
`;

export const LabelWrapper = styled.div`
  margin-top: 78px;

  ${mixins.large(css`
    grid-area: 2 / 2 / 1 span / 1 span;
    align-self: self-end;
    margin-top: 0;
  `)}
`;