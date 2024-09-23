//함수 : 마술상자
//f(x) = x + 1;
//f(g(x): 마술상자 안에 마술상자
//callback : 함수 안에 함수 넣기

const cook = (x) => {
  console.log("요리 시작!");
  x();
  console.log("요리 끝!");
};

const taco = () => {
  console.log("살사소스 준비");
  console.log("나초칩");
  console.log("또띠아 준비");
  console.log("고기 올리기");
  console.log("타코 완성");
};
const ramen = () => {
  console.log("물 끓이기");
  console.log("면 넣기");
  console.log("스프 넣기");
  console.log("계란 넣기");
};

cook(taco);
cook(ramen);
