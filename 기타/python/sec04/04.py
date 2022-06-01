import sys
sys.stdin = open("input.txt","r")

n=int(input())
#회의들을 리스트에 저장
meeting=[]

for i in range(n):
  start, end = map(int, input().split())
  meeting.append((start, end)) #시작시간과 끝나는 시간을 tuple형태로 삽입
#print(meeting) -->[(1, 4), (2, 3), (3, 5), (4, 6), (5, 7)]
meeting.sort(key=lambda x : (x[1], x[0]))  #x(tuple자료)를 x[1]기준으로 즉 끝나는 시간 기준으로 정렬해라
# print(meeting) --> [(2, 3), (1, 4), (3, 5), (4, 6), (5, 7)]
endTime=0
cnt=0
for start, end in meeting:
  if start>=endTime:  #다음 회의 시작 시간이 endTime에 저장된 값보다 크거나 같으면
    endTime=end #다음 회의 시간의 끝나는 시간을 저장함
    cnt+=1
print(cnt)