### 문제

---

https://www.codetree.ai/missions/5/problems/determine-whether-palindrome-is-present?utm_source=clipboard&utm_medium=text

### 풀이

---

입력받은 원본 문자열과 슬라이싱을 사용해 뒤집은 문자열을 비교하는 함수 작성하였다

또한 이 방법 말고 순회하여 구현하는 방법으로도 풀 수 있다
팰린드롬인지 판단하는 데에는 가운데를 기준으로 대칭인 위치에 있는 문자와 일치하는지를 확인하면 된다

### 코드

---

```python
str = input()

def is_palindrome(str):
    reverse_str = str[::-1]
    if str == reverse_str:
        return True
    else:
        return False


if is_palindrome(str):
    print("Yes")
else:
    print("No")

```
