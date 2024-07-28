// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let newArr = array.map((item, index)=>item*array[index+1]).sort((a,b)=>b-a)
    return newArr[0]
  } 

  //adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50