import placemodel from "../../../server/db/model/place.js";
import mongodbconnect from "../../../server/db/index.js";
export default async function handler(req, res) {
  if (req.method === "GET") {
    await mongodbconnect();
    const id = req.query.id;
    console.log("place api start");
    const place = await placemodel.find({ _id: id });
    res.status(200).json(place[0]);
  }
  if (req.method === "PUT") {
    await mongodbconnect();
    const id = req.query.id;
    console.log("place api start");
    console.log(req.body);
    //  await placemodel.updateOne({ _id: id }, req.body);
    res.status(200).json();
  }
}
