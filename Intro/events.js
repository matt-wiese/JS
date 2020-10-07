const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todonr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const items = todoList.children;
const nameInput = document.querySelector(".name-input");

// //CLICK, SCROLL, RESIZING
// //ATTACH AN EVENT LISTENER

button.addEventListener("click", function (e) {
  e.preventDefault();
  //create element
  const newItem = document.createElement("li");
  //adding class
  newItem.classList.add("item");
  //adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todonr.innerText = items.length;
  //delete the cahced value from input
  nameInput.value = "";
  //create the element and attach the listener
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  //   console.log(e.target);
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});
// button.addEventListener("mouseover", function () {
//   mainTitle.classList.toggle("spectacular");
// });
