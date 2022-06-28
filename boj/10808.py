import sys
sys.stdin=open("input.txt","r")

S = input()
alphabetCheck=[0]*26

# 문자열S를 반복문 돌려 원소(x)를 꺼낸다 --> ord(x)함수를 사용해 문자를 아스키코드로 변환

for x in S:
  idx=ord(x)-97
  alphabetCheck[idx]+=1

#공백으로 구분해서 출력
for y in alphabetCheck:
  print(y, end=' ')