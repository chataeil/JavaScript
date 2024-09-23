// const num = Number(prompt("숫자를 입력하시오"));
// if (num % 2 == 0) {
//   console.log("짝수입니다.");
// } else {
//   console.log("홀수입니다.");
// }
// const num2 = Number(prompt("숫자를 입력하시오"));
// if (num % 5 == 0) {
//   console.log("5의 배수입니다.");
// } else {
//   console.log("5의 배수가 아닙니다.");
// }
// const num3 = Number(prompt("숫자를 입력하시오"));
// if (num3 == 1) {
//   console.log("- 일반팝콘.");
// } else if (num3 == 2) {
//   console.log("- 캬라멜 팝콘.");
// } else if (num3 == 3) {
//   console.log("- 치즈 팝콘.");
// } else {
//   console.log("그런거 없음");
// }
// const arr = prompt("첫 번째 문자를 입력하시오.");
// const arr2 = prompt("두 번째 문자를 입력하시오.");
// const arr3 = prompt("세 번째 문자를 입력하시오.");
// function array(arr, arr2, arr3) {
//   Array(array);
// }
// console.log(array);

function oddEven(x) {
  return x % 2 == 1 ? " 홀수" : "짝수";
}
function isFiveTime(x) {
  return x % 5 == 0 ? " 5의 배수" : "5의 배수 아님";
}
function oddEven(x) {
  return x % 2 == 1 ? " 홀수" : "짝수";
}
//console로 한다면 팝콘문자만 원해요 + 출력까지 원해요 console을 쓴다면 순수성에 위배됨 출력은 되면 안됨.
function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈팝콘";
  } else {
    return "그런거 없음 ";
  }
}
function stringToArray(a, b, c) {
  return [a, b, c];
}

//어떠한 과일이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수 만들기
function flavor(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log(a);

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven1(x) {
  if (x % 2 == 1) {
    return true;
  }
}
