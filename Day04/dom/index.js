// const div = document.createElement("div");
// div.innerText = "샤브샤브";
// div.style.color = "red";
// document.body.appendChild(div);
// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   //버튼 태그 3개 만들고[아메리카노] [에이드] [라떼]
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.style.backgroundColor = "skyblue";
//   button.style.color = "white";
//   document.body.appendChild(button);
// });

// //[아메리카노, 노랑색, 검은색] [에이드, 핑크색, 하얀색] [라떼,하늘색,주황색]
// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "blue" },
//   { name: "라떼", bg: "green", color: "red" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.bg;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });
const container = document.createElement("div");

//className
// container.className = "container"
container.classList.add("container");

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
