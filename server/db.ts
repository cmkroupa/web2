import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ServerApiVersion } from 'mongodb';
import path from 'path';

dotenv.config();

const uri = process.env.MONGODB_URI!;
const credentialsPath = process.env.MONGODB_CRED_PATH!;
const dbName = process.env.DB_NAME!;

const absoluteCredentialsPath = path.resolve(process.cwd(), credentialsPath);

export const connectDB = async () => {
  await mongoose.connect(uri, {
    tls: true,
    tlsCertificateKeyFile: absoluteCredentialsPath,
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    dbName,
  });
  console.log('Connected to MongoDB ');
};
