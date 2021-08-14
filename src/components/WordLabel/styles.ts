import styled, { css } from "styled-components";

import { colors, mixins } from '../../assets/styles/config';
import { StyledProps } from './types';

export const WordLabelStyled = styled.div`
  display: flex;

  width: 272px;
  height: 62px;
  border: solid 2px ${colors.gray2};

  ${mixins.large(css`
    height: 86px;
    width: 400px;
  `)}
`;

export const FormedWord = styled.span<StyledProps>`
  flex-grow: 1;
  display: flex;
  align-items: center;

  padding: 0 24px;
  overflow-x: auto;

  font-size: 23px;
  font-weight: 700;
  letter-spacing: 6px;
  color: ${colors.red3};

  background-color: ${colors.white};

  ::-webkit-scrollbar { height: 6px; }
  ::-webkit-scrollbar-track {
    background-color: ${colors.gray1};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.red2};
    border-radius: 3px;
  }

  ${({ isValidWord }) => isValidWord && css`
    color: ${colors.green3};
  `}

  ${mixins.large(css`
    font-size: 34px;
  `)}
`;

export const ValidationLabel = styled.span<StyledProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${colors.red4};
  background-color: ${colors.white};

  ${({ isValidWord }) => isValidWord && css`
    color: ${colors.green4};
  `}
`;