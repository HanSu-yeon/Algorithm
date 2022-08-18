import sys
import time
sys.stdin = open("input.txt", "r")

start = time.time()  # 시작 시간 저장
n = int(input())
arr = list(map(int, input().split()))  # 수열 데이터
stack = []  # 스택 초기화
NGE = [-1]*n  # 오큰수 배열

for i in range(n):
    x = arr[i]  # 하나씩 수 확인
    # 스택이 비어있거나 최상단원소가 x보다 크거나 같다면 --> 내림차순이니까 스택에 추가
    if len(stack) == 0 or stack[-1][0] >= x:
        # (수, 인덱스) 형태로 삽입 --> why? 나중에 오큰수를 기록할 때는 배열의 인덱스로 접근해야 하기 때문
        stack.append((x, i))
    else:
        while len(stack) > 0:  # top보다 큰 수 즉 오름차순이라면 --> 역방향으로 하나씩 꺼내기
            previous, index = stack.pop()
            if previous >= x:  # 크거나 같은 이전 원소를 만났다면 다시 삽입
                stack.append((previous, index))
                break
            else:
                NGE[index] = x  # 오큰수 기록
        stack.append((x, i))  # (수, 인덱스) 형태로 삽입

for x in NGE:  # 오큰수를 하나씩 출력
    print(x, end=' ')


print("time :", time.time() - start)
