const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();
app.set("view engine", "ejs");
app.use("/articles", articleRouter);
app.get("/", (req, res) => {
  //   res.send("Hello hi");
  res.render("index");
});

app.listen(5000);
