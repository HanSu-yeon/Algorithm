import sys
sys.stdin=open("input.txt","rt")

n = int(input())
dic={} #또는 p=dict()으로 내장함수 호출할 수도 있음
for _ in range(n):
  word = input()
  dic[word]=0

for _ in range(n-1):
  word = input()
  dic[word]=1

for k, v in dic.items():
  if v == 0:
    print(k)
    break