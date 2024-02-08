/*
문제 분석
1. 참가 선수는 최대 10만명 => 시간복잡도는 O(NlogN) 또는 O(N)인 알고리즘을 찾는다
    - 하나하나 대조: O(N^2)예상
    - key로 바로 접근하는 방식인 해싱 알고리즘 사용하면 해결할 수 있을 거 같음
2. key가 중복인 경우에 어떻게 처리할 지도 고민해야 함

*/

function solution(participant, completion) {
  let participantHashMap = new Map(); //해시 테이블 생성

//참가자들 이름을 key로 지정해 해시 테이블에 추가
  for (i = 0; i < participant.length; i++) {
    if (!participantHashMap.has(participant[i])) {
      participantHashMap.set(participant[i], 1);
    } else {
        //참가자 이름이 있으면 value를 1증가 시킴
      let value = participantHashMap.get(participant[i]) + 1;
      participantHashMap.set(participant[i], value);
    }
  }
  //완주한 선수들의 이름을 key로 조회해 value를 1씩 감소
  for (j = 0; j < completion.length; j++) {
    let newValue = participantHashMap.get(completion[j]) - 1;
    participantHashMap.set(completion[j], newValue);
  }
  //완주하지 못한 선수(= value가 1이상인 참가자)
  for (let[k, v] of participantHashMap){
      if(v > 0){
          return k;
      }
  }
}