// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  let first = s.sort()[0];
  let result = "";
  for (let i = 0; i < first.length; i++) {
    result += first[i] + "*".repeat(3);
  }
  return result.slice(0, result.length - 3);
}
