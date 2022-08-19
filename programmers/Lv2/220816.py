# 오픈 채팅방
def solution(record):
    nick_arr = dict()
    result = []
    # 아이디와 닉네임 저장
    for x in record:
        info = x.split(' ')
        if info[0] == 'Enter' or info[0] == 'Change':
            uid = info[1]
            nick_arr[uid] = info[2]

    for x in record:
        info = x.split(' ')
        if info[0] == 'Enter':
            find_nickname = nick_arr[info[1]]
            str = "%s님이 들어왔습니다." % find_nickname
            result.append(str)

        elif info[0] == 'Leave':
            find_nickname = nick_arr[info[1]]
            str = "%s님이 나갔습니다." % find_nickname
            result.append(str)

    return result
