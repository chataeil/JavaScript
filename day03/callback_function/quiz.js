// makeCoffee 함수 만들기 [커피 준비 커피 완료]
// americano, latte, vanilla 함수 만들어서
// makeCoffee(americano) //[커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(latte) //[커피 준비 - 아메리카노 - 커피 완료]
// makeCoffee(vanilla) //[커피 준비 - 아메리카노 - 커피 완료]
const makeCoffee = (x) => {
  console.log("커피 준비");
  x();
  console.log("커피 완료");
};
const americano = () => {
  console.log("원두 볶기");
  console.log("원두 로스팅");
  console.log("로스팅된 원두에 뜨거운 물 넣기");
  console.log("추출된 원액 잔에 넣기");
  console.log("물 부워주기");
};
const latte = () => {
  console.log("원두 볶기");
  console.log("원두 로스팅");
  console.log("로스팅된 원두에 뜨거운 물 넣기");
  console.log("추출된 원액 잔에 넣기");
  console.log("물 부워주기");
  console.log("우유도 넣기");
};
const vanilla = () => {
  console.log("라떼에 바닐라 넣기");
};
makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(() => {
  console.log("원두 볶기");
  console.log("원두 로스팅");
  console.log("로스팅된 원두에 뜨거운 물 넣기");
  console.log("추출된 원액 잔에 넣기");
  console.log("물 부워주기");
  console.log("망고 넣기");
});
