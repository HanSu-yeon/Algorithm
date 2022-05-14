import math
import sys
sys.stdin=open("input.txt", "rt")

n = int(input())
a = list(map(int, input().split()))

average = sum(a)/n #평균 구하기
average = average+0.5
average = int(average)
min = 2147000000  #정수의 최대 값

#abs(): 절대값 함수
#idx: 학생번호, x: idx번 학생의 성적
for idx, x in enumerate(a):
  tmp = abs(x-average)  #학생 성적 - 평균 = 거리값
  #tmp 거리값이 가장 작아야 평균에 가장 가깝다는 뜻
  if tmp < min:
    min = tmp
    score = x  #score변수에 학생의 점수 저장 --> 왜? 거리값이 같았을때는 더 큰 점수를 가진 학생이 답이 된다
    res = idx+1 #idx는 0부터 시작--> 실제 학생 번호는 +1해줌
  elif tmp == min: #거리(abs)가 같은 경우가 나오면
    if x > score: #점수 크기 비교   
      score =x
      res = idx+1
print(average, res)