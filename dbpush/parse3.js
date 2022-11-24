const fs = require("fs");
const data = fs.readFileSync("./wheelchairCharger.csv").toString();
const data2 = data.split("\r\n");
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
console.log(result);
module.exports = result;
