var firstUniqChar = function(s) {
    
  let freqs = {};
  
  for (i=0; i < s.length; i++){
      if(freqs.hasOwnProperty(s[i])){
      freqs[s[i]]++;
      } else {
      freqs[s[i]] = 1;
      }
  }
  
  let index = -1;
      
    for (i in s){
      if (freqs[s[i]] == 1){
        index = i;
        break;
      }
      i++
    }
  return index;
  };