const myNums = [1, 2, 3, 4, 5, 6, 7];
//filter return the values which for each dont gives
const values = myNums.filter((num) => {
  //   return num > 5;
});
// console.log(values);
myNums.forEach((num) => {
  //   return num > 5 ? console.log(num) : "";
});
const myTotal = myNums.reduce((num, nun) => {
  return num / nun;
}, 3);
console.log(myTotal);
