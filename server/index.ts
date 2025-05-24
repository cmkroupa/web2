import express from 'express';
import cors from 'cors';
import { handleContact } from '../src/api/contact';
import { connectDB } from '../src/config/db';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', handleContact);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 