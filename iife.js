//Named IIFE
(function func1() {
  console.log("DB Connected");
})();
// To solve the global scope pollution, ASK GPTT

//UNNAMED IIFE
(() => {
  console.log("db connected");
})();
((name) => {
  console.log(`Hello ${name}`);
})(`niranjan`);
