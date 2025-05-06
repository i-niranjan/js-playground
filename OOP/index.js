// Normal Object

// const user = {
//   name: "zed",
//   age: 22,
//   greet() {
//     console.log(`Hello My Name is ${this.name} and my age is ${this.age}`);
//   },
// };

// user.greet();

// Factory Functions

// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hi, I'm ${this.name} and my age is ${this.age}`);
//     },
//   };
// }
// const user1 = createUser("Niranajn", "22");
// console.log(user1);

// user1.greet();

// Constructor Based Functions

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hi I'm ${this.name}, ${this.age} years old.`);
//   };
// }

// const user1 = new User("niranjan", "22");
// const user2 = new User("niranjan", "22");

// console.log(user1.greet());

// Protype Chain with Constructor so they'll share the same memory

// function User(name, age) {
//   (this.name = name), (this.age = age);
// }

// User.prototype.greet = () => {
//   console.log(`Hi I'm ${this.name}, ${this.age} years old`);
// };

// User.prototype.prototype.hello = () => {
//   console.log(`Chain Prototype`);
// };
// const user1 = new User("niranjan", "22");
// user1.greet().hello();

// console.log(Object.getPrototypeOf(user1));

// Inheritance in Prototype

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("dog");
dog.speak();
