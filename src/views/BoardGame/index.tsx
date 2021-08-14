import React from 'react';

import {
  Board,
  WordLabel,
  ResetButton
} from '../../components';
import useBoardGame from './useBoardGame';
import {
  BoardGameStyled,
  BoardWrapper,
  ButtonWrapper,
  LabelWrapper,
} from './styles';

export default function BoardGame () {

  const {
    formedWord,
    isSelectedLettersEmpty,
    isValidWord,
    letterMatriz,
    selectedLettersId,
    handleReset,
    handleTile,
    handleSelectedTile,
  } = useBoardGame();

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
          formedWord={formedWord}
          isValidWord={isValidWord}/>
      </LabelWrapper>
    </BoardGameStyled>
  );
}