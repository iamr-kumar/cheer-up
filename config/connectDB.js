// MongoDB connection
const mongoose = require('mongoose');
// const config = require("config");
require('dotenv').config();

const db = process.env.MONGODB_URI;

const connectDB = () => {
  mongoose
    .connect(db, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('MongoDB connected!'))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
