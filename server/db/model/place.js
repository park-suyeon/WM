import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Place = new Schema({
  name: String,
  address: String,
  startTime: String,
  phone: String,
  webSite: String,
  options: [Object],
  images: [String],
  updatedAt: Date,
  lat: Number,
  lon: Number,
});
const Placemodel = mongoose.models.Place || mongoose.model("Place", Place);
export default Placemodel;
