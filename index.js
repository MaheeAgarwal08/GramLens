const express=require("express");
const path=require("path");

const app=express();

const port = process.env.PORT || 3000;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


app.get('/', (req, res) => {
  const instadata = require("./data.json");
  res.render('home', { users: instadata });
});

app.get("/ig/:username",(req,res)=>{
    const instadata=require("./data.json");
    let {username}=req.params;
    const data=instadata[username];
    if(data){
       res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});