//todo list input
const taskInput = document.getElementById("taskInput");

//todo list add btn
const addTaskBtn = document.getElementById("addTaskBtn");

//todo list ul
const taskList = document.getElementById("taskList");

function Add() {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let done = document.createElement("button");
  let del = document.createElement("button");

  done.setAttribute("id", "done");
  done.textContent = "done";

  del.textContent = "delete";
  del.setAttribute("id", "delete");

  span.textContent = taskInput.value;
  console.log("click me", taskInput.value);

  if (taskInput.value !== "") {
    div.appendChild(span);
    div.appendChild(done);
    div.appendChild(del);
    li.appendChild(div);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  done.addEventListener("click", () => {
    let item = done.parentElement;
    // item.style.textDecoration = "lineThrough"
    console.log("done", item);
  });

  del.addEventListener("click", () => {
    del.parentElement;
    del.parentNode;

    let item = del.parentElement.parentElement.remove();

    console.log("item", item);
  });
}

addTaskBtn.addEventListener("click", Add);

// taskInput.addEventListener("keydown", (event) => {
//   console.log("event", event.key);
//   if (event.key !== "f") {
//     return;
//   } else {
//     console.log("click me", taskInput.value);

//     let li = document.createElement("li");
//     let done = document.createElement("button");
//     let del = document.createElement("button");

//     done.textContent = "done";
//     done.setAttribute("id", "done");
//     del.textContent = "delete";
//     del.setAttribute("id", "delete");

//     li.textContent = taskInput.value;

//     if (taskInput.value !== "") {
//       taskList.appendChild(li);
//       taskList.appendChild(done);
//       taskList.appendChild(del);
//       taskInput.value = "";
//     }
//   }
// });

let followers = "";

followers = "5";

let newfollowers = Number(followers) + 1;

// console.log("newfollowers", newfollowers);

let facebookPosts = [];

function creatPost() {
  console.log("facesbookPosts before", facebookPosts);
  facebookPosts.unshift(`new post added ${facebookPosts.length + 1}`);

  console.log(`facebookPosts after ${facebookPosts.length + 1}`, facebookPosts);
}

function removePost() {
  console.log("facesbookPosts before", facebookPosts);
  facebookPosts.pop();

  console.log("facebookPosts after", facebookPosts);
}


let fname = "Ajuzie";
let lname = "Temple";

// let fullname = fname  + " " + lname;

console.log(fname + " " + lname); 

console.log(`${fname} ${lname} is a developer`);

let nameT = "vdm"
nameT = "mdv";

let fruits = ["mango", "banana", "orange"];

fruits[2] = "grape";

console.log("fruits", fruits);