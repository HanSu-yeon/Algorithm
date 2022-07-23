import sys
sys.stdin=open("input.txt","r")

n, s = map(int, input().split())
arr= list(map(int, input().split()))

def DFS(L, sum):
  global count
  if L>=n:
    return 

  sum+=arr[L]
  if sum==s:
    count+=1
  
  DFS(L+1,sum)
  DFS(L+1,sum-arr[L]) 
    
if __name__=="__main__":
  count=0
  sum=0
  DFS(0,0)
  print(count)