import sys
sys.stdin = open("input.txt", "r")

n, m = map(int, input().split())
a, b = input().split()
alpha = {"A": 3, "B": 2, "C": 1, "D": 2, "E": 4,
         "F": 3, "G": 1, "H": 3, "I": 1, "J": 1,
         "K": 3, "L": 1, "M": 3, "N": 2, "O": 1,
         "P": 2, "Q": 2, "R": 2, "S": 1, "T": 2,
         "U": 1, "V": 1, "W": 1, "X": 2, "Y": 2, "Z": 1}
mix_name = ''

if n > m:
    for i in range(m):
        mix_name += a[i]
        mix_name += b[i]

    mix_name += a[m:]
elif n <= m:
    for i in range(n):
        mix_name += a[i]
        mix_name += b[i]

    mix_name += b[n:]

alpha_to_num = []
for x in mix_name:
    alpha_to_num.append(alpha[x])


res = [0]*len(alpha_to_num)

while True:

    if len(alpha_to_num) == 2:
        break
    for i in range(len(alpha_to_num)-1):
        sum = alpha_to_num[i]+alpha_to_num[i+1]
        if sum < 10:
            alpha_to_num[i] = sum
        elif sum >= 10:
            alpha_to_num[i] = int(str(sum)[-1])
    alpha_to_num = alpha_to_num[:-1]

# 결과값 출력
for i in range(2):
    if i == 0 and alpha_to_num[i] == 0:
        continue
    else:
        print(alpha_to_num[i], end='')

print("%", end='')


# 다른 사람 풀이
'''
1. 문자열 처리
2. 문자열을 숫자로 변경
3. 두자리 숫자가 나올때까지 계산
4. 결과값 출력
'''
