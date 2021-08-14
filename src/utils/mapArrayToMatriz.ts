import { Matriz } from '../models';

type MapArrayToMatriz = (array: Array<string>, columns: number) => Matriz;

const mapArrayToMatriz: MapArrayToMatriz = (array, columns) => {
  return array.reduce((acc: Matriz, crr: string, index:number) => {
    if (index % columns === 0) acc.push([crr]);
    else acc[acc.length - 1].push(crr);
    return acc
  }, []);
}

export default  mapArrayToMatriz;