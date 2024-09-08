// Write a function that removes every lone 9 that is inbetween 7s.

function sevenAte9(str) {
  str = str.split("");
  let nines = str.map((_, idx) => _ === "9" && str[idx - 1] === "7");
  return str.filter((item, index) => nines[index] !== true).join("");
}
