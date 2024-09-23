// 1. [1,2,3,4,5] -> 두 배 해주기
// 2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
// 3. [1,2,3,4,5] -> 3이하면 🍒 아니면 🍉
// const two = (x) => {
//   return x * 2;
// };
// const three = (x) => {
//   return x % 2 == 1 ? x * 2 : x * 3;
// };

// const num = [1, 2, 3, 4, 5].map(two);
// const num1 = [1, 2, 3, 4, 5].map(three);
// const num2 = [1, 2, 3, 4, 5].map((x) => {
//   return x <= 3 ? "🍒" : "🍉";
// });

// alert(num);
// alert(num1);
// alert(num2);

// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];
// const up = (x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// };

// const hasA = (x) => {
//   return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// };
// const makeCherry = (x) => {
//   return x.includes("a") ? x.replace()
// };
// fruitArray.map();
// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "bean"] },
  { name: "latte", price: 4700, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "bean"],
  },
  {
    name: "Honey black tea",
    price: 5700,
    shots: 2,
    ingredients: ["graoefruit", "water", "sorce"],
  },
];

//1번 문제 가을 시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
//2번 두유시즌 이벤트 -> 성분에 두유 강제 추가
//3번 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고. 샷 하나더 늘려주셈
// { name: "americano", price: 4500, shots: 2, ingredients: ["water", "bean"] },
const fallEvent = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
const SoyEvent = starbucks.map((x) => {
  x.ingredients.push("soybean"); //[]
  return x;
});
const iceAmericano = starbucks.map((x) => {
  return x;
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shot = x.shot + 1;
  } else {
    return x;
  }
});
const inplationEvent = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
