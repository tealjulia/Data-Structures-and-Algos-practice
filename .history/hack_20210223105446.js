function dedupeArray(arr) {
  let items = {};
  
  for (let i=0; i<arr.length; i++){
      if(!items[arr[i]]){
          items[arr][i] = 1
      } else {
        arr[i]
      }
  }

}