var isPalindrome = function(x) {
    
  let g = x.toString().split('').reverse().join('')
console.log(g)
  if (x.toString() == g ){
  return true
}
  else {
    return false
  }
    
};

