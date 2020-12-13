const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");
app.use("/articles", articleRouter);
app.get("/", (req, res) => {
  const articles1 = [
    {
      title: "Test Articles",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Articles 2",
      createdAt: new Date(),
      description: "Test Description 2",
    },
  ];
  res.render("articles/index", { articles: articles1 });
});

app.listen(5000);
