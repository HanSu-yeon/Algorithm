import sys
sys.stdin = open("input.txt", "r")

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
