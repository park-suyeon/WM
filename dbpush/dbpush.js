const uri = process.env.DB_URI;
const mongoose = require('mongoose');

const connectMongo = async () => mongoose.connect(uri);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Config = new Schema({
  subway: Object,
  wheelchairCharger: Object,
});
const ConfigModel = mongoose.models.Config || mongoose.model('Config', Config);

const result = require('./parse2');
const result2 = require('./parse3');

async function main() {
  await connectMongo();
  await ConfigModel.updateOne(
    {_id: '637f669fd2b14239913251b9'},
    {wheelchairCharger: result2},
  );
}
main();
