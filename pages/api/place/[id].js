import placemodel from "../../../server/db/model/place.js";
import mongodbconnect from "../../../server/db/index.js";
export default async function handler(req, res) {
  await mongodbconnect();
  const id = req.params.id;
  console.log("place api start");
  const place = await placemodel.find({ _id: id });
  res.status(200).json(place[0]);
}
