import sys
sys.stdin=open("input.txt","r")
#내가 푼 방식
S=input()
check=[-1]*26

for idx, val in enumerate(S):
  if check[ord(val)-97] == -1:
    check[ord(val)-97]=idx
  
for x in check:
  print(x, end=' ')

#다른 사람 코드
'''
ord(문자): 문자에 해당하는 유니코드 정수를 반환
chr(정수): 정수에 해당하는 유니코드 문자를 반환
'''
s = input()

for i in range(ord('a'), ord('z')+1):
  #find(문자)는 처음 발견되는 문자의 위치를 찾아서 1을 찾아 반환, 찾지 못한다면 -1을 반환
    print(s.find(chr(i)), end=' ') 