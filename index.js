const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

let posts = [
   {
    username : "varshasingh",
    content: "i love playing! ",
   },
   {
     username : "rajeshsingh",
    content: "Hard work is important to achieve success ",
   },
   {
    username : "varsha",
   content: "I got selected in hackathon",
   },
];

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
//    let { username,content} = req.body;
//    posts.push({username,content});
console.log(req.body);
    res.send("post request working");
});

app.listen(port, () => {
    console.log("listening to port: 8080");
});