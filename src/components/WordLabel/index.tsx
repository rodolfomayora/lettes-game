import React from 'react';

import { WordLabelProps } from './types';
import { 
  FormedWord,
  ValidationLabel,
  WordLabelStyled,
} from './styles';

export default function WordLabel (props: WordLabelProps) {

  const { formedWord, isValidWord } = props;
  const isFormedWordEmpty = !!formedWord;

  return (
    <WordLabelStyled>
      <FormedWord isValidWord={isValidWord}>
        {formedWord}
      </FormedWord>

      {isFormedWordEmpty && (
        <ValidationLabel isValidWord={isValidWord}>
          {isValidWord ? 'valid' : 'invalid'}
        </ValidationLabel>
      )}
    </WordLabelStyled>
  );
}