// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
  return a.map((item, index) => (index % 2 !== 0 ? item * 2 : item));
}
