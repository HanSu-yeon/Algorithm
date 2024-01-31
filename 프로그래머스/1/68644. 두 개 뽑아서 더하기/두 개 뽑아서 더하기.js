function solution(numbers) {
  let dupArr = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      dupArr.push(numbers[i] + numbers[j]);
    }
  }
  let uniqueArr = [...new Set(dupArr)].sort((a, b) => a - b);

  return uniqueArr;
}