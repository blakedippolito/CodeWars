// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.


function bingo(ticket, win) {
  let result = 0;
  for (let x of ticket) {
    let str = x[0];
    let num = x[1];
    let mini = 0;

    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) === num) {
        mini += 1;
        result += 1;
        if (mini === 1) {
          break;
        }
      }
    }
  }

  return result >= win ? "Winner!" : "Loser!";
}
