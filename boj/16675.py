import sys
sys.stdin = open("input.txt", "r")

# SPR -> 012나타냄

ML, MR, TL, TR = ('SPR'.index(i) for i in input().split())

# 나 상대
# 0  2 -> 2(R) 승
# 1  0 -> 0(S) 승
# 2  1 -> 1(P) 승

# ML과 MR이 같을때 TL,TR에 ML을 이기는 수가 있다면
# (ML+2)%3 in [TL,TR]: 내거보다 +2한것에 %3한 값이 TL이나 TR에 있다면 상대방이 이긴다
if ML == MR and (ML+2) % 3 in [TL, TR]:
    print("TK")
elif TL == TR and (TL+2) % 3 in [ML, MR]:
    print("MS")
else:
    print('?')
