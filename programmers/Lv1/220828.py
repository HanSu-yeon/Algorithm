def solution(s):
    res = ""
    mid_idx = len(s)//2
    if len(s) % 2 == 0:

        res = s[mid_idx-1]+s[mid_idx]
    else:
        res = s[mid_idx]
    return res
