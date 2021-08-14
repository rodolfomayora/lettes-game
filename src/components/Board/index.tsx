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
      const letterId: string = `${rowIndex}${letterIndex}`;
      return (
        <Tile key={letterId}
          letter={letter}
          isSelected={handleSelectedTile(letterId)}
          handleTile={handleTile(letterId)} />
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