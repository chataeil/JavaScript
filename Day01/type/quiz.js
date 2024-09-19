// const num1 = prompt("첫번째 숫자는?");
// const num2 = prompt("두번째 숫자는?");

// const sum = Number(num1) + Number(num2);
// console.log(`두 수의 합은 ${sum} 입니다.`);

const length = prompt("정사각형의 길이는?");
const sol1 = Number(length) * Number(length);
const sol2 = Number(length * 4);
console.log(`정사각형의 넓이는 ${sol1} 둘레는 ${sol2}`);

const bottom = prompt("정삼각형의 밑변은?");
const height = prompt("정삼각형의 높이는?");
const sol3 = (Number(bottom) * Number(height)) / 2;
console.log(`정삼각형의 넓이는 ${sol3}`);

const radius = prompt("원의 반지름은?");
const sol4 = Number(3.14 * (radius * radius));
const sol5 = Number(2 * 3.14 * radius);
console.log(`원의 넓이는 ${sol4} 원의 둘레는 ${sol5}`);

const birth = prompt("출생년도는?");
const sol6 = Number(2025 - birth);
console.log(`당신의 나이는 ${sol6}`);

const won = prompt("얼마 환전?");
const sol7 = Number(won * 0.10743);
console.log(`환전 금액은 ${sol7}엔입니다.`);
