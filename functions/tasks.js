// functions/tasks.js

const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('../routes/taskRoutes');

const app = express();

// CORS Configuration
const allowedOrigins = ['https://sfrontend-ktzw.vercel.app/']; 
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));  // Apply CORS
app.use(express.json());  // Use Express's built-in JSON parser
app.use('/tasks', taskRoutes);  // Use the routes you've already defined

// Health Check Route (Test if backend is working)
app.get('/health-check', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Backend Status</title>
      </head>
      <body>
        <h1>Backend is running successfully!</h1>
        <p>API is deployed and working.</p>
      </body>
    </html>
  `);
});

// MongoDB connection using environment variables
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Wrap your Express app to make it compatible with Netlify functions
module.exports.handler = serverless(app);
