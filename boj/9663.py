import sys
sys.stdin = open("input.txt", "r")


# x번째 행에 놓은 Queen에 대해서 검증
def check(x):
    # 이전 행에서 놓았던 모든 Queen들을 확인
    for i in range(x):
        # 위쪽 혹은 대각선을 확인
        if row[x] == row[i]:  # 같은 열에 있다면
            return False
        # 열의 갭(abs(row[x]-row[i]))과 행의 갭(x-i)이 같다면 ==대각선에 위치
        if abs(row[x]-row[i]) == x-i:
            return False
    return True


# x번째 행에 대하여 처리
def dfs(x):
    global result
    if x == n:
        result += 1

    else:
        # x번째 행의 각 열에 Queen을 둔다고 가정
        for i in range(n):  # x번째 행의 i번째 열에 퀸을 둔다
            row[x] = i
            # 해당 위치에 Queen을 두어도 괜찮은 경우
            if check(x):
                # 다음 행으로 넘어가기
                dfs(x+1)


if __name__ == "__main__":
    n = int(input())
    row = [0]*n  # 특정 인덱스의 값 ==x행 i열에 퀸이 위치
    result = 0  # 경우의 수
    dfs(0)  # 매개변수는 몇 번째 행에 대하여 처리하는지
    print(result)
