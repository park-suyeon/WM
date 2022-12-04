import placemodel from '../../../../server/db/model/place.js';
import mongodbconnect from '../../../../server/db/index.js';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    await mongodbconnect();
    const name = req.query.id;
    const place = await placemodel.findOne({ name });
    if (place) {
      res.status(200).json(place);
    } else {
      res.status(404).json({ message: 'nodata' });
    }
  }
}
