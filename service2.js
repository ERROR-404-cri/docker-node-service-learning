const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT_SERVICE_2 || 3002;

app.listen(PORT, () => {
  console.log(`Server 2 is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  const obj = {
    data: "hello data from service 2",
    reqData: req.headers,
  };
  res.send(obj);
});

var corsOptions = {
  origin: `http://localhost:${process.env.PORT}`,
  methods: "GET",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// api proxy or api gateway for home service
app.get("/api/home", cors(corsOptions), async (req, res) => {
  try {
    const data = await fetch(
      `http://localhost:${process.env.PORT_SERVICE_2}/home`
    ).then((res) => res.text());

    res.set("Cache-Control", "public, max-age=5"); // Set Cache-Control header to 5 seconds
    res.send(data);
  } catch (err) {
    res.send(
      `Error in fetching data from ${process.env.PORT_SERVICE_2} ${err}`
    );
  }
});

app.get("/home", (req, res) => {
  res.send("hello from home service 2 new");
});

app.get("/fetchData", async (req, res) => {
  try {
    const data = await fetch(`http://localhost:${process.env.PORT}/home`).then(
      (res) => res.text()
    );
    res.send(data);
  } catch (err) {
    res.send(`Error in fetching data from ${process.env.PORT} ${err}`);
  }
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found!! invalid path service 2");
});
