// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let result = str
    .toLowerCase()
    .split("")
    .filter((item, index, arr) => {
      if (arr.slice(index + 1).includes(item)) {
        return item;
      }
    });

  return result.length === 0 ? true : false;
}
