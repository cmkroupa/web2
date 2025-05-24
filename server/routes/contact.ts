import express from 'express';
import { Contact } from '../models/Contact';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      message
    });

    // Save to database
    await contact.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router; 