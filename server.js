const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const connectionString = 'mongodb+srv://Tumo:Tumo1234@cluster0.ek0rehr.mongodb.net/vardan';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, "./public"));
app.set('view engine', 'ejs')
app.use(express.static('./public'));


app.get("/", function(req, res){
	mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('products').find().toArray()
            res.render('../public/form.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })


});

app.post('/addName', (req, res) => {
	mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
		console.log('Connected to MongoDB!');
		try {
			await mongoose.connection.db.collection('products').insertOne({...req.body});
			console.log(req.body);
		} catch (error) {
			console.error('Error retrieving movies:', error);
		} finally {
			mongoose.connection.close();
		}
	})

    res.redirect('/');
 });


 app.get("/update/:id", function (req, res) {
    var id = req.params.id;
	console.log(id);
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('products').findOne({ _id: new mongoose.Types.ObjectId(id) })
			console.log(result);
            res.render('../public/update.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});




app.listen(3000, function(){
   console.log("Example is running on port 3000");
});




// Replace the connection string with your MongoDB connection string

// Connect to MongoDB
