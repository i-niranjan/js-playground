const tinderUser = new Object(); //this is a singleton object

tinderUser.id = "1212";
tinderUser.name = "Nero";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "nero@gmail.com",
  fullname: {
    userFullName: {
      firstname: "niranjan",
      lastname: "chaudhari",
    },
  },
};

console.log(regularUser.fullname.userFullName.firstname);
const obj3 = Object.assign({}, tinderUser, regularUser); //Two merge two objects into one
const obj4 = { ...tinderUser, ...regularUser }; // we can achieve same result by spread operator

console.log(Object.keys(tinderUser)); //to get the keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const { id } = tinderUser; //Object Destructuring
const { id: heheheh } = tinderUser;
console.log(heheheh);
