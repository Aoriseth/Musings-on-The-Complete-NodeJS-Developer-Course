const path = require("path")
const express = require("express")

const app = express()
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"../public")))

app.get("/weather",(req,res) => {
	 res.send({
	 	temperature:34,
	 	rainChance:0.3
	 })
})

app.get('',(req,res) => {
	res.render("index",{
		title:"Weather app",
		name:"lennart"
	})
})

app.get("/about",(req,res) => {
	res.render("about",{
		title:"About page",
		name:"lennart"
	})
})

app.get("/help",(req,res) => {
	res.render("help",{
		title:"Help page",
		message:"A helpful message"
	})
})

app.listen(3000,() => {
	console.log("Server started on port 3000")
})