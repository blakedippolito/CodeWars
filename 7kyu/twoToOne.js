// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct letters - 
// each taken only once - coming from s1 or s2.


function longest(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let arr = Array.from(s1);
  let arr2 = Array.from(s2);
  let result = new Set(arr.concat(arr2));
  return Array.from(result).sort().join("");
}

//"aretheyhere", "yestheyarehere" returns "aehrsty"