export type TileStyledProps = {
  isSelected: boolean;
  isValidWord?: boolean;
}

export type TileProps = TileStyledProps & {
  letter: string,
  handleTile: () => void,
}