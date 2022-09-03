import sys
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
booklist = dict()
for _ in range(n):
    book = input().rstrip()
    if book not in booklist:
        booklist[book] = 1
    else:
        booklist[book] += 1

target = sorted(booklist.items(), key=lambda x: (-x[1], x[0]))
print(target[0][0])


'''
line14~15과정을 아래처럼 작성할 수도 있다

# .values(): value리스트 만들기
target = max(booklist.values()) #가장 큰 값이 target에 대입
arr = []
# .items(): key, value 쌍 얻기
for book, num in booklist.items():
    if num == target:
        arr.append(book)
print(sorted(arr)[0])

'''
