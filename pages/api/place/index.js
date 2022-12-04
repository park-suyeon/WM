// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from '../../../server/db/model/place.js';
import mongodbconnect from '../../../server/db/index.js';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    await mongodbconnect();
    const placeList = await placemodel.find();
    return res.status(200).json(placeList);
  }
  if (req.method === 'POST') {
    const { name, lat, lon, address } = req.body;
    await mongodbconnect();
    const newPoi = await placemodel.create({ name, lat, lon, address });
    return res.status(200).json(newPoi);
  }
  return res.status(500).json({ message: 'no method' });
}
