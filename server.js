// // server.js
// require('dotenv').config();  // Import dotenv for environment variables

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const taskRoutes = require('./routes/taskRoutes');

// const app = express();

// // CORS Configuration
// const allowedOrigins = ['https://sfrontend-ktzw.vercel.app/']; 
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'), false);
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));  // Apply CORS

// // Use Express's built-in JSON parser
// app.use(express.json()); 

// // Routes
// app.use('/tasks', taskRoutes);

// // MongoDB connection using .env variable
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error('MongoDB Connection Error:', err));

// // Start the server
// const port = 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));
