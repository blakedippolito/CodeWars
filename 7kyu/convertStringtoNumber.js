function toNumberArray(stringarray){
    return stringarray.map(item=> Number(item))
    
  }

  console.log(toNumberArray(["1", "2", "3"]))