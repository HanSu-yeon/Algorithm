/**문제: 영어 끝말잇기
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
  let saidWord = new Set();
  let result = [];
  let person = 0;
  let round = 1;
  let preWord = '';

  for (let i = 0; i < words.length; i++) {
    person = (i % n) + 1;
    //1번 순서가 돌아오면 라운드 증가
    if (i !== 0 && person == 1) {
      round++;
    }
    //이전 사람이 말한 단어의 마지막 문자로 시작하는지 체크
    if (preWord !== '' && preWord !== words[i].slice(0, 1)) {
      result.push(person, round);
      return result;
    } else if (saidWord.has(words[i])) {
      //단어 중복 체크
      result.push(person, round);
      return result;
    } else {
      saidWord.add(words[i]);
      preWord = words[i].slice(-1);
    }
  }
  return [0, 0];
}

//다른 풀이
function solution(n, words) {
  usedWords = new Set(); //이미 사용한 단어를 저장하는 set
  prevWord = words[0][0]; //이전 단어의 마지막 글자

  for (i = 0; i < words.length; i++) {
    word = words[i];
    //이미 사용한 단어거나 첫 글자가 이전 단어와 일치하지 않으면
    if (usedWords.has(word) || word[0] !== prevWord) {
      //탈락하는 사람의 번호와 차례를 반환
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    usedWords.add(word); //사용한 단어로 추가
    prevWord = word.slice(-1); //이전 단어의 마지막 글자 업데이트
  }
  return [0, 0]; //모두 통과했을 경우 반환값
}
// //중복
console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
//끝 단어와 맞지 않을때
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
);
