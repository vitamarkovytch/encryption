const spliceString = (
  array: any,
  stringToAdd: string,
  indexStart: number,
  deleteCount: number
) => {
  array.splice(indexStart, deleteCount, stringToAdd);
  return array;
};

const removeString = (
  array: any,
  stringToRemove: string,
  indexStart: number,
  indexEnd: number
) => {
  const sliced = array.slice(indexStart - 1, indexEnd); // get specific elements from indexStart to indexEnd (not included)

  const newStr = sliced.join(" ");

  const strToAdd = newStr.replace(` ${stringToRemove} `, " "); // remove words from string

  array.splice(indexStart - 1, sliced.length, ...strToAdd.split(" ")); // paste updated array into specific index of array and remove previous data
  return array;
};

export const fixingTextDeclaration = (declaration: string): string => {
  const array = declaration.split(" ");
  spliceString(array, "a", 154, 0); //add "a" after "institute", between "institute" and "laying" ("and to institute new government laying its ..")

  removeString(array, "a", 240 + 1, 247); //index +1 remove "a" between "invariably" and "design" ("pursuing invariably the same object evinces a design to .. ")

  removeString(
    array,
    "he has refused for a long time after such dissolutions",
    466, //index -1
    495 //index -1
  ); //remove "he has refused for a long time after such dissolutions", between "houses" and "be" ("representative houses repeatedly for opposing with manly firmness his invasions on the rights of the people he has refused for a long time after such dissolutions to cause others to be elected whereby the l")

  removeString(array, "the", 630 - 10, 643); //remove "the" between "eat" and "to" ("and eat out their substance he has kept among us in times of peace standing armies without the consent of our legislatures he has affected to")

  removeString(array, "their", 677 - 11, 807); //remove "their" between "foreign" and "valuable"

  spliceString(array, "y", 809, 1); // "fundamentally" ("and altering fundamentally the forms of our governments for suspending ")
  spliceString(array, "x", 1003, 1); // "have" ("in the most humble terms our repeated petitions have been answered")

  return array.join(" ");
};
