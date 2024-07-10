let filterString = function(value) {
    return Number(value.split('').filter(item=> {
      return Number(item) || item==="0"
    }).join(''))
  }


console.log(filterString("abc1234defg567"))