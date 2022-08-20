# lv2 기능 개발 - 큐 사용
import math


def solution(progresses, speeds):

    res = []
    queue = []
    for i in range(len(progresses)):

        # 남은 작업일수
        days = math.ceil((100-progresses[i])/speeds[i])
        queue.append(days)

    front = queue.pop(0)
    cnt = 1  # 배포 개수

    while queue:
        # 앞 기능보다 뒷기능이 늦게 구현
        if front < queue[0]:
            res.append(cnt)
            front = queue.pop(0)
            cnt = 1
        else:  # 앞 기능보다 뒷 기능이 먼저 구현 or 동시 구현
            queue.pop(0)
            cnt += 1
    res.append(cnt)
    return res
