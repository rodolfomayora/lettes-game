import React  from 'react';

import { WordLabelProps } from './types';
import { WordLabelStyled } from './styles';

export default function WordLabel (props: WordLabelProps) {

  const { letterMatriz, selectedLetters } = props;

  const reducerToFormedWord = (acc: string, crr: string): string => {
    const matrixCoordenates: Array<string> = crr.split('');
    const [row, tile] = matrixCoordenates.map(item => parseInt(item))
    const selectedLetter: string = letterMatriz[row][tile];
    return acc.concat(selectedLetter);
  }

  const formedWord = selectedLetters.reduce(reducerToFormedWord,'')

  return <WordLabelStyled>{formedWord}</WordLabelStyled>;
}