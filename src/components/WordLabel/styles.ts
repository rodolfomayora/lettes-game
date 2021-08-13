import styled, { css } from "styled-components";

import { colors, mixins } from '../../assets/styles/config';

export const WordLabelStyled = styled.div`
  display: flex;
  align-items: center;

  width: 272px;
  height: 62px;
  padding: 0 24px;
  border: solid 2px ${colors.gray2};
  overflow-x: auto;

  font-size: 23px;
  font-weight: 700;
  letter-spacing: 6px;
  color: ${colors.green3};

  ::-webkit-scrollbar { height: 6px; }
  ::-webkit-scrollbar-track { background-color: ${colors.gray1}; }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.green2};
    border-radius: 3px;
  }

  ${mixins.large(css`
    height: 86px;
    width: 400px;
    font-size: 34px;
  `)}
`;