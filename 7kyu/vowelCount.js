// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = 'aeiou'
    vowels = vowels.split('')
    let count = 0
    
    for (let x of str) {
      if (vowels.includes(x)) {
        count+=1
      }
    }
    return count
  }

  //"abracadabra" returns  5