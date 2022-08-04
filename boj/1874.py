import sys
sys.stdin = open("input.txt", "r")


n = int(input())
stack = []
res = []
count = 1  # 현재까지 넣은 수라고 생각하면 될 거 같다
for i in range(1, n+1):
    data = int(input())

    while count <= data:
        stack.append(count)
        res.append('+')
        count += 1
    if stack[-1] == data:
        a = stack.pop()
        res.append('-')
    else:
        print('NO')
        exit(0)
