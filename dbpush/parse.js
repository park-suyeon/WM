const fs = require('fs');
const data = fs.readFileSync('./elevator2.csv').toString();
const data2 = data.split('\n');
const result = {};
data2.forEach(e => {
  const parsedData = e.split(',');
  const tempLocation = parsedData[1]
    ?.replace('POINT(', '')
    .replace(')', '')
    .split(' ');

  const tempName = parsedData[9]?.replace('\r', '');
  if (!tempName || !tempLocation) return;
  result[tempName] = {
    latitude: Number(tempLocation[0]),
    longitude: Number(tempLocation[1]),
    name: tempName,
  };
});
fs.writeFileSync('./p.json', JSON.stringify({subway: result}));
