// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
    let even = 0
    let odd = 0
    array.filter((item, index)=> {
      if (index%2!==0) {
        odd+=item
      } else {
        even+=item
      }
    })
    return [even,odd]
  }