function gimme(triplet) {
  let sorted = triplet.sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}

console.log(gimme([2, 3, 1])); //Logs 0 to console - 2 is the middle number and 0 is the index.
