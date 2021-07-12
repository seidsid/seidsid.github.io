let express=require("express");
let cookieParser=require("cookie-parser");
let path=require("path");

let app=express();
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));

app.get("/",function(req,res){
    res.render("list",{'cookie':req.cookies});
});

app.post("/",function(req,res){
    res.cookie(req.body.name,req.body.value);
    res.redirect("back");
})
app.listen(3001);