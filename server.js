const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const products = require('./server/products.js');
const connectDB = require('./server/config/db.js');

dotenv.config();
//DB connection
connectDB();

//initialize express
const app = express();

//api end points
app.get('/', (req, res) => {
	res.send('API is running...');
});
app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

//Server ~ Port
const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
