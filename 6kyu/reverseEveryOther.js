
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
// Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  let newStr = str.split(" ");
  if (!str.trim()) {
    return "";
  }
  return newStr
    .map((item, index, array) =>
      index % 2 !== 0 && index !== 0 ? item.split("").reverse().join("") : item
    )
    .join(" ");
}
//("Reverse this string, please!") returns "Reverse siht string, !esaelp")