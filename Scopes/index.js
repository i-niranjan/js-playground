// let a = 10;
// const b = 20;
// var c = 30;

// this is scope
{
}
let a = 200;
// console.log();

if (true) {
  //   let a = 10;
  const b = 20;
  var c = 30;
  console.log(`a is ${a}`);
}

//console.log(a); //Reference Error A & B is not defined
//console.log(b);
//console.log(c); //cuprit!

// Nested Scope
function one() {
  const username = "Niranjan";
  function two() {
    const age = "22";
    console.log(username);
  }
  //console.log(age);
  two();
}
one();
