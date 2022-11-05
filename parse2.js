const fs = require("fs");
const data = fs.readFileSync("./TEST.csv").toString();
const data2 = data.split("\r\n");
console.log(data2);
const result = [];
data2.forEach((e) => {
  const [code, name, line, oocode, lat, lon, options] = e.split(",");
  result.push({
    code,
    name,
    line,
    oocode,
    lat,
    lon,
    options,
  });
});
console.log(result);
fs.writeFileSync("./p.json", JSON.stringify({ subway: result }));
