function countSignals(frequencies, filterRanges) {
  let approvedFreqs = 0;
  let max = 0;
  let min = 0;
  
  //find the smallest filter that fits all
  for(let i=0; i<filterRanges.length; i++){
      min = Math.max(min, filterRanges[i][0]);
      max = Math.min(max, filterRanges[i][1]);
  }
  if(min>max){
      return approvedFreqs;
  }
  
  for(let i=0; i<frequencies.length; i++){
      if(frequencies[i]>min && frequences[i]<max){
          approvedFreqs++;
      }
  }
  
  return approvedFreqs;
}