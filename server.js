const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import CORS once
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// CORS Configuration
const allowedOrigins = ['https://sfrontend-ktzw.vercel.app/']; 
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests from specified origins or no origin (i.e., same-origin requests)
      callback(null, true);
    } else {
      // Reject requests from other origins
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Use the CORS middleware with your options
app.use(cors(corsOptions));  // Correctly apply the corsOptions

// Use Express's built-in JSON parser (no need for body-parser)
app.use(express.json());  // This replaces body-parser.json()

// Routes
app.use('/tasks', taskRoutes);

// MongoDB connection (use environment variables for security in production)
mongoose
  .connect('mongodb+srv://Hashim:S%40ndli123@task.wfqcc.mongodb.net/taskDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
