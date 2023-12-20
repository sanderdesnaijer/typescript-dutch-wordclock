function processString(inputString: string): string[] {
  const cleanedString = inputString.replace(/\n/g, "").split("");
  return cleanedString.filter((letter) => letter !== "");
}

export const wordGrid = processString(`
HETAISKEENLM
TWEEDRIEVIER
VIJFZESZEVEN
DERNEGEN-ENS
ACHTVEERTIEN
KWARTELFSUUR
RTWAALFAVOOR
OVERQHALFEEN
TWEEDRIEVIER
VIJFZESZEVEN
ACHTNEGENELF
TIENTWAALFRT`);

// top numbers
const TOP_ONE = [7, 8, 9];
const TOP_TWO = [20, 21, 22, 23];
const TOP_THREE = [16, 17, 18, 19];
const TOP_FOUR = [12, 13, 14, 15];
const TOP_FIVE = [24, 25, 26, 27];
const TOP_SIX = [28, 29, 30];
const TOP_SEVEN = [31, 32, 33, 34, 35];
const TOP_EIGHT = [48, 49, 50, 51];
const TOP_NINE = [40, 41, 42, 43, 44];
const TOP_TEN = [56, 57, 58, 59];
const TOP_ELEVEN = [64, 65, 66];
const TOP_TWELVE = [73, 74, 75, 76, 77, 78];
const TOP_THIRTEEN = [45, 46, 47, ...TOP_TEN];
const TOP_FOURTEEN = [52, 53, 54, 55, ...TOP_TEN];
export const topNumbers = [
  TOP_TWELVE,
  TOP_ONE,
  TOP_TWO,
  TOP_THREE,
  TOP_FOUR,
  TOP_FIVE,
  TOP_SIX,
  TOP_SEVEN,
  TOP_EIGHT,
  TOP_NINE,
  TOP_TEN,
  TOP_ELEVEN,
];

// bottom nummbers
const BOTTOM_ONE = [84, 85, 86];
const BOTTOM_TWO = [96, 97, 98, 99];
const BOTTOM_THREE = [100, 101, 102, 103];
const BOTTOM_FOUR = [104, 105, 106, 107];
const BOTTOM_VIVE = [116, 117, 118, 119];
const BOTTOM_SIX = [113, 114, 115];
const BOTTOM_SEVEN = [108, 109, 110, 111, 112];
const BOTTOM_EIGHT = [120, 121, 122, 123];
const BOTTOM_NINE = [124, 125, 126, 127, 128];
const BOTTOM_TEN = [140, 141, 142, 143];
const BOTTOM_ELEVEN = [129, 130, 131];
const BOTTOM_TWELVE = [134, 135, 136, 137, 138, 139];

export const bottomNumbers = [
  BOTTOM_TWELVE,
  BOTTOM_ONE,
  BOTTOM_TWO,
  BOTTOM_THREE,
  BOTTOM_FOUR,
  BOTTOM_VIVE,
  BOTTOM_SIX,
  BOTTOM_SEVEN,
  BOTTOM_EIGHT,
  BOTTOM_NINE,
  BOTTOM_TEN,
  BOTTOM_ELEVEN,
];

const IT_IS = [0, 1, 2, 4, 5];
const OVER = [92, 93, 94, 95];
const BEFORE = [80, 81, 82, 83];
const QUARTER = [67, 68, 69, 70, 71];
const HALF = [87, 88, 89, 90];
const SEPERATOR = [39];
export const HOURS = [60, 61, 62];

export type WordMap = Record<number, number[]>;

