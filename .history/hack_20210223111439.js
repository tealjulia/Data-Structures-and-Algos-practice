function countSignals(filterRanges) {
  // let approvedFreqs;
  let max;
  let min;
  
  min = filterRanges.filter((element) => {
      return Math.max(max, element[0])
  })

  return min;
}


let filterRanges = [[10, 20], [5, 15], [5, 30]]

console.log