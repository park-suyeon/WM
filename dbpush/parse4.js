const fs = require("fs");
const data = fs.readFileSync("./toilet.csv").toString();
const data2 = data.split("\r\n");
const result = [];
data2.forEach((e) => {
  const [line, name, detailed, lon, lat] = e.split(",");
  result.push({
    line,
    name,
    detailed,
    lon,
    lat,
  });
});
module.exports = result;
