import sys
sys.stdin = open("input.txt", "r")


n = int(input())
arr = []
for _ in range(n):
    x, y = map(int, input().split())
    arr.append((x, y))

arr = sorted(arr, key=lambda x: (x[1], x[0]))
for e in arr:
    print(e[0], e[1])
