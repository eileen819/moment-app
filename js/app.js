const inputEl = document.querySelector(".sign-in-form input");
const buttonEl = document.querySelector(".sign-in-form button");

function onSignInClick() {
  console.log(inputEl.value);
}

buttonEl.addEventListener("click", onSignInClick);