export const wordMap: WordMap = {
  0: IT_IS,
  1: [...IT_IS, ...TOP_ONE, ...OVER],
  2: [...IT_IS, ...TOP_TWO, ...OVER],
  3: [...IT_IS, ...TOP_THREE, ...OVER],
  4: [...IT_IS, ...TOP_FOUR, ...OVER],
  5: [...IT_IS, ...TOP_FIVE, ...OVER],
  6: [...IT_IS, ...TOP_SIX, ...OVER],
  7: [...IT_IS, ...TOP_SEVEN, ...OVER],
  8: [...IT_IS, ...TOP_EIGHT, ...OVER],
  9: [...IT_IS, ...TOP_NINE, ...OVER],
  10: [...IT_IS, ...TOP_TEN, ...OVER],
  11: [...IT_IS, ...TOP_ELEVEN, ...OVER],
  12: [...IT_IS, ...TOP_TWELVE, ...OVER],
  13: [...IT_IS, ...TOP_THIRTEEN, ...SEPERATOR, ...OVER],
  14: [...IT_IS, ...TOP_FOURTEEN, ...OVER],
  15: [...IT_IS, ...QUARTER, ...OVER],
  16: [...IT_IS, ...TOP_SIX, ...SEPERATOR, ...TOP_TEN, ...OVER],
  17: [...IT_IS, ...TOP_SEVEN, ...SEPERATOR, ...TOP_TEN, ...OVER],
  18: [...IT_IS, ...TOP_EIGHT, ...TOP_TEN, ...OVER],
  19: [...IT_IS, ...TOP_NINE, ...SEPERATOR, ...TOP_TEN, ...OVER],
  20: [...IT_IS, ...TOP_TEN, ...BEFORE, ...HALF],
  21: [...IT_IS, ...TOP_NINE, ...BEFORE, ...HALF],
  22: [...IT_IS, ...TOP_EIGHT, ...BEFORE, ...HALF],
  23: [...IT_IS, ...TOP_SEVEN, ...BEFORE, ...HALF],
  24: [...IT_IS, ...TOP_SIX, ...BEFORE, ...HALF],
  25: [...IT_IS, ...TOP_FIVE, ...BEFORE, ...HALF],
  26: [...IT_IS, ...TOP_FOUR, ...BEFORE, ...HALF],
  27: [...IT_IS, ...TOP_THREE, ...BEFORE, ...HALF],
  28: [...IT_IS, ...TOP_TWO, ...BEFORE, ...HALF],
  29: [...IT_IS, ...TOP_ONE, ...BEFORE, ...HALF],
  30: [...IT_IS, ...HALF],
  31: [...IT_IS, ...TOP_ONE, ...OVER, ...HALF],
  32: [...IT_IS, ...TOP_TWO, ...OVER, ...HALF],
  33: [...IT_IS, ...TOP_THREE, ...OVER, ...HALF],
  34: [...IT_IS, ...TOP_FOUR, ...OVER, ...HALF],
  35: [...IT_IS, ...TOP_FIVE, ...OVER, ...HALF],
  36: [...IT_IS, ...TOP_SIX, ...OVER, ...HALF],
  37: [...IT_IS, ...TOP_SEVEN, ...OVER, ...HALF],
  38: [...IT_IS, ...TOP_EIGHT, ...OVER, ...HALF],
  39: [...IT_IS, ...TOP_NINE, ...OVER, ...HALF],
  40: [...IT_IS, ...TOP_TEN, ...OVER, ...HALF],
  41: [...IT_IS, ...TOP_NINE, ...SEPERATOR, ...TOP_TEN, ...BEFORE],
  42: [...IT_IS, ...TOP_EIGHT, ...TOP_TEN, ...BEFORE],
  43: [...IT_IS, ...TOP_SEVEN, ...SEPERATOR, ...TOP_TEN, ...BEFORE],
  44: [...IT_IS, ...TOP_SIX, ...SEPERATOR, ...TOP_TEN, ...BEFORE],
  45: [...IT_IS, ...QUARTER, ...BEFORE],
  46: [...IT_IS, ...TOP_FOURTEEN, ...BEFORE],
  47: [...IT_IS, ...TOP_THIRTEEN, ...SEPERATOR, ...BEFORE],
  48: [...IT_IS, ...TOP_TWELVE, ...BEFORE],
  49: [...IT_IS, ...TOP_ELEVEN, ...BEFORE],
  50: [...IT_IS, ...TOP_TEN, ...BEFORE],
  51: [...IT_IS, ...TOP_NINE, ...BEFORE],
  52: [...IT_IS, ...TOP_EIGHT, ...BEFORE],
  53: [...IT_IS, ...TOP_SEVEN, ...BEFORE],
  54: [...IT_IS, ...TOP_SIX, ...BEFORE],
  55: [...IT_IS, ...TOP_FIVE, ...BEFORE],
  56: [...IT_IS, ...TOP_FOUR, ...BEFORE],
  57: [...IT_IS, ...TOP_THREE, ...BEFORE],
  58: [...IT_IS, ...TOP_TWO, ...BEFORE],
  59: [...IT_IS, ...TOP_ONE, ...BEFORE],
};

export const gridRows = 12;
export const gridColumns = 12;
