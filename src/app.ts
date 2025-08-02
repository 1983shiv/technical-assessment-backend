import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const db = mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ta")
// TODO: Connect to MongoDB (use environment variable for URI)
// TBD: mongoose.connect(process.env.MONGO_URI || '', { ... })

app.use('/api', productRoutes);

// TODO: Add error handling middleware

export default app;

// ---------------------------------

// import express from 'express';
// import feedbackRouter from './routes/feedback';

// const app = express();
// app.use(express.json());
// app.use('/api/feedback', feedbackRouter);

// export default app;
