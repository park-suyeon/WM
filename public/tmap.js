var Tmapv2;
var map;
var currentLocation;
var selectedStartLocation;
var selectedEndLocation;
var currentMarker;
var selectedStartPoiMarker;
var selectedEndPoiMarker;
var wheelchairMarkerList = [];

/**
 * global variable
 * tmap
 *    moveCenter
 */
function setWheelchairMark(markList) {
  console.log(markList);
  markList.forEach((element) => {
    var lonlat = new Tmapv2.LatLng(element.lat, element.lon);
    const mark = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: element.placeName, //Marker 타이틀.
    });
    wheelchairMarkerList.push(mark);
  });
}

const poiLatLngConverter = (poi) => {
  let { frontLat: lat, frontLon: lon } = poi;
  lat = lat.split(".").join("");
  lon = lon.split(".").join("");
  lat = [...[...lat].slice(0, 2), ".", ...[...lat].slice(2, 9)].join("");
  lon = [...[...lon].slice(0, 3), ".", ...[...lon].slice(3, 10)].join("");

  return {
    lat: Number(lat),
    lon: Number(lon),
  };
};

function setSelectedPoi(poi, isStart) {
  if (selectedEndPoiMarker) selectedEndPoiMarker.setMap(null);
  // const {lat, lon} = poiLatLngConverter(poi);
  if (isStart === "start") {
    const lat = poi.frontLat;
    const lon = poi.frontLon;
    selectedStartLocation = { lat, lon, name: poi.name };
    var lonlat = new Tmapv2.LatLng(lat, lon);
    selectedStartPoiMarker = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: "시작 : " + poi.name, //Marker 타이틀.
    });
    map.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.
  } else {
    const lat = poi.frontLat;
    const lon = poi.frontLon;
    selectedEndLocation = { lat, lon, name: poi.name };
    var lonlat = new Tmapv2.LatLng(lat, lon);
    selectedEndPoiMarker = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: "도착 : " + poi.name, //Marker 타이틀.
    });
    map.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.
  }

  window.tmap = {
    moveCenter,
    setSelectedPoi,
    setWheelchairMark,
    drawData,
    startX: selectedStartLocation?.lon,
    startY: selectedStartLocation?.lat,
    endX: selectedEndLocation?.lon,
    endY: selectedEndLocation?.lat,
  };
}

function trackingCurrentLocation() {
  setInterval(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      const { lat, lon } = currentLocation;
      if (currentMarker) currentMarker.setMap(null);
      currentMarker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(lat, lon), //Marker의 중심좌표 설정.
        map: map, //Marker가 표시될 Map 설정..
        // label: '현재위치', //Marker의 라벨.
        title: "현재위치", //Marker 타이틀.
      });
    });
  }, 1000);
}

function moveCenter(lat, lon) {
  if (!currentLocation) {
    alert("위치정보가 필요합니다.");
    return;
  }
  console.log("currentLoca : ", currentLocation);
  var lonlat = new Tmapv2.LatLng(
    lat || currentLocation.lat,
    lon || currentLocation.lon
  );
  map.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.
}

const getTmap = () => {
  map = new Tmapv2.Map("TMapApp", {
    center: new Tmapv2.LatLng(37.5652045, 126.98702028),
    width: "100%", // 지도의 넓이
    height: "600px", // 지도의 높이
    zoom: 17,
  });
  return map;
};

const attachTmap = () => {
  const tmap = getTmap();
  return tmap;
};

var new_polyLine = [];
var new_Click_polyLine = [];

