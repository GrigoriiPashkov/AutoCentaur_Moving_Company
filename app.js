const express = require("express");
const path = require("path");
const config = require("config");

const app = express();

app.use(express.json({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
const PORT = config.get("port") || 5000;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();
