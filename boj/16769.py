import sys
sys.stdin = open("input.txt", "r")

c = [0, 0, 0]
milks = [0, 0, 0]
# 버킷과 우유 용량
for i in range(3):
    c[i], milks[i] = map(int, input().split())


for i in range(100):
    idx = i % 3  # 0,1,2반복
    next_idx = (idx+1) % 3

    if c[next_idx] >= milks[idx]+milks[next_idx]:  # 다음 양동이 용량 >= 추가할 우유 용량
        milks[next_idx] = milks[idx]+milks[next_idx]
        milks[idx] = 0

    else:  # 다음 양동이 용량 < 추가할 우유 용량
        # 현재우유 = 현재우유양-(다음 양동이 용량-다음 양동이에 들어있는 우유양)
        milks[idx] = milks[idx]-(c[next_idx]-milks[next_idx])
        milks[next_idx] = c[next_idx]


for x in milks:
    print(x)


# 다른 사람 풀이-min(),max() 사용
for i in range(100):
    idx = i % 3
    next_idx = (idx+1) % 3

    milks[idx], milks[next_idx] = max(milks[idx]-(c[next_idx]-milks[next_idx]),
                                      0), min(c[next_idx], milks[idx]+milks[next_idx])


for x in milks:
    print(x)
