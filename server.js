const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();
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
  res.render("index", { articles: articles1 });
});

app.listen(5000);
