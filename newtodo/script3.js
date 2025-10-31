const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button was clicked!");

  let response = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        userId: 10,
        id: 101,
        title: "Favour favourite food",
        body: "Favour loves to eat rice and chicken",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  console.log(response);
});
