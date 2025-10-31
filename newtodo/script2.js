


// function fullName(a,b) {
//     console.log(`My fullname is ${a} ${b}`)
// }

// fullName("Favour")
// fullName("Daniel", "David")
// fullName("Daniel", "Owunna")


// const bingo = () => {
//     console.log("hello bingo ")
// }

// bingo()



// let input_element = document.querySelector("#todo-input");

// let item_show = document.querySelector(".item_show");

// input_element.addEventListener("keydown", function () {
    
//     item_show.textContent = input_element.value;
// })


let input_element2 = document.querySelector("#todo-input");

let add = document.querySelector("#add");

let ul = document.querySelector("#general");




add.addEventListener("click", () => {
    console.log("what is the parent of the ul");

    let li = document.createElement("li");

    li.textContent = input_element2.value;

    ul.append(li);

    
})