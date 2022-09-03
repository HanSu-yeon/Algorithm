import sys
sys.stdin = open("input.txt", "r")

str = input()
word = input()

cnt = 0
while True:
    pos = str.find(word)
    if pos == -1:
        print(cnt)
        break
    else:
        start = pos+len(word)
        cnt += 1
        str = str[start:]

# 다른 사람 풀이
str = input()
word = input()

index = 0
result = 0

while len(str)-index >= len(word):
    if str[index:index+len(word)] == word:  # 문자열에서 보고 있는 단어가 찾고자 하는 단어인 경우
        result += 1
        index += len(word)
    else:
        index += 1
print(result)
