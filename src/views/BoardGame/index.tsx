import React, { useState } from 'react';


import data from '../../data/test-board-1.json';
import { Matriz } from '../../models';
import { mapArrayToMatriz } from '../../utils';
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

  const { board: letters } = data;

  const matrizColumns: number = 4;

  const letterMatriz: Matriz = mapArrayToMatriz(letters, matrizColumns);

  const initialState: Array<string> = [];

  const [selectedLetters, setSelectedLetters] = useState<Array<string>>(initialState);

  const isSelectedLettersEmpty: boolean = !selectedLetters.length;

  const handleReset = () => setSelectedLetters(initialState);

  const handleTile = (currentLetter: string) => () => {
    setSelectedLetters(letters => letters.concat(currentLetter));
  }

  const handleSelectedTile = (currentSelectedLetters: Array<string>) => (letter: string) => {
    return currentSelectedLetters.includes(letter)
  }

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
          handleSelectedTile={handleSelectedTile(selectedLetters)}
          handleTile={handleTile} />
      </BoardWrapper>

      <LabelWrapper>
        <WordLabel selectedLetters={selectedLetters} />
      </LabelWrapper>
    </BoardGameStyled>
  );
}