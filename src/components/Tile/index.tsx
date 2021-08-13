import React from 'react';

import { TileProps } from './types';
import {
  TileLetter,
  TileStyled,
} from './styles';

function Tile ({ isSelected, letter, handleTile }: TileProps) {

  const isAlreadySelected: boolean = !isSelected;

  const handleClick = () => isAlreadySelected && handleTile();

  return (
    <TileStyled
      isSelected={isSelected}
      onClick={handleClick}>
      <TileLetter isSelected={isSelected}>
        {letter}
      </TileLetter>
    </TileStyled>
  );
}

export default Tile;