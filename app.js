const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const app = express();
const PORT = 5000;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
app.get("/", (req, res) => {
  res.send("hello world!");
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
require("./models/post");
require("./models/category");
app.use(express.json());
app.use(require("./routes/post"));
app.use(require("./routes/category"));
/*app.listen(5000, () => {
  console.log("server starts at" + PORT);
});*/
