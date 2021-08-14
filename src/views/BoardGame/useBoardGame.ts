import { useEffect, useState } from 'react';

// import data from '../../data/test-board-2.json';
import dictionary from '../../data/dictionary.json';
import { Matriz } from '../../models';
import {
  generateRandomLetters,
  mapArrayToMatriz,
 } from '../../utils';

export default function useBoardGame () {

    // const { board } = data; // test-board-2.json
    const [letterMatriz, setLetterMatriz] = useState<Matriz>([]);
    useEffect(() => {
      const letterQuantity: number = 16;
      const matrizColumns: number = 4;
      const randomLettets = generateRandomLetters(letterQuantity);
      const newLetterMatriz = mapArrayToMatriz(randomLettets, matrizColumns);
      // const newLetterMatriz = mapArrayToMatriz(board, matrizColumns);
      setLetterMatriz(newLetterMatriz);
    },
    []);
  
    const [selectedLettersId, setSelectedLetters] = useState<Array<string>>([]);
    const isSelectedLettersEmpty: boolean = !selectedLettersId.length;
  
    const handleReset = () => setSelectedLetters([]);
  
    const handleTile = (currentLetter: string) => () => {
      setSelectedLetters(letters => letters.concat(currentLetter));
    }
  
    const handleSelectedTile = (currentSelectedLetters: Array<string>) => (letter: string) => {
      return currentSelectedLetters.includes(letter)
    }
  
    const reducerToFormedWord = (acc: string, crr: string): string => {
      const matrixCoordenates: Array<string> = crr.split('');
      const [row, tile] = matrixCoordenates.map(item => parseInt(item))
      const selectedLetter: string = letterMatriz[row][tile];
      return acc.concat(selectedLetter);
    }
    
    const { words: dictionaryWords } = dictionary;
    const formedWord = selectedLettersId.reduce(reducerToFormedWord,'');
    const [isValidWord, setIsValidWord] = useState<boolean>(false);
    useEffect(() => {
      const formatedWord: string = formedWord.toLowerCase();
      const findCoincidences = (word: string): boolean => {
        return word.toLowerCase() === formatedWord;
      }
      const isValidWord: boolean = dictionaryWords.some(findCoincidences);
      setIsValidWord(isValidWord);
    },
    [formedWord, dictionaryWords]);

  return {
    formedWord,
    isSelectedLettersEmpty,
    isValidWord,
    letterMatriz,
    selectedLettersId,
    handleReset,
    handleTile,
    handleSelectedTile,
  }
}