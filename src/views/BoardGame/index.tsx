import React, { useEffect, useState } from 'react';

// import data from '../../data/test-board-2.json';
import { Matriz } from '../../models';
import {
  generateRandomLetters,
  mapArrayToMatriz,
 } from '../../utils';
import {
  Board,
  WordLabel,
  ResetButton
} from '../../components';
import {
  BoardGameStyled,
  BoardWrapper,
  ButtonWrapper,
  LabelWrapper,
} from './styles';

export default function BoardGame () {

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

  const [isValidWord, setIsValidWord] = useState<boolean>(false);

  return (
    <BoardGameStyled>
      <ButtonWrapper>
        <ResetButton
          disabled={isSelectedLettersEmpty}
          handleReset={handleReset} />
      </ButtonWrapper>

      <BoardWrapper>
        <Board
          letterMatriz={letterMatriz}
          isValidWord={isValidWord}
          handleSelectedTile={handleSelectedTile(selectedLettersId)}
          handleTile={handleTile} />
      </BoardWrapper>

      <LabelWrapper>
        <WordLabel
          isValidWord={isValidWord}
          letterMatriz={letterMatriz}
          selectedLettersId={selectedLettersId}
          handleValidWord={setIsValidWord} />
      </LabelWrapper>
    </BoardGameStyled>
  );
}