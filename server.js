const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./server/config/db.js');
const productRoutes = require('./server/routes/productRoutes.js');
const { errorHandler, notFound } = require('./server/middleware/errorMiddleware.js');

dotenv.config();
//DB connection
connectDB();

//initialize express
const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});
app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

//api end points
// mount route
//Server ~ Port
const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
