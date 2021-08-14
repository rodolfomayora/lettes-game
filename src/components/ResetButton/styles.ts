import styled from "styled-components";

import { colors } from '../../assets/styles/config';

export const ResetButtonStyled = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  border: none;

  font-size: 17px;
  letter-spacing: -0.5px;
  color: ${colors.gray1};

  background-color: ${colors.transparent};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;  
  }
`;

export const IconWrapper = styled.span`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-left: 16px;
  background-color: ${colors.gray1};
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  font-size: 28px;
  color: ${colors.white};
`;