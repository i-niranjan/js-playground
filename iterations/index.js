// const array = [1, 2, 3, 4];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

const arr = [
  1,
  2,
  {
    username: "niranjan",
    age: "22",
  },
  ["niranjan", "hehe"],
  [1, 2, 3, 4, 5],
];
for (const num in arr) {
  //   console.log(num);
}
let num = 0;
const greetings = "Hello World";
for (const greet in greetings) {
  num = greet;
}
// console.log(num);

//Maps
//It only accepts unique valuess
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const item of map) {
  //   console.log(item);
}
for (const [key, value] in map) {
  //   console.log(`${key} : ${value}`);
}

const myObj = {
  name: "niranjan",
  age: 15,
};
for (const [key, value] of Object.entries(myObj)) {
  //   console.log(`${key} : ${value}`);
}

for (const value of Object.values(myObj)) {
  //   console.log(value);
}
for (const key in myObj) {
  //   console.log(myObj[key]);
}

const newArray = ["Math", "English", "Science"];
newArray.forEach((element) => {
  //   console.log(element);
});
for (const value of newArray) {
  //   console.log(value);
}
const forEach = newArray.forEach((index, array) => {
  return index;
  //   console.log(array);
});
// console.log(forEach);

// for each dont return a value
