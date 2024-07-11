// Given a mixed array of number and string representations of integers,
// add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

console.log(divCon([8,2,3,'7','1'])) //Logs 5
