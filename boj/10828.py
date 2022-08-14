import sys
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline
n = int(input())

stack = []

for _ in range(n):
    cmd = input().strip().split(' ')
    if "push" == cmd[0]:
        stack.append(cmd[1])

    elif "pop" == cmd[0]:
        if len(stack):
            print(stack.pop())
        else:
            print(-1)
    elif "size" == cmd[0]:
        print(len(stack))
    elif "empty" == cmd[0]:
        if len(stack):
            print(0)
        else:
            print(1)
    elif "top" == cmd[0]:
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
