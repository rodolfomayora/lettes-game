import React, { useEffect } from 'react';

import dictionary from '../../data/dictionary.json';
import { WordLabelProps } from './types';
import { 
  FormedWord,
  ValidationLabel,
  WordLabelStyled,
} from './styles';

export default function WordLabel (props: WordLabelProps) {

  const {
    isValidWord,
    letterMatriz,
    selectedLettersId,
    handleValidWord,
  } = props;

  const reducerToFormedWord = (acc: string, crr: string): string => {
    const matrixCoordenates: Array<string> = crr.split('');
    const [row, tile] = matrixCoordenates.map(item => parseInt(item))
    const selectedLetter: string = letterMatriz[row][tile];
    return acc.concat(selectedLetter);
  }

  const formedWord = selectedLettersId.reduce(reducerToFormedWord,'');
  const isFormedWordEmpty = !!formedWord;
  const { words: dictionaryWords } = dictionary;

  useEffect(() => {
    const formatedWord: string = formedWord.toLowerCase();
    const findCoincidences = (word: string): boolean => {
      return word.toLowerCase() === formatedWord;
    }
    const isValidWord: boolean = dictionaryWords.some(findCoincidences);
    handleValidWord(isValidWord);
  },
  [formedWord, dictionaryWords, handleValidWord]);

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