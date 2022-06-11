#뮤직비디오

#이분탐색
# 1 2 3 4 5 6 7 8 9
# 최소1 ~ 최대 45 --> (1+45)/2 =23
# dvd용량이 23일때 --> (1,2,3,4,5,6) (7,8) (9)  --> 앨범 3개 나옴 --> 조건 만족
#더 좋은 조건 탐색
#범위를 1~ 22 --> (1+22)/3 = 11
#dvd 용량이 11 --> (1,2,3,4) (5,6) (7)(8)(9) --> 앨범이 5개 나옴
#--> 용량이 11보다 작게 잡으면 dvd의 총 개수는 늘어난다
#탐색 범위 수정 --> 12~22 --> (12 + 22)/2 = 17
#dvd 용량이 17 --> (1,2,3,4,5)(6,7)(8,9)

import sys
sys.stdin = open("input.txt", "r")

#Count함수: capacity(용량)이 넘어왔을때 n곡을 다 저장하려면 dvd 몇 장이 필요한지 리턴해주는 함수
def Count(capacity):
  cnt=1
  sum=0 #dvd에 저장되는 노래 시간들을 누적해서 저장
  for x in musicTimeList:
    if sum+x > capacity: #용량 초과
      cnt+=1 #새로운 dvd 추가
      sum=x #초기화하고 새로 저장될 값(x) 넣어주기
    else: #기존 dvd에 계속 저장할 수 있다면
      sum+=x
  return cnt

n, m= map(int, input().split())
musicTimeList = list(map(int, input().split()))

lt=1
rt=sum(musicTimeList)
res=0
while lt<=rt:
  mid=(lt+rt)//2  #mid: dvd 1장 용량
  if Count(mid) <= m: #필요한 dvd개수가 m이하
    res=mid
    #더 좋은 조건 탐색. 용량의 최소를 찾아야 함
    rt=mid-1 #더 작은쪽으로 좁혀서 가야함
  else:
    #용량이 작아서 더 큰걸 찾아야 함
    lt=mid+1
print(res)