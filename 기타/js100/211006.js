//문제 27 학생의 이름이 key이고 value가 수학 점수인 객체를 출력

let inputName = prompt("학생 이름").split(" "); //"hh ss yy"
let score = prompt("점수").split(" "); //"50 70 80"

//JSON객체 key값 동적 할당하기
/*객체로 만들 부분을 빈 배열로 만들고 
[]방식으로 프로퍼티를 설정하면 키 값을 동적으로 설정 할 수있다 */

const info = {};
for (let i = 0; i < inputName.length; i++) {
  info[inputName[i]] = parseInt(score[i], 10);
}

console.log(info); //{hh: 50, ss: 70, yy: 80}

//문제 28 2-gram
// let w = "Javascript";

// for (let i = 0; i < w.length - 1; i++) {
//   console.log(w[i], w[i + 1]);
// }

// //문제 29 대문자만 지나가세요

// let word = prompt("알파벳 하나만 입력");
// if (word == word.toUpperCase()) console.log("YES");
// else console.log("No");

// //문제 30

// /*indexOf()메서드는 호출한 스트링 객체나 배열에서
// 주어진 값과 일치하는 값 혹은 찾는 요소의 첫번째 인덱스를 반환하고
// 존재하지 않으면 -1을 반환한다*/

// let string = prompt("문자열 입력"); //pineapple is yummy
// let searchWord = prompt("찾을 단어"); //apple

// console.log(string.indexOf(searchWord));
