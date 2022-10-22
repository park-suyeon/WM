import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
  name: String,
  id: String,
  password: String,
  birthday: String,
  privarcy: Boolean,
});
const AccountModel =
  mongoose.models.Account || mongoose.model("Account", Account);
export default AccountModel;
