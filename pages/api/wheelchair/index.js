// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from "../../../server/db/model/place.js";
import mongodbconnect from "../../../server/db/index.js";
import ConfigModel from "../../../server/db/model/config.js";
export default async function handler(req, res) {
  await mongodbconnect();
  console.log("place api start");
  const placeList = await ConfigModel.findOne({
    _id: "637f669fd2b14239913251b9",
  });
  res.status(200).json(placeList.wheelchairCharger);
}
