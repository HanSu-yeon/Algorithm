import sys
sys.stdin = open("input.txt", "r")

avg_n = int(input())
avg_arr = list(map(int, input().split()))

res = [0 for _ in range(avg_n)]
res[0] = avg_arr[0]
for i in range(1, avg_n):

    res[i] = ((avg_arr[i]*(i+1))-sum(res))

for x in res:
    print(x, end=' ')
