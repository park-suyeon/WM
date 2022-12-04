const fs = require("fs");
const data = fs.readFileSync("./wheelchairCharger.csv").toString();
const data2 = data.split("\n");
console.log(data2.length);

const result = [];
data2.forEach((e) => {
  const [
    placeName,
    province,
    city,
    addrees,
    lat,
    lon,
    detailedAddress,
    weekdayOpen,
    weekdayClose,
    satOpen,
    satClose,
    holidayOpen,
    holidayClose,
    simultaneousUse,
    airPump,
    chargePhone,
    management,
    callManagement,
    dateOfUpdate,
  ] = e.split(",");
  result.push({
    placeName,
    province,
    city,
    addrees,
    lat,
    lon,
    detailedAddress,
    weekdayOpen,
    weekdayClose,
    satOpen,
    satClose,
    holidayOpen,
    holidayClose,
    simultaneousUse,
    airPump,
    chargePhone,
    management,
    callManagement,
    dateOfUpdate,
  });
});
module.exports = result;
