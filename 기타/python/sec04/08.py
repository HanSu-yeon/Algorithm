import sys
from collections import deque
sys.stdin=open("input.txt","rt")

n, limitWeight = map(int, input().split())
weightList = list(map(int, input().split()))

weightList.sort();
cnt=0

while weightList: #list가 비어있지 않으면 True
    if len(weightList)==1: 
        cnt+=1
        break
    if weightList[0]+weightList[-1] > limitWeight:
        weightList.pop() #가장 무거운 사람 삭제(맨뒷사람) = 구명보트타고 탈출했다
        cnt+=1
    else:
        weightList.pop(0) #맨 앞
        weightList.pop()
        cnt+=1
print(cnt)


'''
list에서 pop(0)을 사용하면 내부적으로 앞으로 한칸씩 땡겨준다 --> 비효율적
deque라는 자료구조가 있음
deque란? 앞과 뒤에서 데이터를 처리할 수 있는 양방향 자료형으로, 스택처럼 써도 되고 큐(queue)처럼 써도 된다
'''
#deque를 사용한 풀이

n, limitWeight = map(int, input().split())
weightList = list(map(int, input().split()))

weightList.sort()
weightList = deque(weightList) #리스트를 deque형으로 만듦
cnt=0

while weightList:
    if len(weightList)==1:
        cnt+=1
        break
    if weightList[0]+weightList[-1] > limitWeight:
        weightList.pop()
        cnt+=1
    else:
        weightList.popleft() #맨 앞자료
        weightList.pop()
        cnt+=1
print(cnt)