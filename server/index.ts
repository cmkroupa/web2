import express from 'express';
import cors from 'cors';
import { connectDB } from './db';
import { handleContact } from './handlers/contactHandler';


const app = express();

app.use(cors());
app.use(express.json());

connectDB().catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});

app.post('/api/contact', (req, res) => {
  console.log('Received contact request:', { body: req.body, headers: req.headers });
  handleContact(req, res);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server on port 5000
app.listen(8080, () => {
  console.log('Server is running on http://localhost:5000');
});
