import sys
sys.stdin = open("input.txt", "r")

n = int(input())

cnt = 0
k = 1
while n != 0:

    if n >= k:
        cnt += 1
        n = n-k
        k += 1
    else:
        k = 1
print(cnt)
