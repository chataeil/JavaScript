// // 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
// // 2. [1,2,3,4,5,6,7,8,9,10] 4 이상 8 이하면 살려줘

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return x % 3 == 0;
// });
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
//   return 4 <= x && x <= 8;
// });
const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
// const b = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ].filter((x) => {
//   return x.includes("O");
// });
// const c = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ].filter((x) => {
//   return x.length > 6;
// });
// 메소드 체이닝
// 여기 원래 변수 있고[
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ] 여기에 변수를 넣어야 하는데 실수,.., ㅎㅎ.filter((x) => {
//   return x.length % 2 == 0;
//   ;
// });.map((x)=>{
//     return x.toup
// })

//

//유저에게 정수 n(maximum),k(배수를 입력 받으면
// n = 10, k = 3 -> [3,6,9]
// n = 15, k = 5 -> [5,10,15]
// const n = Number(prompt("정수를 입력하세요"));
// const k = Number(prompt("배수를 입력하세요"));
// const arr = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };
//todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"]
//finished = [false, false, true, true]

//newDoTolist = ["점심먹기", "복습하기"]
// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// const newToDoList = (todolist, finished) => {
//   return todolist.filter((x, i) => {
//     return !finished[i];
//   });
// };

// 막퀴
// x기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거

// " oxooxoxxox" [1,2,1,0,1,0]
//["o"."oo"."o"."o"]

//"xabcxdefxghi"

// // const test2 = (word) => xabcxdefxghi.split("x").map((x) => x.length);
// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
// //모음 : a,e,i,o,u는 대문자로 바꾸기
// //[mElOn,kIwI, bAnAnA, OrAngE]
// const test = fruits.map((x) =>
//   x
//     .split("")
//     .map((x) =>
//       x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//         ? x.toUpperCase()
//         : x
//     )
// );

// const vowels = ["a", "e", "i", "o", "u"];
// fruits.map((x) =>
//   x.split("").map((v) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
// );
// 1~100 가지 만들고, 369 만들기
//알고리즘 문제 풀때
// 해당 타입에 방법이 없으면 다른 타입으로 바꾸기
//[1,2,"🙏"]
const vowels = [3, 6, 9];
const game = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "🙏" : x
  );

alert(game);
