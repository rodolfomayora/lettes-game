import React from 'react';

type TileProps = {
  isSelected: boolean,
  letter: string,
  handleTile: () => void,
}

function Tile ({ isSelected, letter, handleTile }: TileProps) {

  const isAlreadySelected: boolean = !isSelected;

  const handleClick = () => isAlreadySelected && handleTile();

  return (
    <button onClick={handleClick}>
      {letter}
      {isSelected && <span>*</span>}
    </button>
  );
}

export default Tile;