const uri =
  "mongodb+srv://root:1234@cluster0.fela1ej.mongodb.net/wmap?retryWrites=true&w=majority";

import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
