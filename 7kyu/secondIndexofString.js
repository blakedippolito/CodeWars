// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. 
// If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(s, symbol) {
  s = s.split("");
  let result = [];
  s.forEach((item, index, array) => {
    if (array[index] === symbol) {
      result.push(index);
    }
  });
  return result.length > 1 ? result[1] : -1;
}

//Hello World, l -> 3