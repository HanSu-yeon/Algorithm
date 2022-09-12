import sys
sys.stdin = open("input.txt", "r")
'''
N의 제한이 10,000
시간복잡도: O(N)
'''


n = int(input())
s = input()
score = 0
bonus = 0
for i in range(n):
    if s[i] == 'O':
        score += i+1
        score += bonus
        bonus += 1
    elif s[i] == 'X':
        bonus = 0

print(score)

# 다른 사람 풀이
N, S = input(), input()

score, bonus = 0, 0

for idx, OX in enumerate(S):
    if OX == 'O':
        score, bonus = score+idx+1+bonus, bonus+1
    else:
        bonus = 0

print(score)
