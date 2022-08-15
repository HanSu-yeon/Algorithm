import sys
sys.stdin = open("input.txt", "r")

input = sys.stdin.readline  # 빠른 입력 함수 사용
k = int(input())  # 수의 개수
stack = list()  # 스택(stack) 초기화

for _ in range(k):
    n = int(input())  # 하나씩 수 입력
    if n == 0:  # 값이 0인 경우 가장 최근 수 제거
        stack.pop()
    else:  # 스택에 값 삽입
        stack.append(n)
print(sum(stack))
