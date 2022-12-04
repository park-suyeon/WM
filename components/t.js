const serverDataList = [{ date: 'date', d1: 1, d2: 2, d3: 3, d4: 4 }];

const lineChartData = [];
let tempArray = [];
serverDataList.forEach((item) => {
  tempArray.push({ x: item.date, y: item.d1 });
});
lineChartData.push([...tempArray]);

tempArray = [];
serverDataList.forEach((item) => {
  lineChartData.push({ x: item.date, y: item.d2 });
});
lineChartData.push([...tempArray]);

tempArray = [];
serverDataList.forEach((item) => {
  lineChartData.push({ x: item.date, y: item.d3 });
});
lineChartData.push([...tempArray]);

tempArray = [];
serverDataList.forEach((item) => {
  lineChartData.push({ x: item.date, y: item.d4 });
});
lineChartData.push([...tempArray]);
