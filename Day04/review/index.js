// 1. [10,20,30,40,50]을 30이하면 100더하기, 아니면 200더하기
// 2. ["americano", "latte", "vanilla", "macha", "mint", "tea"]
// -1. 5글자 이하이면 대문자화, 아니면 '☕'로 바꾸기
const plus = (x) => {
  return x <= 30 ? x + 100 : x + 200;
};
const arr = [10, 20, 30, 40, 50].map(plus);
alert(arr);

const coffee = ["americano", "latte", "vanilla", "macha", "mint", "tea"];
coffee.map((x) => {
  x.length <= 5 ? x.toUpperCase : "☕";
});

const add = (x, y) => {
  return x + y;
};
