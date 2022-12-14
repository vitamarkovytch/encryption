import { getPunctuationMark } from "./functions";

const getFirstLetterOfWord = (array: any, index: number): string =>
  array[index].charAt(0);

export const deciphering = (
  encryptedArray: any,
  declarationArray: any
): any => {
  return encryptedArray.map(
    (code: string) =>
      getPunctuationMark(+code) ||
      getFirstLetterOfWord(declarationArray, +code).toLowerCase()
  );
};
