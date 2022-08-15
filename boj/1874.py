import sys
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline

n = int(input())  # 수의 개수
stack = []  # stack 초기화
result = []
current = 1  # 현재 삽입할 수

for _ in range(n):
    x = int(input())
    # top()보다 x가 더 크다면, 스택에 삽입
    while len(stack) == 0 or stack[-1] < x:
        stack.append(current)
        current += 1
        result.append("+")
    # top()과 x가 같다면 스택에서 제거
    if stack[-1] == x:
        stack.pop()
        result.append("-")
    # top()보다 x가 더 작다면, 불가능
    else:
        result = ["NO"]
        break

for x in result:
    print(x)
