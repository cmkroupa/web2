import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import { ServerApiVersion } from 'mongodb';
import path from 'path'; // Import path module for resolving file paths

// Load environment variables from .env file
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;
const credentialsPath: string | undefined = process.env.MONGODB_CRED_PATH; // Path to your X.509 certificate file
const dbName: string | undefined = process.env.DB_NAME; // Your actual database name

// --- Environment Variable Validation ---
if (!uri) {
  console.error('Error: MONGODB_URI environment variable is not defined.');
  process.exit(1); // Exit process if critical env var is missing
}
if (!credentialsPath) {
  console.error('Error: MONGODB_CRED_PATH environment variable is not defined.');
  console.error('Make sure it points to your X.509 certificate file (e.g., ./certs/my-certificate.pem)');
  process.exit(1);
}
if (!dbName) {
  console.error('Error: DB_NAME environment variable is not defined.');
  process.exit(1);
}

// Resolve the absolute path to the certificate file
// This is crucial for consistent behavior across different deployment environments
const absoluteCredentialsPath = path.resolve(process.cwd(), credentialsPath);

// Define Mongoose connection options for X.509 authentication
const clientOptions: ConnectOptions = {
  tls: true, // Enable TLS/SSL for X.509 authentication
  tlsCertificateKeyFile: absoluteCredentialsPath, // Path to the X.509 certificate and private key file
  serverApi: {
    version: ServerApiVersion.v1, // Use ServerApiVersion.v1 (lowercase v)
    strict: true,
    deprecationErrors: true
  },
  dbName: dbName, // Specify the database name here
  // Other options (e.g., useNewUrlParser, useUnifiedTopology are deprecated in newer Mongoose)
};

// Cache the database connection to prevent multiple connections in long-running processes
let cachedDb: mongoose.Connection | null = null;

// Function to connect to MongoDB
export const connectDB = async (): Promise<mongoose.Connection> => {
  // If a connection already exists, return it
  if (cachedDb && cachedDb.readyState === 1) { // readyState 1 means connected
    console.log("Using cached MongoDB connection.");
    return cachedDb;
  }

  // If no connection or connection is not ready, establish a new one
  try {
    console.log("Attempting to connect to MongoDB with X.509...");
    const connection = await mongoose.connect(uri, clientOptions);
    cachedDb = connection.connection; // Cache the connection object
    console.log("Successfully connected to MongoDB with X.509!");
    return cachedDb;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Exit the process if the database connection fails, as the server cannot function without it
    process.exit(1);
  }
};
