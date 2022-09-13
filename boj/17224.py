import sys
sys.stdin = open("input.txt", "r")

# N: 문제 개수, L:현정이 역량, K:문제 최대 개수
N, L, K = map(int, input().split())
problems = []
for _ in range(N):
    prob = list(map(int, input().split()))
    problems.append(prob)

problems.sort(key=lambda x: x[1])
score = 0

for x in problems:
    if K == 0:
        break

    if x[1] <= L:
        score += 140
        K -= 1
    elif x[1] > L and x[0] <= L:
        score += 100
        K -= 1
    else:
        K -= 1
print(score)


# 다른 사람 풀이
N, L, K = map(int, input().split())
easy, hard = 0, 0
for _ in range(N):
    sub1, sub2 = map(int, input().split())
    if sub2 <= L:
        hard += 1
    elif sub1 <= L:
        easy += 1

# hard
answer = min(hard, K)*140
# easy
if hard < K:
    answer += min(easy, K-hard)*100

print(answer)
