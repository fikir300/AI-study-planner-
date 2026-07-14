const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // If process.env.MONGO_URI exists in .env, it will use your cloud database.
    // Otherwise, it falls back to a local mongodb URI.
    const connString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/study_planner';
    
    const conn = await mongoose.connect(connString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;