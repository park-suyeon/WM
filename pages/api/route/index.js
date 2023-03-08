import { start } from "nprogress";
import Placemodel from "../../../server/db/model/place";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
const fs = require("fs");
//const data = require("../../../components/test2.json");
export default async function handler(req, res) {
  const { startX, startY, endX, endY } = req.body;

  if (!startX || !startY || !endX || !endY)
    return res.status(400).send("없는 값");

  const { data } = await axios({
    method: "post",
    url: "https://apis.openapi.sk.com/transit/routes",
    data: {
      startX,
      startY,
      endX,
      endY,
      lang: 0,
      format: "json",
      count: 10,
    },
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      appKey: process.env.TMAP_CLIENT_ID,
    },
  });
  const itineraries = data.metaData?.plan.itineraries;

  const tempI = JSON.parse(JSON.stringify(itineraries));
  const lessTransfer = tempI.sort((a, b) => {
    return (
      a.legs.filter((ia) => ia.mode === "TRANSFER").length -
      b.legs.filter((ia) => ia.mode === "TRANSFER").length
    );
  })[0];

  const places = await Placemodel.find();
  let onlySubway =
    itineraries.find((item) => {
      return !item.legs.some((leg) => leg.mode === "BUS");
    }) || null;
  let isPedestrian = false;
  let result = false;
  if (onlySubway) {
    const subways = onlySubway.legs.filter((leg) => {
      return leg.mode === "SUBWAY";
    });
    result = subways.some((subway) => {
      const startPlace = places.find((place) => {
        return place.name === subway.start.name;
      });
      const hasStartplace = startPlace.options.find((option) => {
        return option.name === "승강기";
      });
      if (!hasStartplace) {
        return true;
      }
      const endPlace = places.find((place) => {
        return place.name === subway.end.name;
      });
      const hasendplace = endPlace.options.find((option) => {
        return option.name === "승강기";
      });
      if (!hasendplace) {
        return true;
      }

      return false;
    });
  }
  if (result || !onlySubway) {
    isPedestrian = true;
    const pedestrianResult = await axios.post(
      "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1",
      {
        startX,
        startY,
        endX,
        endY,
        speed: 3,
        searchOption: 30,
        startName: "start",
        endName: "end",
      }
    );
    console.log("pedestrianResult : ", pedestrianResult.data);
    onlySubway = {
      ...pedestrianResult.data,
      totalTime: pedestrianResult.data.features[0].properties.totalTime,
    };
  }
  const faster = itineraries.sort((a, b) => {
    return a.totalTime - b.totalTime;
  })[0];

  res.status(200).json({ faster, onlySubway, lessTransfer, isPedestrian });
}
