import sys
sys.stdin = open("input.txt", "r")


def solution(pList):
    global minTime

    for i in range(len(pList)):
        curTime = sum(pList[:i+1])
        minTime += curTime
    return minTime


if __name__ == "__main__":
    n = int(input())
    pList = list(map(int, input().split()))
    pList.sort()
    minTime = 0
    solution(pList)
    print(minTime)
