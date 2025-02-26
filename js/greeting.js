// Sign In

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
