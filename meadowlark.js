const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const hbs = handlebars.create({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.set("port", process.env.PORT || 3000);

const port = app.get("port");

app.get("/", (req, res) => {
    // res.type("text/plain");
    // res.send("Meadowlark Travel");
    res.render("home");
});

app.get("/about", (req, res) => {
    // res.type("text/plain");
    // res.send("About Meadowlark Travel");
    res.render("about");
})

app.use((req, res) => {
    // res.type("text/plain");
    // res.status(404);
    // res.send("Not Found");
    res.status(404);
    res.render("404");
});

app.use((err, req, res, next) => {
    // console.error(err.stack);
    // res.status(500);
    // res.type("text/plain");
    // res.send("500 - Server Error");
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(port, () => {
    console.log(`Express started on localhost:${port}; Press CTRL+C to terminate.`);
})