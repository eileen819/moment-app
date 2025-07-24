// Sign In

const signInForm = document.querySelector("#sign-in-form");
const inputEl = document.querySelector(".username");
const formBtn = document.querySelector(".signIn-btn");
const greetingEl = document.querySelector("#greeting");
const editUserNameBtn = document.querySelector("#edit-username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function faintGreeting(username) {
  greetingEl.innerText = `Hello, ${username}!`;
  greetingEl.classList.remove(HIDDEN_CLASSNAME);
}

function onSignInSubmit(event) {
  event.preventDefault();
  const username = inputEl.value.trim();

  if (username === "") {
    alert("Please, Write your name.");
    return;
  }

  signInForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  faintGreeting(username);
  editUserNameBtn.classList.remove(HIDDEN_CLASSNAME);
  formBtn.value = "Sign In";
}

function onEditUserName() {
  inputEl.value = localStorage.getItem(USERNAME_KEY);
  greetingEl.classList.add(HIDDEN_CLASSNAME);
  editUserNameBtn.classList.add(HIDDEN_CLASSNAME);
  signInForm.classList.remove(HIDDEN_CLASSNAME);
  formBtn.value = "Edit";
}

signInForm.addEventListener("submit", onSignInSubmit);
editUserNameBtn.addEventListener("click", onEditUserName);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  signInForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  faintGreeting(savedUsername);
  editUserNameBtn.classList.remove(HIDDEN_CLASSNAME);
}
