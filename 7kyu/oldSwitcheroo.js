// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

function vowel2index(str) {
  let vowels = "aeiouAEIOU";
  return str
    .split("")
    .map((item, idx) => (vowels.includes(item) ? idx + 1 : item))
    .join("");
}
