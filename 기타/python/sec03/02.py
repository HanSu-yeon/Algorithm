import sys
sys.stdin=open("input.txt","rt")

value = input()
num=0
for x in value:
  if x.isdecimal():
    num=num*10+int(x)  #--> 첫 자리의 0은 무시된다
print(num)

cnt=0
for i in range(1,num+1):
  if num%i==0:
    cnt+=1
print(cnt)