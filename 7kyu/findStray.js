// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    let dict = {};
    
    for (let i = 0; i < numbers.length; i++) {
      if (dict[numbers[i]]) {
        dict[numbers[i]] += 1;
      } else {
        dict[numbers[i]] = 1;
      }
    }
    
    for (let key in dict) {
      if (dict[key] === 1) {
        return parseInt(key);
      }
    }
  }

  //[1,1,2,1] returns 2