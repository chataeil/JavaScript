// General Function[구문법]
function plus(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

// Arrow Function[신문법]
// () => {}
const add1 = (x, y) => {
  return x + y;
};
const subtract = (x, y) => {
  return x - y;
};

// ~~과일 넣으면 ~~맛 아이스크림 돌려주는 함수[]
// 문자 3개 넣으면 배열로 돌려주는 함수
// 숫자를 넣으면 홀수인지 짝숴인지 알려주는 함수

const iceCream = (fruit) => {
  return `${fruit}맛 아이스크림`;
};

const a = prompt("과일을 입력하세요");
const b = prompt("과일을 입력하세요");
const c = prompt("과일을 입력하세요");
const fruit2 = (a, b, c) => {
  return [a, b, c];
};
alert(fruit2);
