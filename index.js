const express = require("express");
const path = require("path");
const localData = require("./localdb.json");
const { startLogging, router } = require("./logger_service");

const app = express();

const PORT = process.env.PORT || 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

startLogging();
app.use(router);

app.get("/", (req, res) => {
  const obj = {
    data: localData,
    reqData: req.headers,
  };
  res.send(obj);
});

app.get("/home", (req, res) => {
  res.send("hello from home");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found!! invalid path");
});
