const uri = process.env.DB_URI;
import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
