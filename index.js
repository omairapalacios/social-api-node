const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users')

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
  , () => {
    console.log('Connected to MongoDB');
  })


//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute)

app.listen(4000, () => {
  console.log('Server is running');
})