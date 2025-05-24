import { Request, Response } from 'express';
import ContactModel from '../models/Contact';
import { connectDB } from '../config/db';

export const handleContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const contact = new ContactModel({
      name,
      email,
      message
    });

    await contact.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
}; 