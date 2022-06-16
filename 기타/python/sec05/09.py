import sys
sys.stdin=open("input.txt","rt")

a=input()
b=input()

str1 = dict()
str2 = dict()

for x in a:
  str1[x]=str1.get(x, 0)+1

for y in b:
  str2[y]=str2.get(y, 0)+1 

for i in str1.keys():
  if i in str2.keys():
    if str1[i] != str2[i]: #key의 개수 비교
      print("NO")
      break
  else: #키가 한쪽에만 있다면
    print("NO")
    break
else:
  print("YES")