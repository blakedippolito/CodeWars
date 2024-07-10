function sumOfMinimums(arr) {
    let sum = 0
    for (let a of arr) {
      a.sort((a,b)=>a-b)
      sum+=a[0]
    }
    return sum
  }

  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))