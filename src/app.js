const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;
const path = require("path");
const ejs = require("ejs");

const staticPath = path.join(__dirname, "../public");
app.set("view engine", "ejs");

//builtin middleware
app.use(express.static(staticPath));

app.get("/",(req, res) =>{
    res.render("index");
});

app.get("/about",(req,res) => {
    res.render("about");
});

app.get("/weather", (req,res) =>{
    res.render("weather");
});

app.get("*", (req,res) =>{
    res.render("404err",{
        errmsg:"Opps! Page not found",
    });
})

app.listen(port, () =>{
    console.log(`server is listening at ${port} port`);
});