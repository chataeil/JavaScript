// 유저에게 비밀번호 설정을 물어보고.
// 비밀번혹가 it, IT을 포함하면 비밀번호 설정완료! 아니면 비밀번호 설정오류!

// const password = prompt("비밀번호 설정");
// const it1 = password.includes("it");
// const it2 = password.includes("IT");
// const setting = it1 || it2 ? "로그인 성공" : "로그인 실패";
// alert(setting);

//1. 유저에게 좋아하는 음식을 입력 받고 그 음식을 5 번 출력하는 프로그램
//2. 유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수번 만큼 출력하는 프로그램
// ex) 떡볶이 5 -> 떡볶이 떡볶이 떡볶이 떡볶이 떡볶이
//3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화해서 출력

// const food = prompt("좋아하는 음식은?");
// const food2 = food.repeat(5);
// console.log(food2);

// const food3 = prompt("좋아하는 음식과 숫자를 입력하시오.");
// const a = food3.slice(" "); //["떡볶이" , "5"]
// const myFood = a[0]; // "떡뽁이"
// const count = Number(a[1]); //5
// alert(myFood.repeat(count));

// const alpha = prompt("알파벳 ");
// const is6under = alpha.length < 6;

// const result = is6under ? alpha.toLowerCase() : alpha.toUpperCase();
// alert(result);

const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.

No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.

But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.

The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

//1. 유저에게 단어를 입력받고, 소문자이면 대문자로 대문자면 소문자로
//ex) happy -> HAPPY , SAD -> sad

//2. 유저에게 비밀번호 설정을 물어보고
// -1. 길이가 8~ 20가 아니면 비밀번호 길이가 오류!
// -2. 시작이 IT,it로 시작안하면 비밀번호 시작은 it, IT로 시작해야함
// -3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정 완료!

const isPassword = prompt("비밀번호 설정을 입력하세요!");
//happy
const result1 =
  isPassword == isPassword.toUpperCase()
    ? isPassword.toLowerCase()
    : isPassword.toUpperCase();

const pw = prompt("비밀번호 설정");
const isLengthValid = 8 <= pw.length && pw.length <= 20;
const isStartIT = pw.startWith("it") || pw.startsWith("IT");
const hasSpecialChar =
  pw.includes("&") || pw.includes("#") || pw.includes("!") || pw.includes("@");

if (!isLengthValid) {
  alert("비밀번호 길이 오류!");
} else if (!isStartIT) {
  alert("비밀번호 시작은 IT,it로 시작해야함");
} else if (!hasSpecialChar) {
  alert("비밀번호에 반드시 특수문자 넣어야함");
} else {
  alert("비밀번호 설정 완료!");
}
