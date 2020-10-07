// const header = document.getElementsByTagName("h2");
// const list = document.getElementsByClassName("item");
// const button = document.getElementById("submit");

// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-Nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// todoNr.innerText = collectionItems.length;

// console.log(collectionItems);
// const nodeItems = document.querySelectorAll(".item");

// console.log(nodeItems.children);

// for (item of collectionItems) {
//   console.log(item);
// }

// nodeItems.forEach(function (item) {
//   console.log(item);
// });

const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todonr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

todonr.innerText = items.length;

console.log(items);
