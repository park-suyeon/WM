// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from "../../../server/db/model/place.js";
import mongodbconnect from "../../../server/db/index.js";
import ConfigModel from "../../../server/db/model/config.js";
export default async function handler(req, res) {
  await mongodbconnect();
  const placeList = await ConfigModel.findOne({
    _id: "6388c5b916606f28c84adb5c",
  });
  res.status(200).json(placeList.toilet);
}
