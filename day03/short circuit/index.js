// short circuit

// ||[or]
const a = false || true;
const b = undefined || "자바 스크립트";

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`);

// &&[and]
const c = true && true;
const d = false && "탕후루";

const isLoggin = prompt("비밀번호 입력하셈") == "1234";
isLoggin && alert("주인님 ㅎㅇ");
