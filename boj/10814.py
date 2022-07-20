import sys
sys.stdin=open("input.txt","r")

#1. 나이가 증가하는 순
#2. 나이가 같으면 먼저 가입한 사람순

n = int(input())
userList= list()
for _ in range(n):
  user = input().split()
  
  userList.append((int(user[0]), user[1])) #tuple로 묶는다

userList = sorted(userList, key=lambda x: x[0]) #나이 기준으로 정렬, 나머지 원소들은 stable한 속성을 가진다 
#stable하다라는건? 기본적으로 리스트에서 원래 앞에 있던 원소들이 정렬된 이후에도  그대로 앞에 놓이도록 하는 특성
for x in userList:
  print(x[0], x[1])