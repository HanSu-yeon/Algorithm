import sys
sys.stdin = open("input.txt", "r")


N = int(input())
arr = set()
for _ in range(N):
    arr.add(input())

arr = list(arr)
arr = sorted(arr, key=lambda x: (len(x), x))

for x in arr:
    print(x)
