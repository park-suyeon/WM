// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
const data = require("../../../components/test.json");
export default async function handler(req, res) {
  // const { startX, startY, endX, endY } = req.body;

  // if (!startX || !startY || !endX || !endY)
  //   return res.status(400).send("없는 값");

  // const { data } = await axios({
  //   method: "post",
  //   url: "https://apis.openapi.sk.com/transit/routes",
  //   data: {
  //     startX,
  //     startY,
  //     endX,
  //     endY,
  //     lang: 0,
  //     format: "json",
  //     count: 10,
  //   },
  //   headers: {
  //     accept: "application/json",
  //     "content-type": "application/json",
  //     appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
  //   },
  // });
  // const itineraries = data.metaData.plan.itineraries;

  // const tempI = JSON.parse(JSON.stringify(itineraries));
  // const lessTransfer = tempI.sort((a, b) => {
  //   return (
  //     a.legs.filter((ia) => ia.mode === "TRANSFER").length -
  //     b.legs.filter((ia) => ia.mode === "TRANSFER").length
  //   );
  // })[0];
  // const onlySubway =
  //   itineraries.find((item) => {
  //     return !item.legs.some((leg) => leg.mode === "BUS");
  //   }) || lessTransfer;
  // const faster = itineraries.sort((a, b) => {
  //   return a.totalTime - b.totalTime;
  // })[0];

  // res.status(200).json({ faster, onlySubway, lessTransfer });
  res.status(200).json(data);
}
