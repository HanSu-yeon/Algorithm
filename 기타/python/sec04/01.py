import sys
sys.stdin=open("input.txt","rt")

n, searchValue = map(int, input().split())
arr = list(map(int,input().split()))
arr.sort() #오름차순 정렬

start=0
end=n-1
#시작점과 끝점 사이의 가운데 값을 계속해서 확인하는 루프를 시작
while start <= end:
  mid=(start+end)//2 #중간 지점 찾기
  if searchValue == arr[mid]: #중간 지점의 값이 찾고 있던 값이면 출력
    print(mid+1) #"번째"출력이니까 +1
    break
  elif searchValue < arr[mid]:
    #searchValue는 중간지점보다 앞쪽에 있다는 의미 --> end변경
    end=mid-1
  else:
    start=mid+1
 