const express = require("express");
const path = require("path");
const hbs = require("hbs");            //1 for partial used
const app = express();
const port = process.env.PORT || 8000;    //for hosting

// public static path
const static_path = path.join(__dirname, "../public");  //1 for static file serving

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");     //2 for partial used

app.set("view engine", "hbs");


app.set("views", template_path);     //for change directory name from views to templates


hbs.registerPartials(partials_path);     //3 for partial used

app.use(express.static(static_path));   //2 for static file serving

//------------------------------------------------------->routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});
