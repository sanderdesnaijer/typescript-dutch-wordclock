import { getRandomLetter, processString } from "./utils";

test("it should remove newline characters and filter empty letters", () => {
  const inputString = "Hello\nWorld\n";
  const result = processString(inputString);
  expect(result).toEqual(["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]);
});

test("it should return a random letter excluding the provided ones", () => {
  const excludeLetters = ["A", "B", "C"];
  const result = getRandomLetter(excludeLetters);
  expect(result).toMatch(/^[DEFGHIJKLMOPQRSTUVWXYZ]$/); // Ensure the result is one of the expected letters
});
