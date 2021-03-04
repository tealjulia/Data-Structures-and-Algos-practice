function romanToNum(s){
  if(!s||s.length==0){
    return 0;
  }

  const map = new Map(["I, 1"], ["V", 5], ["x", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]);

  let i=s.length-1;
  let result = map.get(s[i]);

  while(i>0){
    let curr = map.get(s[i]);
    let prev = map.get(s[i-1]);

    if (prev>=curr){
      result += prev;
    } else {
      result -= prev;
    }
    i--;
  }
  return result;
};