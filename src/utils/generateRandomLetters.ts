/**
 * google reference: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */

const generateRandomLetters = (length: number): Array<string> => {
  const letterArray: Array<string> = Array(length).fill('');
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength: number = characters.length;

  const getRandomLeter = (): string => {
    const randomIndex: number = Math.floor(Math.random() * charactersLength);
    return characters[randomIndex];
  }

  return letterArray.map(getRandomLeter);
}

export default generateRandomLetters;