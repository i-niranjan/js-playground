//Promise is Created
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log(`Async Task is Completed`);
    resolve(); //we have to actually write resolve here
  }, 1000);
});

//Now we will consume the promise
promiseOne.then(function () {
  //   console.log(`Promise Consumed`);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log(`Second Promise is executed`);
    resolve();
  }, 1000);
}).then(() => {
  //   console.log(`Resolved`);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "niranjan", email: "niranjan@sckonnect.com" });
  }, 1000);
});
promiseThree.then((value) => {
  //   console.log(value);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) reject("ERROR: Something went wrong");
    resolve({ username: "Niranjan", password: "N2004" });
  }, 1000);
})
  .then((values) => {
    console.log(`First then ${JSON.stringify(values)}`);
    return values.username;
  })
  .then((values) => {
    console.log(`Second then ${values}`);
  })

  .catch((values) => {
    // console.log(values);
  })
  .finally(() => {
    // console.log(`THE PROMISES IS COMPLETED`);
  });

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) resolve({ username: "Niranjan", password: "123" });
    else {
      reject(`There is a error`);
    }
  }, 1000);
});

const newres = async () => {
  try {
    const res = await promisefour;
    console.log(res);
  } catch (error) {
    // console.log(error);
  }
};

newres();

async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
getAllUsers();

//No one used this type of shit but i just tried
const getAllUsers1 = new Promise(async (resolve, reject) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
    resolve(response.json());
  } else {
    reject(`Error Fecthing the Reponse`);
  }
})
  .then((data) => {
    // console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
