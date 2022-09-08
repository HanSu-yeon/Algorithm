import sys
sys.stdin = open("input.txt", "r")

n = int(input())
score = list(map(int, input().split()))

print(max(score)-min(score))
