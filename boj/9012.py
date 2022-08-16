import sys
sys.stdin = open("input.txt", "r")

t = int(input())
stack = []
tmp = []

for _ in range(t):
    str = input()
    stack = []
    tmp = []
    for x in str:
        stack.append(x)

    while stack:
        x = stack.pop()
        if x == '(' or x == ')':
            tmp.insert(0, x)
            if len(tmp) > 1 and (tmp[0]+tmp[1]) == '()':
                del tmp[0]
                del tmp[0]
    if len(tmp) > 0:
        print('NO')
    else:
        print('YES')
