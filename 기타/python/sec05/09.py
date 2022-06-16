import sys
sys.stdin=open("input.txt","rt")

a=input()
b=input()

strHash = dict()
for x in a:
  strHash[x]=strHash.get(x, 0)+1

for y in b:
  strHash[y]=strHash.get(y, 0)-1

for key in a:
  if strHash.get(key)>0:
    print("NO")
    break
else:
  print("YES") 

