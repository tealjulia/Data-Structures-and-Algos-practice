let longestPalindrome = function(s) {
  for (let m=s.length;m>0;m--) {
      let i=0,j= m;
      while (j<= s.length) {
          let substr =s.substring(i,j);
          if (isPalindrome(substr)) {
              return substr;
          }
          else{
          i++;
          j++;
      }
      }
  }
  return "";
}
let isPalindrome = function(s) {
  let l = 0, r = s.length-1;
  while (l <= r) {
      if (s[l] !== s[r]) {
          return false;
      }
      else{
      l++, r--;
  }
  }
  return true;
}

//DP solution

function longestPalindrome(str){
    let n=str.length;
    let table = Array.from(Array(n), ()=> new Array(n));
    
    for (let i=0; i<str.length; i++){
        table[i]
    }
}