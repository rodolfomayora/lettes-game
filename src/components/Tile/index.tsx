import React from 'react';

import { TileProps } from './types';
import {
  TileLetter,
  TileStyled,
} from './styles';

export default function Tile (props: TileProps) {

  const { isSelected, letter, isValidWord, handleTile } = props;

  const isAlreadySelected: boolean = !isSelected;

  const handleClick = () => isAlreadySelected && handleTile();

  return (
    <TileStyled
      isSelected={isSelected}
      isValidWord={isSelected && isValidWord}
      onClick={handleClick}>
      <TileLetter isSelected={isSelected}>
        {letter}
      </TileLetter>
    </TileStyled>
  );
}