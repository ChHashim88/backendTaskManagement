// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Enable CORS for all routes
app.use(cors());
// Parse JSON bodies
app.use(bodyParser.json());

// Use task routes for '/tasks' endpoints
app.use('/tasks', taskRoutes);

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Hashim:S%40ndli123@task.wfqcc.mongodb.net/taskDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
