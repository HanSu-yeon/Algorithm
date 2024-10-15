/**
 * 문제: 신고 결과 받기
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */
//내가 푼 방식 -> 통과 x
// function solution(id_list, report, k) {
//   //1. 신고Obj
//   const reportObj = {};
//   const userReportCnt = {};
//   let answer = [];
//   //각 userId마다 신고한 id를 reportObj에 저장
//   //각 유저id마다 신고당한 횟수
//   for (let i = 0; i < report.length; i++) {
//     let [userId, reportId] = report[i].split(' ');

//     if (!(userId in reportObj)) {
//       reportObj[userId] = [];
//     }
//     if (!(reportId in userReportCnt)) {
//       userReportCnt[reportId] = 0;
//     }
//     if (reportObj[userId] == reportId) {
//       break;
//     }
//     reportObj[userId].push(reportId);
//     userReportCnt[reportId] += 1;
//   }
//   // console.log(reportObj);
//   // console.log(userReportCnt);

//   //신고 수가 k이상인 uid 반환
//   let userIdOverK = [];
//   for (const [key, value] of Object.entries(userReportCnt)) {
//     if (value >= k) {
//       userIdOverK.push(key);
//     }
//   }

//   // console.log(userIdOverK);

//   for (const userId of id_list) {
//     //사용자 -> userIDOverK에 있는 항목이 있으면 cnt
//     let cnt = 0;
//     let flag = true;
//     for (const reportId of userIdOverK) {
//       if (!reportObj[userId]) {
//         answer.push(0);
//         flag = false;
//         break;
//       }
//       // console.log(reportObj[userId].includes(reportId));
//       if (reportObj[userId].includes(reportId)) {
//         cnt++;
//       }
//     }
//     if (flag) {
//       answer.push(cnt);
//     }
//   }
//   return answer;
// }

//다른 풀이 참고
function solution(id_list, report, k) {
  const reportedUser = {};
  const count = {};
  for (const r of report) {
    const [userId, reportedId] = r.split(' ');

    if (reportedUser[reportedId] === undefined) {
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId);
  }
  console.log(reportedUser);

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }
  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }
  return answer;
}

console.log(solution(['muzi', 'frodo', 'apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2));
// console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
