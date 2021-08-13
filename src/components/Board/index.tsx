import React, { useState } from 'react';

import data from '../../data/test-board-1.json';
import Tile from '../Tile';

type Matriz = Array<Array<string>>

function Board() {

  const { board: letters } = data;

  const mapArrayToMatiz = (array: Array<string>, columns: number): Matriz => {
    return array.reduce((acc: Matriz, crr: string, index:number) => {
      if (index % columns === 0) acc.push([crr]);
      else acc[acc.length - 1].push(crr);
      return acc
    }, []);
  }

  const boardMatriz: Matriz = mapArrayToMatiz(letters, 4);

  const [selectedLetters, setSelectedLetters] = useState<Array<string>>([]);

  const isEmpty: boolean = !selectedLetters.length;

  const resetLelectedLetters = () => setSelectedLetters([]);

  const handleTile = (currentLetter: string) => ():void => {
    setSelectedLetters(letters => letters.concat(currentLetter));
  }

  return (
    <>
      <button
        disabled={isEmpty}
        onClick={resetLelectedLetters}>
        Reset
      </button>

      <hr />

      <table>
        <tbody>
          {boardMatriz.map((row: Array<string>, rowIndex) => (
            <tr key={rowIndex.toString()}>
              {row.map((letter: string, letterIndex) => (
                <td key={`${rowIndex}${letterIndex}`}>
                  <Tile
                    letter={letter}
                    isSelected={selectedLetters.includes(letter)}
                    handleTile={handleTile(letter)}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <div>{`[${selectedLetters.join(' ')}]`}</div>
    </>
  );
}

export default Board;