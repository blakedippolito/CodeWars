// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

function inArray(array1, array2) {
  let result = [];
  array1.forEach((item, index, array) => {
    for (let x of array2) {
      if (x.includes(item)) {
        result.push(item);
      }
    }
  });
  return Array.from(new Set(result)).sort();
}
