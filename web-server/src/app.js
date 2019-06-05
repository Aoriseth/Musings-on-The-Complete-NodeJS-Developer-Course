const path = require("path");
const express = require("express");
const hbs = require("hbs");

const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

const app = express();
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname,"../public")));

app.get("/weather",(req,res) => {
	 res.send({
	 	temperature:34,
	 	rainChance:0.3
	 })
});

app.get('',(req,res) => {
	res.render("index",{
		title:"Weather app",
		name:"lennart"
	})
});

app.get("/about",(req,res) => {
	res.render("about",{
		title:"About page",
		name:"lennart"
	})
});

app.get("/help",(req,res) => {
	res.render("help",{
		title:"Help page",
		name:"lennart",
		message:"A helpful message"
	})
});
app.get("/help/*",(req,res)=>{
	res.render("error",{
		title:"404 - Page not Found",
		name:"lennart",
		message:"Help page not found:"
	})
});
app.get("*",(req,res)=>{
	res.render("error",{
		title:"404 - Page not Found",
		name:"lennart",
		message:"detail:"
	})
});



app.listen(3000,() => {
	console.log("Server started on port 3000")
});