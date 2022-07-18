import sys
sys.stdin=open("input.txt","r")

#a~z == 97~122
arr=[0]*28
for i in range(50):
  str= sys.stdin.readline().rstrip()
  str= str.replace(" ","")
  for x in str:
    arr[ord(x)-97]+=1

res = max(arr)
for j in range(len(arr)):
  if arr[j] == res:
    print(chr(j+97), end='')



#----------다른 사람 풀이----------
str = ''.join(sys.stdin.readlines())

alpha = 'abcdefghijklmnopqrstuvwxyz'
M = max(str.count(x) for x in alpha)
for x in alpha:
  if str.count(x) == M:
    print(x, end='')