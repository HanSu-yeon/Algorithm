/**
 * 문제: 베스트앨범
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */

//풀이 참고
function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  //1. 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    genre = genres[i];
    play = plays[i];
    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }
    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  //2. 총 재생 횟수가 많은 장르순으로 정렬
  sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  //3.각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  for (const genre of sortedGenres) {
    sortedSongs = genresObj[genre].sort((a, b) => {
      //재생 횟수가 같으면 고유 번호 작은 곡이 먼저 오도록 함
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });
    answer.push(...sortedSongs.slice(0, 2).map(song => song[0]));
  }
  return answer;
}
console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
