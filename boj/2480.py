import sys
sys.stdin = open("input.txt", "r")

a, b, c = map(int, input().split())

answer = 0
if a == b and b == c and a == c:
    answer = 10000+(a*1000)
    print(answer)
elif a == b and b != c and a != c:
    answer = 1000+(a*100)
    print(answer)

elif a != b and b == c and a != c:
    answer = 1000+(b*100)
    print(answer)

elif a != b and b != c and a == c:
    answer = 1000+(a*100)
    print(answer)
elif a != b and b != c and a != c:
    answer = max(a, b, c)*100
    print(answer)


# 다른 사람 풀이
# 1. 정렬된 리스트로 받는다
lst = sorted(list(map(int, input().split())))
# 2. set()을 했을때 len이 1이면 -> 모두 같은 수
if len(set(lst)) == 1:
    print(10000+(lst[0]*1000))
# 3. len이 2면 --> 두 수가 같다, 중간값은 같은 수다
elif len(set(lst)) == 2:
    print(1000+(lst[1]*100))
# 4. 모두 다른 수라면 -> 배열의 맨 끝 수가 가장 큰 수
else:
    print(lst[2]*100)
