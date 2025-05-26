import { Request, Response } from 'express';
import { Contact, IContact } from '../models/Contact'; // Import the Contact model
import mongoose from 'mongoose';

// Handler function for the contact form submission
export const handleContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Basic email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Create a new contact document using the Mongoose model
    const newContact: IContact = new Contact({
      name,
      email,
      message,
      createdAt: new Date(), // Automatically set by schema default, but explicit for clarity
    });

    // Save the document to the database
    await newContact.save();

    // Respond with success message and the ID of the new document
    res.status(201).json({
      message: 'Message sent successfully!',
      contactId: newContact._id, // Send back the ID for confirmation
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    // Check for specific Mongoose validation errors if needed
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map(err => (err as any).message);
      return res.status(400).json({ error: 'Validation failed', details: errors });
    }
    // Generic error response
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
};
