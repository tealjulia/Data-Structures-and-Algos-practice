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

    //fill for length 1
    let maxLength = 1;
    for (let i=0; i<str.length; i++){
        table[i][i] = true;
    }
    //fill for length 2
    let start = 0;
    for (let i=0; i< n-1)
        if(str[i] == str[i+1]){
            table[i][i+1] = true
            start = i;
            maxLength = 2;
        }
    //fill for lengths>2
    //cl = current length
    let cl=3;
    for (cl; cl<=n; cl++){
        //i = start
        for (let i=0; i<(n-k+1); i++){
            //j = start + length
            j = i + cl -1

            //check for internal palindrome
            if(table[i+1][j-1] = true && str[i] == str[j]){
                table[i][j] = true;

                if (cl>maxLength){
                    start=i;
                    maxLength=cl;
                }
            } 
        }
    }
}