const SCORECHART = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
}

const REGEX = /[A-Z]/

const Scrabble = {
  score(word) {
    let wordUp = word.toUpperCase()
    let wordSplits = wordUp.split('');

    let totalScore = 0;
    if (wordSplits.length > 7 || wordSplits.length === 0) {
      throw 'Invalid word';
    }

    if (wordSplits.length === 7) {
      totalScore += 50;
    }

    wordSplits.forEach(function(letter) {

      if (REGEX.test(letter)) {
        totalScore += SCORECHART[letter];
      } else {
        throw 'Not a valid word';
      }

    });

    return totalScore
  },

  highestScoreFrom(arrayOfWords) {

  },
};

Scrabble.Player = class {

};


module.exports = Scrabble;
