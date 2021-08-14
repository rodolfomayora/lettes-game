import { Matriz } from '../../models';

export type StyledProps = {
  isValidWord?: boolean,
}

export type WordLabelProps = StyledProps & {
  letterMatriz: Matriz,
  selectedLettersId: Array<string>,
  handleValidWord: (isValid: boolean) => void,
}