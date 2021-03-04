function dedupeArray(arr) {
  if arr.length<2
  let items = {};
  i = 0;
  
  while (i<arr.length) {
      if(!items[arr[i]]){
          items[arr][i] = 1
      } else {
        arr[i]
      }
  }

}