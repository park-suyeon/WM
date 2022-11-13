const fs = require("fs");
const data = fs.readFileSync("./mainFacility.csv").toString();
const data2 = data.split("\r\n");
console.log(data2);
const result = [];
data2.forEach((e) => {
  const [
    _lineCode,
    line,
    code,
    name,
    _transfer,
    call,
    lat,
    lon,
    safeDistance,
    Foothold,
  ] = e.split(",");
  result.push({
    _lineCode,
    line,
    code,
    name,
    _transfer,
    call,
    lat,
    lon,
    safeDistance,
    Foothold,
  });
});
console.log(result);
module.exports = result;
