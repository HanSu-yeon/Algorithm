//문제: 할인 행사
//링크: https://school.programmers.co.kr/learn/courses/30/lessons/131127

//내가 시도한 방식 => 틀림
function solution(want, number, discount) {
  let obj = {};
  //원하는 제품과 개수를 key-value로 저장
  for (i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  let initobj = JSON.parse(JSON.stringify(obj));
  let start = 0;
  let end = 10;
  let answer = 0;
  while (end <= discount.length) {
    for (i = start; i < end; i++) {
      if (obj[discount[i]]) {
        obj[discount[i]] -= 1;
      } else {
        end += 1;
        i = start;
        start += 1;
        obj = JSON.parse(JSON.stringify(initobj));
        break;
      }
    }

    let flag = false;
    for (const key in obj) {
      if (obj[key] > 0) {
        start += 1;
        end += 1;
        break;
      } else {
        flag = true;
      }
    }
    // flag = true;
    if (flag) {
      answer += 1;
      start += 1;
      end += 1;
      obj = JSON.parse(JSON.stringify(initobj));
    }
  }
  return answer;
}

//다른 사람 풀이
//두 오브젝트가 동일한지 확인하는 함수
function isShallowEqual(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  //만약 두 오브젝트에 등록된 값이 다르다면 false
  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    //키에 해당하는 값이 다르다면 false
    if (value1 !== value2) {
      return false;
    }
  }
  //모든 키 값이 일치한다면 true
  return true;
}
function solution(want, number, discount) {
  let wantObj = {};
  //want배열을 오브젝트로 변환
  for (i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0; //총 일수를 계산할 변수 초기화

  //특정일 i에 회원가입시 할인받을 수 있는 품목 체크
  //9를 빼는 이유: 특정일 기준으로 10일간 쇼핑을 해야 하기 때문
  for (let i = 0; i < discount.length - 9; i++) {
    //i일 회원가입시 할인받는 제품 및 개수를 담을 오브젝트
    const discount10d = {};

    //i일 회원가입시 할인받는 제품 및 개수로 오브젝트 구성
    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        //discount10d[discount[j]]가 비어 있다면 0으로 기본값 설정
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }

    //할인하는 상품의 개수가 원하는 수량과 일치하면 정답 변수에 1추가
    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }
  return answer;
}
console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana']
  )
);
console.log(solution(['apple'], [10], ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana']));
