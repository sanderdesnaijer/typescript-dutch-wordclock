export function processString(inputString: string): string[] {
  const cleanedString = inputString.replace(/\n/g, "").split("");
  return cleanedString.filter((letter) => letter !== "");
}

export const getRandomLetter = (excludeLetters: string[]) => {
  const ALPHABET = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  const regex = new RegExp(excludeLetters.join("|"), "gi");
  const availableLetters = ALPHABET.replace(regex, "");
  const randomIndex = Math.floor(Math.random() * availableLetters.length);
  return availableLetters[randomIndex];
};
