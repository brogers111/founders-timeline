require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static("public"));

//Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
