// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.

function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1; // Strings of different lengths can't be rotations

  let combined = first + first; // Concatenate the string with itself
  return combined.indexOf(second); // Check if 'second' is a substring of 'combined'
}
