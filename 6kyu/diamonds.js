function diamond(n){
    if (n%2===0 || n<1) return null
    
    let result = ''
    
    for (let i=1; i<=n; i+=2) {
  
        for (let j=n; j>=1; j-=2) {
            result+='*'.repeat(i)
            result+='\n'
        }
    }
    return result
  }

console.log(diamond(3))