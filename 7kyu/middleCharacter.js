// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let sLen = Math.floor(s.length / 2);
  s = s.split("");
  return s.length % 2 === 0 ? s.slice(sLen - 1, sLen + 1).join("") : s[sLen];
}
// middle returns dd
//persons returns s