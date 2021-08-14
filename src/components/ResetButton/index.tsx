import React from 'react';

import { ResetButtonProps } from './types';
import {
  Icon,
  IconWrapper,
  ResetButtonStyled
} from './styles';

export default function ResetButton (props: ResetButtonProps) {

  const { disabled, handleReset } = props;
  
  return (
    <ResetButtonStyled
      disabled={disabled}
      onClick={handleReset}>
      clear word
      <IconWrapper>
        <Icon>&#10005;</Icon>
      </IconWrapper>
    </ResetButtonStyled>
  );
}