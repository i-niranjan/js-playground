const arr = [1, 2, 3];
const cache = { a: 1, b: 2, c: 3 };
let element = [];
for (const key in cache) {
  element.push(cache[key]);
}
console.log(element);
