const uri = process.env.DB_URI;
const mongoose = require("mongoose");

const connectMongo = async () => mongoose.connect(uri);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Config = new Schema({
  subway: Object,
  wheelchairCharger: Object,
});
const ConfigModel = mongoose.models.Config || mongoose.model("Config", Config);

const result = require("./parse2");
const result2 = require("./parse3");
const result3 = require("./parse4");

async function main() {
  await connectMongo();
  await ConfigModel.updateOne(
    { _id: "63873ca7fcc59a6893a02f52" },
    { toilet: result3 }
  );
}
main();
