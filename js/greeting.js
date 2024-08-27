// Sign In - form 요소를 이용해서 submit 이벤트를 다루게 됨

const signInForm = document.querySelector("#sign-in-form");
const inputEl = document.querySelector(".username");
const greetingEl = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function faintGreeting(username) {
  greetingEl.innerText = `Hello, ${username}!`;
  greetingEl.classList.remove(HIDDEN_CLASSNAME);
}

function onSignInSubmit(event) {
  event.preventDefault();
  signInForm.classList.add(HIDDEN_CLASSNAME);
  const username = inputEl.value;
  localStorage.setItem(USERNAME_KEY, username);
  faintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  signInForm.classList.remove(HIDDEN_CLASSNAME);
  signInForm.addEventListener("submit", onSignInSubmit);
} else {
  faintGreeting(savedUsername);
}

// 이벤트리스너는 자신의 핸들러에게 첫번째 인수로 event에 대한 정보를 넘겨줌
// 이벤트 정보가 필요없다면 따로 event 인수를 넘기지 않아도 괜찮음
// 핸들러 함수는 event가 발생했을 때 js가 동작시키는 것
