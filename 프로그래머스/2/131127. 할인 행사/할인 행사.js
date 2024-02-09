function solution(want, number, discount) {
  let answer = 0;
  let wishList = new Map();
  //원하는 상품과 개수를 Map에 담음
  for (let i = 0; i < want.length; i++) {
    wishList.set(want[i], number[i]);
  }
  // console.log('wishList', wishList);

  //멤버십 시작일 기준으로 할일 받을 수 있는 품목과 개수
  for (let membershipStart = 0; membershipStart < discount.length - 9; membershipStart++) {
    let isPossibleList = new Map();
    let copyWishList = new Map(wishList);
    for (let j = membershipStart; j < membershipStart + 10; j++) {
      isPossibleList.set(discount[j], (isPossibleList.get(discount[j]) || 0) + 1);
    }

    // console.log('mebershipStart', membershipStart);
    // console.log('isPossibleList', isPossibleList);
    for (let [k, v] of isPossibleList) {
      // console.log('key', k, v);
      //일치하는 품목이 있으면 삭제
      if (wishList.get(k) == isPossibleList.get(k)) {
        copyWishList.delete(k);
      } else {
        break;
      }
    }
    
    if (copyWishList.size == 0) {
      answer += 1;
    }
  }
  return answer;
}
