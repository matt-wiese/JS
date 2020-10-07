//LOCAL STORAGE

localStorage.setItem("todo", "Feed the cat");
localStorage.setItem("user", "Matt");
localStorage.setItem("todo", "Feed myself");

//SESSION STORAGE
// sessionStorage.setItem("todolist", "session feeding cat");

//GETTING STUFF BACK
// const user = localStorage.getItem("user");
// console.log(typeof user);
localStorage.clear();

const todoList = {
  todo1: "feeding the cat",
  todo2: "feed myself",
};
localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(typeof retrieved);
