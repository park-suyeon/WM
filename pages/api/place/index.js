// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from '../../../server/db/model/place.js';
import mongodbconnect from '../../../server/db/index.js';
export default async function handler(req, res) {
  await mongodbconnect();
  const placeList = await placemodel.find();
  res.status(200).json(placeList);
}
