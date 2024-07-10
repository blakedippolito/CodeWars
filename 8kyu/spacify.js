function spacify(str) {
    let strArr =  str.split('')
    return (strArr.map(item=> item+' ').join('').trim())
  }

  console.log(spacify('hello world'))