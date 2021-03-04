function longestCommonPrefix(str){

  if(str.length == 0) return "";
  let result = '';

  for (let i=0; i<str[0].length; i++){
    if (str.every(item => () => {return arr[0][i] === item[i];})) {
      result += arr[0][i];
      } else {
        break;
      }
    }
    return result;
  };