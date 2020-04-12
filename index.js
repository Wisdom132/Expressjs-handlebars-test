const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const PORT = 2200;

app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    partialsDir: "views/test",
    extname: "handlebars"
  })
);
app.set("view engine", "handlebars");

// routing
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    style: "style",
    message: "Hello wisdom , i am typing from index.js",
    isShow: false
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    people: ["wisdom", "stbc", "sandra", "cammy"],
    user: { name: "Wisdom Ekpot", level: "200", age: 21 },
    style: "about",
    lists: [
      { items: ["mango", "flower", "yam", "jam", "bread"] },
      { items: ["study", "bread", "cookie", "cheese"] }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
