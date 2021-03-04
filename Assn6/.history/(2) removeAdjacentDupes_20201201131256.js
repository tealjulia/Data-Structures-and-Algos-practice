var removeDuplicates = function(S) {
    if (S.length <= 1){
        return S;
    }
    
    let newStr = S;
    
    for(let i=0; i<newStr.length; i++){
      j = i+1;
        if(newStr[i] == newStr[j]){
            while(newStr[i] == newStr[j]){
              j++;
            }
          newStr = newStr.slice(0, i) + newStr.slice(j);
          i--;
        }
    }
    
    if(newStr == S){
        return newStr
    }
  
    return removeDuplicates(newStr)
  };
  
  
  let S = "ccaaabbbaaacccccdddddddddd";
  
  console.log(removeDuplicates(S));