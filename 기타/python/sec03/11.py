import sys
sys.stdin=open("input.txt","r")

board=[list(map(int, input().split())) for _ in range(7)]
cnt=0
#i:행, j:열
for i in range(3):
  for j in range(7): 
    tmp=board[j][i:i+5]
    if tmp==tmp[::-1]:
      cnt+=1
    #세로줄은 리스트가 아니니까 slice못쓴다
    for k in range(2): 
      #5//2의 결과인 2만큼만 돈다 -->ex)0열일때 board[0][0]와 board[4][0]비교, board[1][0]와 board[3][0]비교한다
      if board[i+k][j]!=board[i+5-k-1][j]:
        break
    else:
      cnt+=1
print(cnt)