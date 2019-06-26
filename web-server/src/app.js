const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require('./utils/forecast');
const geocode = require("./utils/geocode");

const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

const port = process.env.PORT || 3000;
const app = express();
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname,"../public")));

app.get("/weather",(req,res) => {
	if (!req.query.address){
		return res.send({
			error:"you must provide an address"
		})
	}
	geocode(req.query.address,(errors,{latitude,longitude,location}={})=>{
		if (errors) {
			return res.send({errors})
		}
		forecast(latitude,longitude,(errors,forecastData)=>{
			if (errors){
				return res.send({errors})
			}
			res.send({
				searchAddress:req.query.address,
				location,
				forecastData:forecastData.summary
			})
		})
	});
});

app.get("/products",(req,res) => {
	if(!req.query.search){
		return res.send({
			error:"you must provide a search term"
		})
	}
	res.send({
		products:[]
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



app.listen(port,() => {
	console.log("Server started on port " + port)
});