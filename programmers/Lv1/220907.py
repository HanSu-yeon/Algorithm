def solution(s):

    num_dic = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
               "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}

    for x in num_dic:
        if x in num_dic:
            s = s.replace(x, num_dic[x])
    return int(s)


# 다른 사람 풀이
# .items()를 사용하여 딕셔너리에서 key와 value를 한꺼번에 같이 출력했다
num_dic = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
           "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}


def solution(s):

    answer = s
    for key, value in num_dic.items():
        answer = answer.replace(key, value)
    return int(answer)
