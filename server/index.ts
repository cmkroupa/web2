import express from 'express';
import cors from 'cors';
import { handleContact } from './routes/contact';
import { connectDB } from './config/db';
import dotenv from 'dotenv'; // Import dotenv to load environment variables

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.NEXT_PUBLIC_API_BASE_URL || 5000; // Use port from environment variable or default to 5000

// --- Middleware ---
// Apply CORS middleware. It's crucial to place this early in your middleware stack.
// For development, allowing all origins is fine. For production, specify your frontend origin.
app.use(cors({
  origin: '*', // Allow all origins for development. Change to your frontend URL in production.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow common methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

// Parse JSON request bodies - must come before route handlers that use req.body
app.use(express.json());

// --- Database Connection ---
// Connect to MongoDB when the server starts
connectDB()
  .then(() => {
    console.log('MongoDB connection established successfully.');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    // The connectDB function already calls process.exit(1) on failure,
    // but this catch block is good for logging.
  });

// --- Routes ---

// Explicitly handle OPTIONS requests for the /api/contact route (CORS preflight)
// The `cors` middleware typically handles this, but adding it explicitly can help diagnose.
app.options('/api/contact', cors()); // Respond to preflight requests

// POST route for the contact form
app.post('/api/contact', handleContact);

// Basic root route for health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
