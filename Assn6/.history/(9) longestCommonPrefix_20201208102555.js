function longestCommonPrefix(arr){

  if(arr.length == 0) return "";
  let result = '';

  // let shortestString = 

  for (let i=0; i<arr[0].length; i++){
    if (arr.every(item => () => 
    {return arr[0][i] === item[i];})) {
      result += arr[0][i];
      } else {
        break;
      }
    }
    return result;
  };