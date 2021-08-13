import React from 'react';

import Tile from '../Tile';
import { BoardProps } from './types';
import {
  BoardRow,
  BoardStyled,
} from './styles';

export default function Board(props: BoardProps) {

  const { letterMatriz, handleSelectedTile, handleTile } = props

  const generateTilesPerRow = (rowIndex: number) => {
    return (letter: string, letterIndex: number) => {
      return (
        <Tile key={`${rowIndex}${letterIndex}`}
          letter={letter}
          isSelected={handleSelectedTile(letter)}
          handleTile={handleTile(letter)}/>
      );
    }
  }

  return (
    <BoardStyled>
      {letterMatriz.map((row: Array<string>, rowIndex: number) => (
        <BoardRow key={rowIndex.toString()}>
          {row.map(generateTilesPerRow(rowIndex))}
        </BoardRow>
      ))}
    </BoardStyled>
  );
}