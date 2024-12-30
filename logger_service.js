const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Define the log file path
const logFilePath = path.join(__dirname, "logs", "appCollection.log");

// Create the logs directory if it doesn't exist
const logsDir = path.join(__dirname, "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Write a log entry to the file every 5 seconds
const startLogging = () => {
  setInterval(() => {
    const logMessage = `Log entry at ${new Date().toISOString()}\n`;
    fs.appendFileSync(logFilePath, logMessage);
    console.log(logMessage); // Log to the console as well
  }, 5000); // Log every 5 seconds
};

router.get("/logs", (req, res) => {
  // Read the log file asynchronously and send its content as the response
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read log file" });
    }
    res.json({ logs: data });
  });
});

module.exports = {
  router,
  startLogging,
};
