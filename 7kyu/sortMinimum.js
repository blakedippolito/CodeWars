// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(""));
}

//[4, 7, 5, 7] returns 457