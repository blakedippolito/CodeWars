// Given an array/list [] of n integers , find maximum triplet sum in the array Without
// duplications.

function maxTriSum(numbers) {
  numbers = [...new Set(numbers)];
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, c) => (c += acc), 0);
}

console.log(maxTriSum([3,2,6,8,2,3])) //returns 17