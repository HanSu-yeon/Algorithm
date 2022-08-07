import sys
import hashlib
sys.stdin = open("input.txt", "r")

'''
1. hashlib의 sha256함수 이용하면 SHA256해시 구할 수 있음
2. hashlib.sha256(문자열의 바이트 객체).hexdigest(): 해시 결과 문자열
'''
data = input()
encoded = data.encode()
result = hashlib.sha256(encoded).hexdigest()

print(result)
