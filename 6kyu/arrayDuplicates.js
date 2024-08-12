// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
  let result = [];
  for (let x of s) {
    let y = [];
    x = x.split("");
    x.forEach((item, idx, arr) => {
      if (item !== arr[idx + 1]) {
        y.push(item);
      }
    });
    result.push(y.join(""));
  }

  return result;
}

//["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) returns ['codewars','picaniny','hubububo'])