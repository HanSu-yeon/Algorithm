//문제: 오픈 채팅방
//링크: https://xn--school-v542a.programmers.co.kr/learn/courses/30/lessons/42888

function solution(records) {
  const nicknameObj = {};
  const messageObj = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.',
  };
  const result = [];

  //유저 아이디의 최종 닉네임을 저장
  for (const msg of records) {
    const words = msg.split(' ');
    if (words[0] === 'Enter' || words[0] === 'Change') {
      nicknameObj[words[1]] = words[2];
    }
  }

  for (const msg of records) {
    const words = msg.split(' ');
    if (words[0] !== 'Change') {
      let sentence = `${nicknameObj[words[1]]}님이 ${messageObj[words[0]]}`;
      result.push(sentence);
    }
  }
  return result;
}

console.log(solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']));
