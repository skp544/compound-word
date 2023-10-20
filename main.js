// some imports
const fs = require("fs");
const readline = require("readline");

// compound word function
function isCompoundWord(word, wordSet) {
  for (let i = 1; i < word.length; i++) {
    // first we dividing all the words
    const prefix = word.substr(0, i);
    const suffix = word.substr(i);

    // now we checking in a word set prefix or suffix is present or not
    // if present then [returns true
    if (
      wordSet.has(prefix) &&
      (wordSet.has(suffix) || isCompoundWord(suffix, wordSet))
    ) {
      return true;
    }
  }

  return false;
}

// processing input file
async function processInputFile() {
  const words = new Set();
  const inputFile = "Input_01.txt";

  //   readinng input file
  const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    output: process.stdout,
    terminal: false,
  });

  //  this function is used to add word of input file int words set

  for await (const line of rl) {
    words.add(line.trim());
  }

  //   now we sorting it in descending order
  const sortedWords = [...words].sort((a, b) => b.length - a.length);

  let firstWord = "";
  let secondWord = "";

  //   again creating a new set for sorted word set and we using set for avoifind duplicate values
  const wordSet = new Set(sortedWords);

  //   now checking if a word is compunt or not if it is compund then putting it into largestCompund and second largest compound
  for (const word of sortedWords) {
    if (isCompoundWord(word, wordSet)) {
      if (word.length > firstWord.length) {
        secondWord = firstWord;
        firstWord = word;
      } else if (word.length > secondWord.length) {
        secondWord = word;
      }
    }
  }

  console.log("Longest Compound Word:", firstWord);
  console.log("Second Longest Compound Word:", secondWord);
}

// this prints how much it time it will take to print all the words
const start = Date.now();
processInputFile().then(() => {
  const end = Date.now();
  console.log("Time taken: " + (end - start) / 1000 + " seconds");
});
