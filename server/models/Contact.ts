import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for a Contact document
export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define the Contact Schema
const ContactSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^\S+@\S+\.\S+$/ },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Contact model
// Mongoose.models.Contact checks if the model already exists to prevent redefinition in hot-reloading environments
export const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