function drawLineInfo(data) {
  // 5. 경로탐색 결과 Line 그리기
  var trafficColors = {
    extractStyles: true,
    /* 실제 교통정보가 표출되면 아래와 같은 Color로 Line이 생성됩니다. */
    trafficDefaultColor: "#636f63", //Default
    trafficType1Color: "#19b95f", //원할
    trafficType2Color: "#f15426", //지체
    trafficType3Color: "#ff970e", //정체
  };
  var style_red = {
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    strokeColor: "#FF0000",
    strokeWidth: 3,
    strokeDashstyle: "solid",
    pointRadius: 2,
    title: "this is a red line",
  };
  drawData(prtcl);
}
// // 6. 경로탐색 결과 반경만큼 지도 레벨 조정
// var newData = geoData[0];
// PTbounds = new Tmapv2.LatLngBounds();
//     for (var i = 0; i < newData.length; i++) {
//       var mData = newData[i];
//       var type = mData.geometry.type;
//       var pointType = mData.properties.pointType;
//       if(type == "Point"){
//         var linePt = new Tmapv2.LatLng(mData.geometry.coordinates[1],mData.geometry.coordinates[0]);
//         console.log(linePt);
//         PTbounds.extend(linePt);
//       }
//       else{
//         var startPt,endPt;
//         for (var j = 0; j < mData.geometry.coordinates.length; j++) {
//           var linePt = new Tmapv2.LatLng(mData.geometry.coordinates[j][1],mData.geometry.coordinates[j][0]);
//           PTbounds.extend(linePt);
//         }
//     }
//   }
//   map.fitBounds(PTbounds);

// },
var new_polyLine = [];

function drawData(data) {
  // 지도위에 선은 다 지우기
  new_polyLine = [];
  var resultStr = "";
  var distance = 0;
  var idx = 1;
  var newData = [];
  var equalData = [];
  var pointId1 = "-1234567";
  var ar_line = [];
  const myData = data.legs;

  for (var i = 0; i < myData.length; i++) {
    var leg = myData[i];
    //배열에 경로 좌표 저장
    if (leg.mode === "WORK") {
      for (var j = 0; j < leg.steps.length; j++) {
        const [p1, p2] = leg.steps[j].linestring.split(" ");
        const [p1Lon, p1Lat] = p1.split(",");
        const [p2Lon, p2Lat] = p2.split(",");

        // step으로 하면 추가
        var startPt = new Tmapv2.LatLng(p1Lat, p1Lon);
        var endPt = new Tmapv2.LatLng(p2Lat, p2Lon);
        ar_line.push(startPt);
        ar_line.push(endPt);
        // pointArray.push(leg);
      }
      var polyline = new Tmapv2.Polyline({
        path: ar_line,
        strokeColor: "#000000",
        strokeWeight: 6,
        map: map,
      });
    }
    if (leg.mode === "BUS" || leg.mode === "TRAIN") {
      for (var j = 0; j < leg.passStopList.stationList.length; j++) {
        const item = leg.passStopList.stationList[j];
        const { lon: p1Lon, lat: p1Lat } = item;

        // step으로 하면 추가
        var startPt = new Tmapv2.LatLng(p1Lat, p1Lon);
        ar_line.push(startPt);
        // pointArray.push(leg);
      }
      var polyline = new Tmapv2.Polyline({
        path: ar_line,
        strokeColor: "#444444",
        strokeWeight: 6,
        map: map,
      });
    }
  }
  addMarker(
    "llStart",
    selectedStartLocation?.lon,
    selectedStartLocation?.lat,
    1
  );
  addMarker("llEnd", selectedEndLocation?.lon, selectedEndLocation?.lat, 2);
  new_polyLine.push(polyline);
}

// 2. 시작, 도착 심볼찍기

var markerList = [];
var pointArray = [];

function addMarker(status, lon, lat, tag) {
  //출도착경유구분
  //이미지 파일 변경.
  var markerLayer;
  switch (status) {
    case "llStart":
      imgURL = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
      break;
    case "llPass":
      imgURL = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png";
      break;
    case "llEnd":
      imgURL = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
      break;
    default:
  }
  var marker = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(lat, lon),
    icon: imgURL,
    map: map,
  });
  // 마커 드래그 설정
  marker.tag = tag;
  marker.addListener("dragend", function (evt) {
    markerListenerEvent(evt);
  });
  marker.addListener("drag", function (evt) {
    markerObject = markerList[tag];
  });
  markerList[tag] = marker;
  return marker;
}

const main = () => {
  trackingCurrentLocation();
  setTimeout(() => {
    attachTmap();
  }, 1000);
};

main();

window.tmap = {
  moveCenter,
  setSelectedPoi,
  setWheelchairMark,
  drawData,
  startX: selectedStartLocation?.lon,
  startY: selectedStartLocation?.lat,
  endX: selectedEndLocation?.lon,
  endY: selectedEndLocation?.lat,
};
