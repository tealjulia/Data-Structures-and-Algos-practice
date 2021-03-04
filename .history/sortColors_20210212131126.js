

sortColors = (nums) => {
  let low = 0;
  let high = nums.length-1;
  
  
};





while (i <= high) {
  if(nums[i] === 0){
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
      i++;
  } else if (nums[i] === 2){
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
  } else {
      i++;
  }
}
return nums;    