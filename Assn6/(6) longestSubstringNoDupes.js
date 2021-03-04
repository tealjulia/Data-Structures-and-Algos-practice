var lengthOfLongestSubstring = function(s) {
  if (s.length < 2){
     return s.length;
   }

  let start = 0;
  let longest = 0;
  let map = new Map ();
  
  for (let i = 0; i < s.length; i++){
      var ch = s[i];
      
      if(map.get(ch) >= start) start = map.get(ch)+1;
      map.set(ch, i);
      longest = Math.max(longest, i-start+1)
  }
  return longest;   
};