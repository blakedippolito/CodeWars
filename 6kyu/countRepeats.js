// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters


function countRepeats(str) {
  str = str.split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i];
    }
  }
  return str.length - result.length;
}

//('AABCCD') returns 2