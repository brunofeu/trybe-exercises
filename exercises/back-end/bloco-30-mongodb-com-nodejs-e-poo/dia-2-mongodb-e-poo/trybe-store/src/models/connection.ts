import mongoose from "mongoose";

const connectToDatabase = (
  mongoDatabaseURI = 'mongodb://localhost:27017/TrybeStore'
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;