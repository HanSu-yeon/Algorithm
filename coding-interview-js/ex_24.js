/**
 * 문제: 신고 결과 받기
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */
//내가 푼 방식
function solution(id_list, report, k) {
  //신고 정보와 신고 당한 횟수 저장할 객체
  const reportObj = {};
  const userReportCnt = {};
  let answer = [];
  //각 userId마다 신고한 유저를 저장하고 신고당한 횟수를 센다
  report.forEach(item => {
    let [userId, reportedId] = item.split(' ');

    if (!reportObj[userId]) {
      reportObj[userId] = new Set(); //중복 신고 방지를 위해 Set 사용
    }
    if (!userReportCnt[reportedId]) {
      userReportCnt[reportedId] = 0;
    }

    if (!reportObj[userId].has(reportedId)) {
      reportObj[userId].add(reportedId);
      userReportCnt[reportedId] += 1;
    }
  });

  // console.log(reportObj);
  // console.log(userReportCnt);

  //k번 이상 신고당한 유저 목록
  let userIdOverK = new Set(Object.keys(userReportCnt).filter(userId => userReportCnt[userId] >= k));

  //각 유저가 처리된 결과를 계산
  id_list.forEach(userId => {
    let cnt = 0;
    //해당 유저가 신고한 목록이 있고, 그 중에 k번 이상 신고된 유저가 있는지 확인
    if (reportObj[userId]) {
      reportObj[userId].forEach(reportedId => {
        if (userIdOverK.has(reportedId)) {
          cnt++;
        }
      });
    }
    answer.push(cnt);
  });

  return answer;
}

//다른 풀이 참고
function solution(id_list, report, k) {
  const reportedUser = {}; //신고당한 유저 - 신고 유저 집합을 저장할 오브젝트
  const count = {}; //처리 결과 메일을 받은 유저 - 받은 횟수를 저장할 오브젝트
  //신고 기록 순회
  for (const r of report) {
    const [userId, reportedId] = r.split(' ');

    if (reportedUser[reportedId] === undefined) {
      //신고당한 기록이 없다면
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId); //신고한 사람의 아이디를 집합에 담아 오브젝트에 연결
  }
  //신고당한 유저별로 신고당한 횟수를 확인
  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      //정지 기준에 만족하는지 확인
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }
  const answer = [];
  //각 아이디별 메일을 받은 횟수를 순서대로 정리
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }
  return answer;
}

console.log(solution(['muzi', 'frodo', 'apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2));
// console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
