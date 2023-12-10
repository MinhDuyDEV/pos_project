const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const rootRouter = require("./routers");
const path = require("path");
const staticPath = path.join(__dirname, "public");
app.use(cors());
app.use("/public", express.static(staticPath));
app.use(express.json());
app.use("/api", rootRouter);

// demo send linkLogin
app.use(express.static(__dirname));

const { MONGO_URL } = process.env;

//  Todo: Get text in /
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connect to mongoDB successfully"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
