// singleton
// Object.create - By this method it creates a singleton
// object literals

const mySym = Symbol("key1"); //this is how we can declare Symbols

const JsUser = {
  name: "Niranjan", //by default system writes it as a "name"
  age: "22",
  email: "niranjanchaudhari2004@gmail.com",
  lastLoginDays: ["Monday", "TuesDay"],
  [mySym]: "sym",
};

//Object.freeze(JsUser); //We can actually freeze the whole object by this so no one can propgate them

// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);

JsUser.greetings = function () {
  console.log(`Hello User ${this.name}`);
};
JsUser.greetings();
