const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// DB Connection
mongoose
  .connect(process.env.DB_CONNECT_CLOUD, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB!");
    console.error(error);
  });
  
// apps middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) ;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// not found route
app.use("**", (req, res) => {
  res.status(404).send({ message: "Route not found" });
});

module.exports = app;