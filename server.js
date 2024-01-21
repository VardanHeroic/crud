// var express = require("express");
// var path = require("path");
// const bodyParser = require('body-parser');
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

// app.use(express.static('public'));

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname,'./public/form.html'));
// });

// app.post('/addName', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     console.log('Received data:', name , age );
//     res.redirect('/');
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://VardanHeroic:kNukERA7pRwhwATT@cluster0.v2ffyjn.mongodb.net/sample_mflix';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
	console.log('Connected to MongoDB!');

	try {
	//	const allMovies = await mongoose.connection.db.collection('sessions').find().toArray(); // .insertMany(newMovies);

		

		var user = {
			user_id: 'sdfhjldfjsldfjkskdfjsjldfks',
			jwt: 'abc',
		};

		await mongoose.connection.db.collection('sessions').insertOne(user);

		console.log('All Movies:', allMovies);
	} catch (error) {
		console.error('Error retrieving movies:', error);
	} finally {
		mongoose.connection.close();
	}

})