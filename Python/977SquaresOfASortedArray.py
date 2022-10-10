"""
Use two pointers and start from where one is positive and one is negative
negative pointer works left
positive pointer works right
Compare squared number negative with positive
insert lower of two squared
"""

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        if len(nums) == 1:
            return [nums[0] * nums[0]]
        res = []
        pos = 1
        while (nums[pos] < 0 and pos < len(nums)-1):
            pos += 1
        neg = pos - 1
        while neg > -1 or pos < len(nums):
            if neg == -1:
                res.append(nums[pos] * nums[pos])
                pos += 1
            elif pos == len(nums):
                res.append(nums[neg] * nums[neg])
                neg -= 1
            else:
                if (nums[neg] * nums[neg]) <= (nums[pos] * nums[pos]):
                    res.append(nums[neg] * nums[neg])
                    neg -= 1
                else:
                    res.append(nums[pos] * nums[pos])
                    pos += 1
        return res