const PORT_SERVICE_2 = 4002; //TODOS: add support for .env file
//TODOS: also add webpack for bundling removing comments and minifying the code

fetch(`http://localhost:${PORT_SERVICE_2}/api/home`, {
  method: "GET",
})
  .then((res) => res.text())
  .then((data) => {
    console.log("data fetched::-", data.toString());

    const div = document.createElement("div");
    div.innerHTML = data;
    div.style.color = "blue";
    div.style.fontSize = "20px";
    document.body.appendChild(div);
  });

console.log("Hello from script.js");
