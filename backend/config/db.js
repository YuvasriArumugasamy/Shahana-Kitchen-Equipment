import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shahana_kitchen_db';
    const conn = await mongoose.connect(dbUri);
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error]: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
