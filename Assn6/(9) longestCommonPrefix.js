function longestCommonPrefix(arr){

  // if(arr.length == 0) return "";
  // let result = '';

  // // let shortestString = 

  // for (let i=0; i<arr[0].length; i++){
  //   if (arr.every(item => () => 
  //       {return arr[0][i] === item[i];})) {
  //     result += arr[0][i];
  //     } else {
  //       break;
  //     }
  //   }
  //   return result;
  // };


  //compare string 1 and string 2

function compareTwo (str1, str2){
  let result = '';
  n = Math.min(str1.length, str2.length);
  let i = 0;
  
  while (i <= n){
    if (str1[i] !== str2[i]){
      return result
    }

    result += str1[i];
    i++;
  }

  return result;
}

function commonPrefix (arr, n){
  prefix = arr[0];

  for (var i=1; i<arr.length; i++)
  {
    prefix = compareTwo(prefix, arr[i])
  }
  return prefix
}

let arr = ["apple", "ape", "apparatus", "apps", "archipelago"]
let n = arr.length;

console.log(commonPrefix(arr, n))

// function longestCommonPref(arr){
//   let n = arr.length-1;

//   while (n > 0){
//     compare(n, n-1);
//     n--;
//   }


// }