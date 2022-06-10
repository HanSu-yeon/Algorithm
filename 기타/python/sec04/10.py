import sys
sys.stdin=open("input.txt", "r")

n = int(input())
reverseList=list(map(int, input().split())) #역수열
seq=[0]*n  #0~n-1 인덱스까지 사용

for i in range(n): #i는 0~n-1까지. i가 0이면 1로 생각해 처리하기
    for j in range(n):  #reverseList[i]는 i라는 숫자 앞에 몇개의 큰 수가 있냐. i는 0부터 도니까 사실상 i+1이랑 같음
        if reverseList[i] == 0 and seq[j] == 0: #자기 자리 찾아 들어간다면. 
            #if reverseList[i] == 0 --> 자기 앞에 빈공간 확보했다   seq[j]==0 --> 빈자리 의미
            seq[j] = i+1
            break #안쪽 for문 break
        elif seq[j] == 0: #빈자리 발견하면
            reverseList[i]-=1 #역수열의 i값을 1개 빼줘라

for x in seq:
    print(x, end=' ')   

#i를 1부터 돌리고싶으면 아래처럼 수정

n = int(input())
reverseList=list(map(int, input().split())) #역수열
reverseList.insert(0, 0) #1부터 들어갈 수 있게 0을 미리 넣어준다
seq=[0]*n


for i in range(1, n+1):
    for j in range(n):
        if reverseList[i] == 0 and seq[j] == 0:
            seq[j]=i
            break
        elif seq[j]==0:
            reverseList[i]-=1
for x in seq:
    print(x, end=' ')