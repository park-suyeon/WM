// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
export default async function handler(req, res) {
  const {startX, startY, endX, endY} = req.body;

  console.log(startX, startY, endX, endY);
  if (!startX || !startY || !endX || !endY)
    return res.status(400).send('없는 값');

  const {data} = await axios({
    method: 'post',
    url: 'https://apis.openapi.sk.com/transit/routes',
    data: {
      startX,
      startY,
      endX,
      endY,
      lang: 0,
      format: 'json',
      count: 10,
    },
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
    },
  });

  res.status(200).json(data);
}
