// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return (
    arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])
  );
}
;
