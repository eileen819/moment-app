const clockEl = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockEl.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/* 
new Date().getHours().toLocaleString().padStart(2, "0")
이런 식으로 해도 숫자를 문자로 만들어서 표시해 줄 수가 있음
toLocaleString()을 사용하면 13시가 pm 1시로 표현됨
*/
