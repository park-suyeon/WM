const uri = process.env.DB_URI;
console.log(uri);
const mongoose = require("mongoose");

const connectMongo = async () => mongoose.connect(uri);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Config = new Schema({
  subway: Object,
});
const ConfigModel = mongoose.models.Config || mongoose.model("Config", Config);

const result = require("./parse2");

async function main() {
  await connectMongo();
  await ConfigModel.updateOne(
    { _id: "6365d290c039d055d819daf1" },
    { subway: result }
  );
}
main();
