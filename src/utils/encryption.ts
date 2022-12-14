import { getPunctuationCode } from "./functions";

const getRandomElementFromArray = (array: any) =>
  array[Math.floor(Math.random() * array.length)];

export const encryption = (text: string, declarationArray: any): any => {
  const letters = text.split("");
  return letters.map((letter) => {
    const code = getPunctuationCode(letter);
    if (code >= 0) return code;

    const foundIndexes = declarationArray
      .map((word: string, index: number) => {
        if (word.charAt(0).toLowerCase() === letter.toLowerCase()) return index;
      })
      .filter((element: number) => element >= 0);

    if (!foundIndexes || !foundIndexes.length) return;

    return getRandomElementFromArray(foundIndexes);
  });
};
