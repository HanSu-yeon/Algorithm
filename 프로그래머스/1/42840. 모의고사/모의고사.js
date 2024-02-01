function solution(answers) {
  let scores = [0, 0, 0];

  let patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] == patterns[j][i % patterns[j].length]) {
        console.log(i % patterns[j].length);
        scores[j] += 1;
      }
    }
  }

  let maxScore = Math.max(...scores);

  let answer = [];
  for (k = 0; k < scores.length; k++) {
    if (maxScore == scores[k]) {
      answer.push(k + 1);
    }
  }
  return answer;
}