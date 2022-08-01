import sys
sys.stdin = open("input.txt", "r")

n, m = map(int, input().split())
arr_n = list(map(int, input().split()))
gab = sum(arr_n)
res = 0
for i in range(n-2):
    for j in range(i+1, n-1):
        for k in range(j+1, n):
            sum_tmp = arr_n[i]+arr_n[j]+arr_n[k]
            if sum_tmp <= m and (m-sum_tmp) <= gab:
                gab = m-sum_tmp
                res = sum_tmp
print(res)
