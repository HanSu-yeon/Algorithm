import sys
sys.stdin=open("input.txt", "rt")


'''3개의 체크리스트가 필요
1. 행 체크
2. 열 체크
3. 그룹 체크
'''



def check(tmp):
  #행과 열 탐색
  for i in range(9):
    rowChecklist=[0]*10
    columnChecklist=[0]*10
    for j in range(9):
      rowChecklist[tmp[i][j]]=1
      columnChecklist[tmp[j][i]]=1
    if sum(rowChecklist)!=9 or sum(columnChecklist)!=9:
      return False
  #4중for문 돌면서 3x3 총 9그룹 탐색
  for i in range(3):
    for j in range(3):
      groupChecklist=[0]*10
      for k in range(3):  #숫자 하나하나 확인
        for s in range(3):
          groupChecklist[tmp[i*3+k][j*3+s]]=1 #k=0 s=0,1,2 k=1 s=0,1,2...
      if sum(groupChecklist)!=9:
        return False
  return True
      

#스도쿠 정보 받아오기
a=[list(map(int, input().split())) for _ in range(9)]

if check(a):
  print("YES")
else:
  print("NO")