const arr = ["Samsung", "LG", "Apple", "Google"];
arr.push("Hypedai"); //뒤에 추가
arr.unshift("Hybe"); //앞에 추가
arr.pop(); //맨 뒤에 요소 빼기
arr.shift(); //맨 앞에 요소 빼기
arr.reverse(); // 배열 거꾸로
arr.indexOf("LG"); //1
arr.indexOf("toyoya"); //-1
arr.includes("Google"); //true false

//Quiz
//유저에게 뉴스 기사를 입력받고, 찾고 싶은 단어를 입력받은 후
// 단어가 있으면 단어 있습니다! 없으면 단어가 없습니다!
const news = prompt("뉴스기사를 입력하세요");
const news2 = prompt("찾고싶은 단어를 입력하세요");
const new3 = news.includes(news2);
const result = new3 ? "단어가 있습니다!" : "단어가 없습니다!";
alert(result);
