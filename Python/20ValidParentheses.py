"""
https://leetcode.com/problems/valid-parentheses/

Use a stack to keep track of correct order
"""


class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2:
            return False
        stack = []
        for x in s:
            if x == '(' or x == '{' or x == '[':
                stack.append(x)
            elif x == ')' or x == '}' or x == ']':
                if len(stack) == 0:
                    return False
                else:
                    if x == ')' and stack[-1] != '(':
                        return False
                    elif x == '}' and stack[-1] != '{':
                        return False
                    elif x == ']' and stack[-1] != '[':
                        return False
                    stack.pop()
        return len(stack) == 0