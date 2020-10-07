// function sayHi() {
//   console.log(`hello there ${name}`);
//   changeName();
//   console.log(`sayHi is finished`);
// }

// function changeName() {
//   name = "Bobby";
//   console.log(`we changed it to ${name}`);
//   console.log("changeName is finished");
// }

// let name = "dev Matt";

// sayHi();

// // end
// console.log(`we are done with the code`);

// a pointer --, it refers to an object
// const user = {
//   name: "developedbymatt",
// };

// const admin = {
//   name: "admin",
// };

// function sayHi() {
//   console.log(this.name);
// }

// user.hi = sayHi;
// admin.hi = sayHi;

// user.hi();
// admin.hi();

// const user = {
//   name: "matt",
//   videos: ["html", "css", "js", "react"],
//   greet() {
//     console.log(`hello there ${this.name}`);
//     //add function
//     const getVideos = () => {
//       console.log(`you currently have ${this.videos.length} videos`);
//     };
//     getVideos();
//   },
// };

// user.greet();

// functions are just special objects
// bind call apply

// const person = {
//   firstName: "Matt",
//   lastName: "Wiese",
//   getName() {
//     console.log(this.firstName + this.lastName);
//   },
// };

// function registerUser() {
//   //additional functionality
//   this.getName();
// }

// // const register = registerUser.bind(person);

// registerUser.call(person);

// constructor function
// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
//   // this.getTodoName = function () {
//   //   console.log(this.name);
//   // };
//   // this.checkCompleted = function () {
//   //   console.log("check");
//   // };
//   // this.deleteTodo = function () {
//   //   console.log("deleted");
//   // };
// }

// Todo.prototype.getTodoName = function () {
//   console.log(this.name);
// };

// const todo = new Todo("buy eggs", false);
// const todo2 = new Todo("do homework", true);

// todo.getTodoName();

// console.log(todo, todo2);

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// Enemy.prototype.attack = function () {
//   console.log(`${this.name} has attacked!`);
// };

// Enemy.prototype.blocked = function () {
//   console.log(`${this.name} has blocked`);
// };

// function Dragon(life, name, level, color, spell) {
//   // keyword this refereneces Dragon obj
//   Enemy.call(this, life, name, level);
//   // define as normal
//   this.color = color;
//   this.spell = spell;
// }

// const newDragon = new Dragon(100, "Drogon", 25, "green", "fire");

// console.log(newDragon);

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

// const turtle = new Enemy(25, "murtle", 10);
// const bug = new Enemy(1, "mug", 1);

// turtle.getInfo();
// bug.getInfo();

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    this.legs = legs;
    this.dmg = dmg;
  }
}

const john = new Bug(10, "buggy", 1, 6, 10);

console.log(john);
john.getInfo();
