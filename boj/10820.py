'''
문자열 N개가 주어진다. 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.
'''
import sys
sys.stdin=open("input.txt","r")

#소문자, 대문자, 숫자, 공백순으로 개수 출력
'''
input()대신 sys.stdin.readline()을 사용해 시간초과 대비
또 이것은 한줄 단위로 입력받기 때문에 개행문자가 같이 입력 받아진다 --> 제거해줘야함
'''

while True:
  line = sys.stdin.readline().rstrip('\n')
  if not line:
    break

  small=0
  capital=0
  num=0
  blank=0
  for x in line:
    if x.islower():
      small+=1
    elif x.isupper():
      capital+=1
    elif x.isdigit():
      num+=1
    elif x.isspace(): #공백 검사
      blank+=1
  print(small, capital, num, blank)
  