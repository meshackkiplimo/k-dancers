import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db';
import eventRoutes from './routes/eventRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
// Connect to MongoDB
connectDB()

// Routes
app.use('/api', eventRoutes);

// Error Handling
app.use(errorHandler);


 app.listen(PORT, () => {
     console.log (`Server running on: http://localhost:${PORT}`);
    });


export default app; 