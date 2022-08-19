# 같은 숫자는 싫어
def solution(arr):
    res = []
    for x in arr:
        if len(res) != 0 and res[-1] == x:
            continue
        else:
            res.append(x)
    return res


# 다른 사람 풀이
def solution(arr):
    res = []
    for x in arr:
        if (len(res) == 0) or res[-1] != x:
            res.append(x)
    return res
