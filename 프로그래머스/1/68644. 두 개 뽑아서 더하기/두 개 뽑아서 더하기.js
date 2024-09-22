function solution(arr) {
  let sumArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sumArray.push(arr[i] + arr[j]);
    }
  }

  let newArray = [...new Set(sumArray)];

  let res = newArray.sort((a, b) => a - b);
  return res;
}