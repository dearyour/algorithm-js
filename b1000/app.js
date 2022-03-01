const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; // 백준 채점환경이 linux임 그래서 백준일땐 저렇게, 로컬에선 input
let input = fs.readFileSync(filePath).toString().split("\n"); //인풋 파일전체를 input에 넣음
input = input[0]; // 스플릿으로 끊었으니 첫번쨰 줄만 input에 넣음
input = input.split(" ").map((item) => +item); // 그 첫번째줄을 공백기준으로 배열만듬, 그 문자열배열을 다시 숫자배열로 만듬
//node app.js 커맨드창에 실행시킬때 회색이면 문자열이고 노란색이면 숫자임

solution(input[0], input[1]);
function solution(A, B) {
  // Write your code
  console.log(A + B);
}
