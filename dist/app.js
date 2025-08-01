import express from 'express';
import feedbackRouter from './routes/feedback';
const app = express();
app.use(express.json());
app.use('/api/feedback', feedbackRouter);
export default app;
