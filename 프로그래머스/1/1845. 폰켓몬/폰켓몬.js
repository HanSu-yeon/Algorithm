function solution(nums) {
  let pick = nums.length / 2;
  let answer = 0;
  let pockemonType = new Map();

  for (let i = 0; i < nums.length; i++) {
    let pockmon = nums[i];
    pockemonType.set(pockmon, (pockemonType.get(pockmon) || 0) + 1);
  }
  // console.log(pockemonType);
  // console.log('pick', pick);
  // console.log('size', pockemonType.size);
  if (pockemonType.size >= pick) {
    return pick;
  } else if (pockemonType.size < pick) {
    return pockemonType.size;
  }
}