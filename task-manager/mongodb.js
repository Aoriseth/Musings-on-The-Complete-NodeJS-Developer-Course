const {MongoClient,ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
	if(error){
		return console.log('Unable to connect to database!')
	}

	const db = client.db(databaseName)

	db.collection('users').findOne({_id:new ObjectID("5d25a3c59c5b7c1dbcaef240")},(error,user)=>{
		if (error) {
			return console.log('Unable to fetch')
		}

		console.log(user)
	})

	db.collection('users').find({name:'Lennart'}).toArray((error,users)=>{
		console.log(users)
	})
})

