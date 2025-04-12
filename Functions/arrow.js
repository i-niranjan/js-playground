const user = {
  username: "Niranjan",
  price: "999",

  welcomeMessage: function () {
    // console.log(`${this.username} , Welcome to website`);
    // console.log(this);
  },
};
user.username = "sam";
user.welcomeMessage();
// console.log(this);
//this goes empty becuase we running on node environment
//but if we run this globally on chrome it gives us all the window obj and more

function function1() {
  //   let username = "niranjan";
  //   console.log(this.username);
}
function1();

const function2 = () => {
  //   console.log(this);
};
function2();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; //Explciit
// this.name = "niranjan";
// const name1 = () => {
//   console.log("heh", this.name);
// };
// name1();

this.name = "niranjan";
const obj = {
  name: "Aman",
  normal: function () {
    console.log("Normal:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

obj.normal(); // 'Aman'
obj.arrow(); // 'undefined'
console.log(this);
