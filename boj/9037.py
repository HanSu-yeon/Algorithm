import sys
sys.stdin = open("input.txt", "r")


def check(N, candy):
    for i in range(N):
        if candy[i] % 2 == 1:
            candy[i] += 1
    # 사탕의 개수가 같은지 check
    return len(set(candy)) == 1

# 선생님 역할


def teacher(N, candy):
    tmp_lst = [0 for i in range(N)]  # 오른쪽으로 전달해줘야되는 사탕 수
    for idx in range(N):
        if candy[idx] % 2:  # 나머지가 1이라면==홀수라면
            candy[idx] += 1
        candy[idx] //= 2
        tmp_lst[(idx+1) % N] = candy[idx]  # 오른쪽 친구한테 줄 값을 정의한다 == 내꺼의 절반

    for idx in range(N):
        candy[idx] += tmp_lst[idx]

    return candy  # 갱신된 배열


def process():
    # 인원, 초기 사탕 개수
    N, candy = int(input()), list(map(int, input().split()))
    cnt = 0
    while not check(N, candy):  # 같지않으면
        cnt += 1
        candy = teacher(N, candy)  # candy배열 갱신 --> 시간복잡도가 늘어난다는 단점
    print(cnt)


for i in range(int(input())):
    process()
