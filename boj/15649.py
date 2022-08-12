import sys
sys.stdin = open("input.txt", "r")


def DFS(L):
    if L == m:
        for x in res:
            print(x, end=' ')
        print()

    for i in range(1, n+1):
        if checkList[i] == 0:
            checkList[i] = 1
            res.append(i)
            DFS(L+1)
            res.pop()  # 배열 초기화
            checkList[i] = 0  # 체크리스트 초기화


if __name__ == "__main__":
    n, m = map(int, input().split())
    checkList = [0]*(n+1)
    res = []
    DFS(0)
