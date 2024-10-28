//문제: 트리 순회
/** 배열로 표현된 이진트리 구조
     1          index 0
   /   \
  2     3       index 1, 2
 / \   / \
4   5 6   7     index 3, 4, 5, 6 
 * 
 */

//전위순회
function preorder(nodes, index) {
  //index가 노드 배열의 길이보다 작을 때
  if (index < nodes.length) {
    //루트 노드를 출력한 다음, 왼쪽, 오른쪽  서브 트리를 재귀 호출하여 출력 순서대로 이어 붙임
    let ret = `${nodes[index]} `;
    ret += preorder(nodes, 2 * index + 1); //왼쪽으로 이동
    ret += preorder(nodes, index * 2 + 2); //오른쪽으로 이동
    return ret;
  }
  //index >= nodes.length일 때는 빈 문자열 반환
  return '';
}
//중위순회
function inorder(nodes, index) {
  if (index < nodes.length) {
    //왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임
    let ret = inorder(nodes, 2 * index + 1);
    //루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    ret += `${nodes[index]} `;
    ret += inorder(nodes, 2 * index + 2);
    return ret;
  }
  //index >= nodes.length일 때는 빈 문자열 반환
  return '';
}
//후위순회
function postorder(nodes, index) {
  //idx가 노드 배열의 길이보다 작을 때
  if (index < nodes.length) {
    //왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = postorder(nodes, 2 * index + 1);
    ret += postorder(nodes, 2 * index + 2);
    //루트 노드를 출력함
    ret += `${nodes[index]} `;

    return ret;
  }
  //index >= nodes.length일 때는 빈 문자열 반환
  return '';
}
//배열로 표현한 이진 트리를 순회하는 코드임
function solution(nodes) {
  //전위 순회, 중위 순회, 후위 순회 결과 계산
  //노드 배열과 루트 노드의 인덱스를 매개변수로 각각 호출
  //마지막 공백 제거
  return [preorder(nodes, 0).slice(0, -1), inorder(nodes, 0).slice(0, -1), postorder(nodes, 0).slice(0, -1)];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
