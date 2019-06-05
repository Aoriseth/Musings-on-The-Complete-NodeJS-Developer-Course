setTimeout((argument) => {
	console.log("2 seconds are up")
}, 2000)

const names = ["Maya","Morandri","Sepulha"]
const shortNames = names.filter((name)=>{
	return name.length <= 4
})


const geocode = (address,callback) => {
	
	setTimeout(() => {
		const data = {
		latitude:0,
		longitude:0
		}
		callback(data)
	},2000)
}

geocode("address",(data) => {
	console.log(data)
})



const add = (a,b,callback) => {
	setTimeout(() => {
		 callback(a+b)
	},2000)
}

add(1,4,(sum) => {
	console.log(sum)
})