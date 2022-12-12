const fs = require("fs");
const data = fs.readFileSync("./mainInformation.csv").toString();
const data2 = data.split("\r\n");
const result = [];
data2.forEach((e) => {
  const [
    title,
    name,
    line,
    code,
    toilet,
    elevator,
    lift,
    Foothold,
    safeDistance,
    charge,
    left,
    right,
    lon,
    lat,
    alight,
  ] = e.split(",");
  result.push({
    title,
    name,
    line,
    code,
    toilet,
    elevator,
    lift,
    Foothold,
    safeDistance,
    charge,
    left,
    right,
    lon,
    lat,
    alight,
  });
});
module.exports = result;
