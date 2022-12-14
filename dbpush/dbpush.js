const uri = process.env.DB_URI;

const mongoose = require("mongoose");

const connectMongo = async () => mongoose.connect(uri);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Config = new Schema({
  subway: Object,
  wheelchairCharger: Object,
  toilet: Object,
});
const ConfigModel = mongoose.models.Config || mongoose.model("Config", Config);

const result = require("./parse2");
const result2 = require("./parse3");
const result3 = require("./parse4");

async function main() {
  await connectMongo();
  await ConfigModel.updateOne(
    { _id: "6397aceab5b96bc4184ed77f" },
    { subway: result }
  );
}
main();
