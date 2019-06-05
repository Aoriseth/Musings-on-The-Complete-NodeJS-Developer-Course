const https = require('https')

const url = "https://api.darksky.net/forecast/7b24aac3d027721ef88ba9089954ac57/40,40?units=si&"


const request = https.request(url, (response) => {
	let data = ''

	response.on("data",(chunk) => {
		data = data+chunk.toString()
	})


	response.on("end",() => {
		console.log(JSON.parse(data))
	})
})

request.on("error",(error) => {
	console.log("An error",error)
})


request.end()