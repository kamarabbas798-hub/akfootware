const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/akfootware",(req,res)=>{
    res.render("main");
});

app.get("/akproduct",(req,res)=>{
    res.render("product");
});

app.get("/akabout",(req,res)=>{
    res.render("about");
});

app.get("/contect",(req,res)=>{
    res.render("contect");
});

app.get("/review",(req,res)=>{
    res.render("review");
});

app.get("/Scaler",(req,res)=>{
    res.render("photo");
});

app.get("/zixer",(req,res)=>{
    res.render("photo2");
});

app.get("/sports",(req,res)=>{
    res.render("photo3");
});

app.get("/terra",(req,res)=>{
    res.render("photo4");
});

app.get("/Athletic",(req,res)=>{
    res.render("photo5");
});

app.get("/wolf",(req,res)=>{
    res.render("photo6");
});

app.get("/knight",(req,res)=>{
    res.render("photo7");
}); 

app.get("/hook",(req,res)=>{
    res.render("photo8");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});