const dns = require('node:dns');
dns.setServers(['1.1.1.1', '1.0.0.1']);
require('dotenv').config(); 
const express = require('express');
const connectDB = async () => {
  const db = require('./config/database');
  await db();
};
const authRoutes = require('./routes/authRoutes');

const app = express();

connectDB();

app.use(express.json());


app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('AI Study Planner Auth Service is running...');
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});