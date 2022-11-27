// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import placemodel from "../../../server/db/model/place.js";
import AccountModel from '../../../server/db/model/account.js';
import mongodbconnect from '../../../server/db/index.js';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await mongodbconnect();
    const {name, id, password, birthday, privarcy} = req.body;
    await AccountModel.create({name, id, password, birthday, privarcy});
    // const placeList = await placemodel.find();
    res.status(200).json('succes');
  }
}
