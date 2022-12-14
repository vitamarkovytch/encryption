import { PunctuationCodes } from "../consts/codes";

export const getPunctuationCode = (letter: string): number => {
  switch (letter) {
    case " ":
      return PunctuationCodes.Space;
    case ",":
      return PunctuationCodes.Comma;
    case ".":
      return PunctuationCodes.Period;
    case ";":
      return PunctuationCodes.Semicolon;
    case "?":
      return PunctuationCodes.QuestionMark;
    case "!":
      return PunctuationCodes.ExclamationPoint;
    case ":":
      return PunctuationCodes.Colon;
    case "%":
      return PunctuationCodes.Percent;
    case "-":
      return PunctuationCodes.Hyphen;
    case "_":
      return PunctuationCodes.Underscore;
    case "'":
      return PunctuationCodes.Apostrophe;
    case "9":
      return PunctuationCodes.Nine;
    case "8":
      return PunctuationCodes.Eight;
    case "7":
      return PunctuationCodes.Seven;
    case "6":
      return PunctuationCodes.Six;
    case "5":
      return PunctuationCodes.Five;
    case "4":
      return PunctuationCodes.Four;
    case "3":
      return PunctuationCodes.Three;
    case "2":
      return PunctuationCodes.Two;
    case "1":
      return PunctuationCodes.One;
    case "0":
      return PunctuationCodes.Zero;
    default:
      return -1;
  }
};

export const getPunctuationMark = (code: number): string => {
  switch (code) {
    case PunctuationCodes.Space:
      return " ";
    case PunctuationCodes.Comma:
      return ",";
    case PunctuationCodes.Period:
      return ".";
    case PunctuationCodes.Semicolon:
      return ";";
    case PunctuationCodes.QuestionMark:
      return "?";
    case PunctuationCodes.ExclamationPoint:
      return "!";
    case PunctuationCodes.Colon:
      return ":";
    case PunctuationCodes.Percent:
      return "%";
    case PunctuationCodes.Hyphen:
      return "-";
    case PunctuationCodes.Underscore:
      return "_";
    case PunctuationCodes.Apostrophe:
      return "'";
    case PunctuationCodes.Nine:
      return "9";
    case PunctuationCodes.Eight:
      return "8";
    case PunctuationCodes.Seven:
      return "7";
    case PunctuationCodes.Six:
      return "6";
    case PunctuationCodes.Five:
      return "5";
    case PunctuationCodes.Four:
      return "4";
    case PunctuationCodes.Three:
      return "3";
    case PunctuationCodes.Two:
      return "2";
    case PunctuationCodes.One:
      return "1";
    case PunctuationCodes.Zero:
      return "0";
    default:
      return "";
  }
};
