// let a = [1, 2];
// let b = a;
// b.push(3);
// console.log(typeof a);

//Closures
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const fn = outer();
// fn(); //1
// fn(); //2

// Deep vs Shallow Copy
// const obj = { a: 1, b: { c: 2 } };

// const shallow = { ...obj };

// console.log(shallow);
// const deep = JSON.parse(JSON.stringify(obj));
// console.log(deep);
// deep.b.c = 99;
// console.log(obj.b.c);

//Flatten the array

// const arr = [1, [2, [3]]];
// const flatten = (arr) => arr.flat(Infinity);
// const newarr = flatten(arr);
// console.log(newarr);

//Double all numbers in an array
// const arr = [1, 2, 3];
// const result = arr.map((item) => item * 2);
// console.log(result);

// Filter out even numbers
// const arr = [1, 2, 3, 4, 5];
// const evenNo = arr.filter((item) => item % 2 == 0);
// console.log(evenNo);

//flattend the nested array
// const arr = [1, [2, [3, 4]]];
// const flatarr = arr.flat(Infinity);
// console.log(flatarr);

//Sum of all elements
// const arr = [5, 10, 15];
// const result = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(result);

// Check if any number > 10
// const arr = [1, 5, 8, 11];
// const result = arr.some((item) => item > 10);
// console.log(result);

//Get all keys of an object and entries
// const user = { name: "Zed", age: 21 };
// const keys = Object.entries(user);
// const entries = Object.entries(user);
// console.log(keys);

// //rebuild object from entries
// const newObj = Object.fromEntries(entries);
// console.log(newObj);

// const obj = { a: 1, b: { c: 2 } };
// const cloneObj = JSON.parse(JSON.stringify(obj));
// console.log(cloneObj === obj);

// chain: Double numbers then filter > 5
// const arr = [1, 2, 3, 4];
// const res = arr.map((item) => item * 2).filter((item) => item > 5);
// console.log(res);

// Find index of first number > 10
// const arr = [3, 7, 9, 12, 14, 4];
// const result = arr.findIndex((item) => item > 10);
// console.log(result);

// Turn array to object with values as keys
// const arr = ["apple", "banana"];
// const result = Object.fromEntries(arr.map((item, i) => [item, i]));
// console.log(result);

// Group by type
// const arr = [1, "a", true, 2, "b", false];
// const res = arr.reduce((acc, val) => {
//   const type = typeof val;

//   acc[type] = acc[type] || [];
//   acc[type].push(val);
//   return acc;
// }, {});
// console.log(res);
