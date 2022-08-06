import sys
sys.stdin = open("input.txt", "r")


testCase = int(input())

for _ in range(testCase):
    leftStack = []
    rightStack = []
    data = input()
    for x in data:
        if x == '-':
            if leftStack:  # 비어있지 않다면
                leftStack.pop()
        elif x == "<":
            if leftStack:
                rightStack.append(leftStack.pop())

        elif x == ">":
            if rightStack:
                leftStack.append(rightStack.pop())
        else:
            leftStack.append(x)
    leftStack.extend(reversed(rightStack))
    print(''.join(leftStack))
