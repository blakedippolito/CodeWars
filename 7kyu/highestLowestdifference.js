// Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
