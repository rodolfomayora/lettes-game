import styled, { css } from 'styled-components';

import { colors, mixins } from '../../assets/styles/config';
import { TileStyledProps } from './types';

export const TileStyled = styled.button<TileStyledProps>`

  width: 62px;
  height: 62px;
  padding: 2px;
  border: none;
  border-radius: 9px;
  outline: none;

  background-image: linear-gradient(
    180deg,
    ${colors.red1},
    ${colors.red2});
  box-shadow: none;
  cursor: pointer;

  &:active { transform: scale(0.96); }

  ${mixins.large(css`
    width: 86px;
    height: 86px;
  `)}

  ${({ isSelected }) => isSelected && css`
    background-image: linear-gradient(
      180deg,
      ${colors.green1},
      ${colors.green2});
    cursor: not-allowed;

    &:active { transform: none; }
  `}
`;

export const TileLetter = styled.span<TileStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  border-radius: 6px;

  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: ${colors.white};
  text-shadow: ${colors.shadow1};

  background-image: linear-gradient(
    180deg,
    ${colors.orange1},
    ${colors.orange2});
  
  ${mixins.large(css`
    border-radius: 6px;
  `)}
  
  ${({ isSelected }) => isSelected && css`
    background-image: none;
  `}
`;