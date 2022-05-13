import sys
sys.stdin=open("input.txt", "rt")

T = int(input()) #테스트 케이스 수

for t in range(T):
  n, s, e, k = map(int, input().split()) 
  n_list = list(map(int, input().split()))
  
  n_list = n_list[s-1:e]
  n_list.sort() 
  print("#%d %d" %(t+1, n_list[k-1]))
 
