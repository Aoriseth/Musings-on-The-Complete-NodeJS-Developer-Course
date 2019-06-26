const request = require("request");

const forecast = (latitude,longitude,callback) => {
	const url = "https://api.darksky.net/forecast/7b24aac3d027721ef88ba9089954ac57/"+longitude+","+latitude+"?units=si&";

	request({url,json:true},(error,{body}) => {
		if(error){
			callback("Unable to connect to weather services",undefined)
		}else if (body.error) {
			callback("Unable to find forecast. Try another search",undefined)
		}else {
			callback(undefined,{
				summary:body.daily.data[0].summary + " The high today will be "+body.daily.data[0].temperatureMax
                    + " degrees. The low will be "
                    +body.daily.data[0].temperatureMin+ " degrees." ,
				temperature:body.currently.temperature,
				rainChance:body.currently.precipProbability,
			})
		}
	})
};

module.exports = forecast;