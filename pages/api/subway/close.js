// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from "../../../server/db/model/place.js";
import mongodbconnect from "../../../server/db/index.js";
import ConfigModel from "../../../server/db/model/config.js";
import { get } from "mongoose";
function getDistance(lat1, lon1, lat2, lon2) {
  if (lat1 == lat2 && lon1 == lon2) return 0;

  var radLat1 = (Math.PI * lat1) / 180;
  var radLat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radTheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  return dist;
}
export default async function handler(req, res) {
  console.log(req.query.lat, req.query.lon);
  const { lat, lon } = req.query;
  await mongodbconnect();
  console.log("place api start");
  const configList = await ConfigModel.find();
  const subwayValues = configList[0].subway;

  console.log(subwayValues);
  let closestSubway = subwayValues[0];
  subwayValues.forEach((sb) => {
    if (
      getDistance(closestSubway.lat, closestSubway.lon, lat, lon) >
      getDistance(sb.lat, sb.lon, lat, lon)
    ) {
      closestSubway = sb;
    }
  });

  res
    .status(200)
    .json({ ...closestSubway, left: "test left", right: "test right" });
}