import sys
sys.stdin = open("input.txt","rt")

#아나그램 - 아스키넘버 사용한 풀이
#아스키넘버에서 대문자 A~Z =65~90, 소문자 a~z =97~122
a=input()
b=input()
str1=[0]*52 #대소문자 총 개수 52
str2=[0]*52
#문자열a 해싱
for x in a:
  if x.isupper(): #대문자면
    #문자를 아스키로 변환 --> ord(x)
    #A는 65인데 idx 0에 저장하려면 아스키넘버에서 65를 빼준다
    str1[ord(x)-65]+=1
  else: #소문자a는 97인데 idx 26에 저장하려면 71을 빼준다
    str1[ord(x)-71]+=1
#문자열b 해싱
for x in b:
  if x.isupper(): #대문자면
    #문자를 아스키로 변환 --> ord(x)
    #A는 65인데 idx 0에 저장하려면 아스키넘버에서 65를 빼준다
    str2[ord(x)-65]+=1
  else: #소문자a는 97인데 idx 26에 저장하려면 71을 빼준다
    str2[ord(x)-71]+=1

for i in range(52):
  if str1[i] != str2[i]:
    print("NO")
    break
else:
  print("YES")