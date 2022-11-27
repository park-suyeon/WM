// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import placemodel from '../../../server/db/model/place.js';
import mongodbconnect from '../../../server/db/index.js';
import ConfigModel from '../../../server/db/model/config.js';
export default async function handler(req, res) {
  await mongodbconnect();
  const configList = await ConfigModel.find();
  res.status(200).json(configList);
}
