import { Matriz } from '../../models';

export type BoardProps = {
  letterMatriz: Matriz,
  isValidWord?: boolean,
  handleSelectedTile: (currentLetter: string) => boolean,
  handleTile: (currentLetter: string) => () => void,
}