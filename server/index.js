import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

//intialize express application

const app = express(); //run as a function

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit:"30mb", extended: true})); //to send large size images
app.use(bodyParser.urlencoded({limit:"30mb", extended: true})); //properly send our request

app.use(cors());

//connecting server application with a real database connection

const CONNECTION_URL= 'mongodb+srv://govindkulkarni20:govindkul123@cluster0.xrj6lxm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
.then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on PORT : ${PORT}`)))
  .catch((error) => console.log(error.message));



