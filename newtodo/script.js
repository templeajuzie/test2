let input = document.getElementById("input");
let btn = document.getElementById("btn");
let all = document.getElementById("all");

// let li = document.createElement("li");

let todoITEM = [];

btn.addEventListener("click", () => {
  todoITEM.unshift(input.value);

  input.value = "";

  console.log("todos", todoITEM);

  //     const alllist = todoITEM.map((list, index) => {
  //         console.log(`<li>${list}</li>`);
  //         all.appendChild(<li>${list}</li>);
  //         console.log(`${all}`);
  //       return list;
  //   });

  // console.log("alllist", alllist);
});

let name = {};

let facebookUser = {
  firstName: "Peter",
  lastName: "Nonye",
  email: "peternonye@gmail.com",
  password: "2223333444",
  dateOfBirth: "22-04-1990",
  gender: "female",
  post: [
    {
      id: 1,
      text: "Hello World",
      likes: 20,
      comments: 5,
    },
    {
      id: 2,
      text: "My first post",
      likes: 15,
      comments: 3,
    },
  ],
};

console.log(facebookUser.login());
