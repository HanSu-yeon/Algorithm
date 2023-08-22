### 문제

---

https://www.codetree.ai/missions/5/problems/factorial?utm_source=clipboard&utm_medium=text

### 풀이

---

팩토리얼의 n! = n \* (n-1)! 공식을 활용
n! = 1부터 n까지의 수를 곱한 값을 의미
n부터 시작하여 1까지의 곱을 구 해주는 재귀함수를 작성하여 해결

### 코드

---

```python
n = int(input())

def factorial(n):

    if n == 0:
        return 1

    return factorial(n-1)*n


print(factorial(n))

```
