import sys
sys.stdin=open("input.txt","r")


n = int(input())
nums = list(map(int, input().split()))
m = int(input())

nums.sort()


for _ in range(m):
  nums[0]+=1 #최소값 1증가
  nums[n-1]-=1 #최대값 1감소
  nums.sort() #재정렬


res=nums[n-1]-nums[0]
print(res)