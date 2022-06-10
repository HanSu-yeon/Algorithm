import sys
sys.stdin=open("input.txt","rt")

n = int(input())
numList = list(map(int, input().split()))

lt=0
rt=n-1
lastNum=0
resultStr=""
tmp=[]

while lt<=rt: #양쪽에서 좁혀들어가기
  if numList[lt] > lastNum:
    tmp.append((numList[lt], 'L'))
  if numList[rt] > lastNum:
    tmp.append((numList[rt], 'R'))
  #둘 중 작은 값을 선택해서 수열의 다음 값으로 넣기
  tmp.sort()
  if len(tmp) == 0:
    break
  else:
    resultStr = resultStr+tmp[0][1] #tmp배열의 0번 인덱스 요소의 1번 인덱스 값 = 문자
    lastNum = tmp[0][0]
    if tmp[0][1]=='L':
      lt+=1
    else:
      rt-=1
  tmp.clear()
print(len(resultStr))
print(resultStr)