import React  from 'react';

import { WordLabelProps } from './types';
import { WordLabelStyled } from './styles';

export default function WordLabel ({ selectedLetters }: WordLabelProps) {

  const word: string = selectedLetters.join('');

  return <WordLabelStyled>{word}</WordLabelStyled>;
}