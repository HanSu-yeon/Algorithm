import sys
sys.stdin = open("input.txt", "r")

n = int(input())
arr = list(map(int, input().split()))
arr.sort()
res = set(arr)
print(*res)
