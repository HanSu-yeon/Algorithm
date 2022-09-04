import sys
sys.stdin = open("input.txt", "r")


n, m = map(int, input().split())
nm = [[0]*m for _ in range(n)]

# 입력값 넣기
for i in range(n):
    data = input()
    for j in range(m):
        if data[j] == 'X':
            nm[i][j] = data[j]


row_cnt = 0
col_cnt = 0
res = []
# 행 기준, 열 기준으로 필요한 경비원의 수를 각각 계산하여 더 큰 수 출력
for x in nm:
    if 'X' not in x:
        row_cnt += 1
res.append(row_cnt)
for col in zip(*nm):
    if 'X' not in col:
        col_cnt += 1
res.append(col_cnt)

print(max(res))
