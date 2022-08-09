def solution(phone_number):
    answer = ''
    front = len(phone_number)-4
    back = phone_number[-4:]
    answer += '*'*front
    answer += back
    return answer
