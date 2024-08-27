const toDoForm = document.querySelector("#todo-form");
const toDoInputEl = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeToDo(event) {
  const targetEl = event.target.parentElement;
  targetEl.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(targetEl.id));
  saveToDo();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;

  const checkInput = document.createElement("input");
  checkInput.setAttribute("type", "checkbox");
  checkInput.id = `checkbox-${newToDoObj.id}`;
  checkInput.checked = newToDoObj.completed;

  const label = document.createElement("label");
  label.setAttribute("for", `checkbox-${newToDoObj.id}`);
  label.classList.add("todo-text");

  const span = document.createElement("span");
  span.classList.add("label-text");
  span.innerText = newToDoObj.todo;

  if (checkInput.checked) {
    label.classList.add("complete");
  }

  checkInput.addEventListener("click", () => {
    newToDoObj.completed = checkInput.checked;
    label.classList.toggle("complete");
    saveToDo();
  });

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "delete";
  removeBtn.addEventListener("click", removeToDo);

  label.append(checkInput, span);
  li.append(label, removeBtn);
  toDoList.appendChild(li);
}

function addTodoList(event) {
  event.preventDefault();
  const newToDo = toDoInputEl.value;
  toDoInputEl.value = "";
  const newToDoObj = {
    id: Date.now(),
    todo: newToDo,
    completed: false,
  };
  toDos.push(newToDoObj);
  saveToDo();
  paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", addTodoList);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
