import sys
sys.stdin=open("input.txt", "r")
#해당 문제를 풀지 말지 결정해야함 
#접근 방법: 문제들을 전체 집합으로 본다 {1, 2, 3, 4, 5}
#          전체 집합에서 선택한 문제를 부분집합으로 본다 {1,2,3}
'''
        1
        /\
      푼다 안푼다
      2
     /\
    푼 안푼
    
  기존 답보다 점수가 더 높으면 교체
'''
def DFS(L, sum, time):
  global res
  if time>m:
    return
  if L==n:
    if sum>res:
      res=sum
  else:
    #문제 푼다
    #problemScore[L]: L번째 문제 점수
    DFS(L+1, sum+problemScore[L], time+problemTime[L])
    #안푼다
    DFS(L+1, sum, time)

if __name__=="__main__":
  n, m =map(int, input().split())
  problemScore=list()
  problemTime=list()
  for i in range(n):
    a, b=map(int, input().split())
    problemScore.append(a)
    problemTime.append(b)
  res=-2147000000
  DFS(0,0,0) #DFS(문제, 총점, 시간) 0이 첫 번째 문제
  print(res)