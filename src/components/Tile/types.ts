export type TileStyledProps = {
  isSelected: boolean;
}

export type TileProps = TileStyledProps & {
  letter: string,
  handleTile: () => void,
}