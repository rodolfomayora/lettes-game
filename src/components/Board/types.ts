import { Matriz } from '../../models';

export type BoardProps = {
  letterMatriz: Matriz,
  handleSelectedTile: (currentLetter: string) => boolean,
  handleTile: (currentLetter: string) => () => void,
}