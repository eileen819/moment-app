const ddayForm = document.querySelector("#dday-form");
const ddayTitle = document.querySelector(".dday-title");
const ddayDate = document.querySelector(".dday-date");
const showFormBtn = document.querySelector(".show-form");
const removeFormBtn = document.querySelector(".cancel-form");
const errorMessage = document.querySelector(".error-message");
const ddayList = document.querySelector(".dday-list");

const D_DAY_KEY = "d-days";
let ddays = [];

function saveDday() {
  localStorage.setItem(D_DAY_KEY, JSON.stringify(ddays));
}

function removeEl(event) {
  const targetEl = event.target.parentElement;
  targetEl.remove();
  ddays = ddays.filter((dday) => dday.id !== parseInt(targetEl.id));
  saveDday();
}

function paintDday(newDdayObj, li) {
  const timeText = li.querySelector(".d-day_leftTime");
  function countDays() {
    const now = new Date().getTime();
    const targetTime = new Date(newDdayObj.date).getTime();
    const diff = targetTime - now;
    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24)));

    if (diff > 0) {
      timeText.innerText = `D-${days}`;
    } else if (diff === 0) {
      timeText.innerText = `오늘은 ${newDdayObj.title}의 날입니다.`;
    } else {
      timeText.innerText = `D+${Math.abs(days)}`;
    }
  }
  countDays();
  setInterval(countDays, 1000);
}

function addDday(newDdayObj) {
  const li = document.createElement("li");
  li.id = newDdayObj.id;

  const spanTitle = document.createElement("span");
  spanTitle.classList.add("d-day_title");
  spanTitle.innerText = newDdayObj.title;

  const spanLeftTime = document.createElement("span");
  spanLeftTime.classList.add("d-day_leftTime");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-dday");
  removeBtn.innerText = "delete";
  removeBtn.addEventListener("click", removeEl);

  li.append(spanTitle, spanLeftTime, removeBtn);
  ddayList.appendChild(li);

  paintDday(newDdayObj, li);
}

function onSubmitDday(event) {
  event.preventDefault();

  const newTitle = ddayTitle.value;
  const newDate = ddayDate.value;

  if (
    !newDate.match(/^([1-9]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/g)
  ) {
    ddayDate.value = "";
    errorMessage.innerText = "올바르게 날짜를 입력해주세요.\n예시) 2024-01-01";
    return;
  }
  errorMessage.innerText = "";

  const newDdayObj = {
    id: Date.now(),
    title: newTitle,
    date: newDate,
  };

  ddays.push(newDdayObj);
  saveDday();
  addDday(newDdayObj);
  ddayForm.reset();
  ddayForm.classList.add("hidden");
  showFormBtn.classList.remove("hidden");
  removeFormBtn.classList.add("hidden");
  ddayList.classList.remove("hidden");
}

showFormBtn.addEventListener("click", () => {
  ddayForm.classList.remove("hidden");
  showFormBtn.classList.add("hidden");
  removeFormBtn.classList.remove("hidden");
  ddayList.classList.add("hidden");
});

removeFormBtn.addEventListener("click", () => {
  ddayForm.classList.add("hidden");
  removeFormBtn.classList.add("hidden");
  showFormBtn.classList.remove("hidden");
  ddayList.classList.remove("hidden");
  ddayTitle.value = "";
  ddayDate.value = "";
  errorMessage.innerText = "";
});

ddayForm.addEventListener("submit", onSubmitDday);

const savedDdays = localStorage.getItem(D_DAY_KEY);
if (savedDdays !== null) {
  const parsedDdays = JSON.parse(savedDdays);
  ddays = parsedDdays;
  ddays.forEach(addDday);
}
