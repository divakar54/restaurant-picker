import express from 'express';
import bodyParse from 'body-parser';
// import { Home } from './routes/home.js';
import Restaurants from './routes/restaurants.js';
import Orders from './routes/orders.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import restaurant from './models/models';
// import Restaurant from './models/models.js';
const app = express();
dotenv.config();

// running middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParse.json());


// databse connection
mongoose.connect(process.env.CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
                .then()
                .catch(error => console.log(error))

// Routes
// app.use('/', Home)
app.use('/api/v1/restaurants', Restaurants)
// app.use('/dine-out', DineOut)
app.use('/api/v1/orders', Orders)
// connection
app.listen(3001, (req, res) => {
    console.log("server running on 3001")
});