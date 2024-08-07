// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    let newS = s.split(' ')
    let result = []
    for (let x of newS) {
      if (!result.includes(x)) {
        result.push(x)
      }
    }
    return result.join(' ')
  }