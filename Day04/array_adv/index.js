// arr 함수들
// map : 바꿔줘
// filter: 걸러줘, 어더한 조건에 부합하는 요소만 남겨줘

// 3. 알파벳 O가 들어있는 애들만 살려줘
// 4. 문자길이가 6글자 이상만 살려줘
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘

const a = [10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});
[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

// every: 어떠한 조건에 모든 요소가 부합함?
[10, 20, 30, 40, 50].every((x) => {
  return x > 10;
});

//some: 어떠한 조건에 하나 요소가 부합함?(return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 60;
});

// 배열만들기

// 열칸 만들기
// [1,2,3,4,5,6,7,8,9,....100]
// [0,1,2,3,4,5,6,7,8,9,...99]
Array(100)
  .fill(1)
  .map((x, i) => {
    return i + 1;
  });
Array(10).fill(10);

Array(20)
  .fill(0)
  .map((x) => {
    return i;
  });

const add = (x, y) => x + y;

const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
