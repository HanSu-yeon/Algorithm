function solution(records) {
  let answer = [];
  let userNickname = new Map();
  //유저와 닉네임 관리하는 map
  // for (let i = 0; i < records.length; i++) {
  //   let [msg, id, nickname] = records[i].split(' ');
  //   userNickname.set(id, nickname || userNickname.get(id));
  // }
    
    records.forEach(record =>{
        const [msg, id, nickname] = record.split(' ');
        if(msg ==='Enter' ||msg ==='Change'){
            userNickname.set(id, nickname);
        }
    })

    records.forEach(record =>{
      let [msg, id] = record.split(' ');
      if (msg == 'Enter') {
       answer.push(`${userNickname.get(id)}님이 들어왔습니다.`);
    } else if (msg == 'Leave') {
       answer.push(`${userNickname.get(id)}님이 나갔습니다.`);
    }
 });

  return answer;
}