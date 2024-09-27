const express = require("express");
const newRouter = require("./routes/newRoutes");
const baseRouter = require("./routes/baseRoutes")
const newController = require('./controllers/newController')
const app = express();
require('dotenv').config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.port || 3000;

app.use("/", baseRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
