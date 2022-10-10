class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        left = 1
        right = x // 2
        while (left <= right):
            mid = (right-left) // 2 + left
            print("L " + str(left) + " M " + str(mid) + " R " + str(right))
            if mid * mid > x:
                right = mid - 1
            if mid * mid < x:
                left = mid + 1
            if mid * mid == x:
                return mid
        return right




a = Solution()
# print(a.mySqrt(18))
# print(a.mySqrt(4))
print(a.mySqrt(8))
# print(a.mySqrt(1))
