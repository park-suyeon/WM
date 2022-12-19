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
  const options = [];
  if (charge !== "0") {
    options.push({ name: "휠체어 급속 충전기", desc: "", images: [] });
  }
  if (elevator !== "0") {
    options.push({ name: "승강기", desc: "", images: [] });
  }
  if (toilet !== "0") {
    options.push({ name: "장애인 화장실", desc: "", images: [] });
  }
  if (lift !== "0") {
    options.push({ name: "휠체어 리프트", desc: "", images: [] });
  }
  if (safeDistance !== "0") {
    options.push({
      name: "기타",
      desc: "열차-승강장 이격거리" + safeDistance + "cm",
      images: [],
    });
  } else if (Foothold !== "0") {
    options.push({ name: "기타", desc: "역사에 안전팔판 있음", images: [] });
  }

  result.push({
    name: name,
    address: line + "호선" + name,
    options,
    lat: lat,
    lon: lon,
    author: "WMap",
  });
});
fs.writeFileSync("./data.JSON", JSON.stringify(result));
