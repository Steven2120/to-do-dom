function addTodo(item) {
  todos.push(item);
}

function removeTodo(item) {
  todos.splice();
}

const printTodo = function (item) {
  const newLi = document.createElement("li");

  newLi.innerText = item.text;

  newLi.classList.add("todo-item");

  newLi.id = item.id;
  console.log(newLi);

  if (item.complete) {
    newLi.classList.add("complete");
  }

  const todoOl = document.querySelector(".todo-list");
  todoOl.appendChild(newLi);
};

const todoOl = document.querySelectorAll(".todo-list");

function print(item) {
  for (const item of todos) {
    printTodo(item);
  }
}

print();

function clear() {
  const olList = document.querySelector(".todo-list");
  olList.innerHTML = "";
}

function refresh() {
  print();
  clear();
}

const addButton = document.querySelector(".add-todo");

addButton.addEventListener("click", function () {
  const input = document.querySelector(".todo-input");
  let todoObj = {};
  todoObj.text = input.value;
  todoObj.priority = 2;
  todoObj.complete = false;

  todoObj.id = todos.length;
  addTodo(todoObj);
  printTodo(todoObj);
  input.value = "";
});

const clearButton = document.querySelector(".clear-todo");
clearButton.addEventListener("click", () => {
  todos.splice(0, todos.length);
  clear();
});

const olList = document.querySelector(".todo-list");

olList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("complete");
  }
});
