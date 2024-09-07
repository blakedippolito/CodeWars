// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  console.log(array);
  let odd = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  let newArr = array.map((item) => (item % 2 == 0 ? item : odd.shift()));
  return newArr;
}
