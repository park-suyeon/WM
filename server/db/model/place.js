import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Place = new Schema(
  {
    name: String,
    address: String,
    startTime: String,
    phone: String,
    webSite: String,
    options: [Object],
    updatedAt: Date,
    lat: Number,
    lon: Number,
    timestamp: Date,
    author: String,
  },
  {
    timestamps: true,
  }
);
const Placemodel = mongoose.models.Place || mongoose.model("Place", Place);
export default Placemodel;
