import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Config = new Schema({
  subway: Object,
});
const ConfigModel = mongoose.models.Config || mongoose.model("Config", Config);
export default ConfigModel;
