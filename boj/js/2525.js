let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [hour, minute] = input[0].split(' ').map(Number);
let time = Number(input[1]);

let tmp_minute = minute + time;
if (tmp_minute >= 60) {
  minute = tmp_minute % 60;
  hour = hour + parseInt(tmp_minute / 60);
  if (hour >= 24) hour -= 24;
} else minute = tmp_minute;

console.log(hour, minute);
