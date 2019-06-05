
const geocode = require("./geocode.js")
const forecast = require("./forecast.js")

if(process.argv[2]){
	geocode(process.argv[2], (error,{latitude,longitude})=>{
	if (error) {
		return console.log(error)
	}
	

	forecast(latitude,longitude, (error,data)=>{
		if (error) {
			return console.log(error)
		}
			console.log("latitude =",latitude,"longitude =",longitude)
			console.log("Data",data)
		})
	})
}else {
	console.log("No location provided")
}



