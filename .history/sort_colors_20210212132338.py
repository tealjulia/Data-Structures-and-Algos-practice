class Solution(object):
    def sortColors(self, nums):
        high = len(nums)-1
        low = 0
        i = 0
        
        while i<= high:
            if nums[i] == 0:
                nums[low], nums[i] = nums[i], nums[low]
                i += 1
                low +=1
            elif nums[i] == 2:
                nums[i], nums[high] = nums[high], nums[i]
                high -=1
            elif nums[i] == 1:
                i += 1
                
        print nums