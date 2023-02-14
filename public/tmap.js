var Tmapv2;
var map;
var currentLocation;
var selectedStartLocation;
var selectedEndLocation;
var currentMarker;
var selectedStartPoiMarker;
var selectedEndPoiMarker;
var wheelchairMarkerList = [];
var toiletMarkerList = [];
let new_polyLine = [];
let currentTransferMark = [];
let startMarker;
let endMarker;
/**
 * global variable
 * tmap
 *    moveCenter
 */

const attachTmap = () => {
  const tmap = getTmap();
  return tmap;
};
function setWheelchairMark(markList) {
  toiletMarkerList.forEach((e) => {
    e.setMap(null);
  });
  toiletMarkerList = [];
  markList.forEach((element) => {
    const lonlat = new Tmapv2.LatLng(element.lat, element.lon);
    const mark = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      //Marker의 라벨.
      label: `<span class="Tmap-label"><div class="labelBox">
      <div class="Tmap-label-title">${element.placeName}</div>
      <div class="Tmap-label-content">${element.detailedAddress}</div></div></span>`,
      icon: "/images/icon/markerCharge.png",
      iconSize: new Tmapv2.Size(25, 32),
      // title: element.placeName, //Marker 타이틀.
    });
    wheelchairMarkerList.push(mark);
  });
}

function setToiletMark(markList) {
  wheelchairMarkerList.forEach((e) => {
    e.setMap(null);
  });
  wheelchairMarkerList = [];

  markList.forEach((element) => {
    const lonlat = new Tmapv2.LatLng(element.lat, element.lon);
    const mark = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      label: `<span class="Tmap-label"><div class="labelBox">
      <div class="Tmap-label-title">${element.name}</div>
      <div class="Tmap-label-content">${element.detailed}</div></div></span>`,
      icon: "/images/icon/markerToilet.png",
      iconSize: new Tmapv2.Size(25, 32),
    });
    toiletMarkerList.push(mark);
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
    startMarker = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: "시작 : " + poi.name, //Marker 타이틀.
      icon: "/images/icon/markerStart.png",
      iconSize: new Tmapv2.Size(25, 32),
    });
    map?.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.
  } else {
    const lat = poi.frontLat;
    const lon = poi.frontLon;
    selectedEndLocation = { lat, lon, name: poi.name };
    var lonlat = new Tmapv2.LatLng(lat, lon);
    endMarker = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: "도착 : " + poi.name, //Marker 타이틀.
      icon: "/images/icon/markerEnd.png",
      iconSize: new Tmapv2.Size(25, 32),
    });
    map?.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.
  }

  window.tmap = {
    routesPedestrian,
    attachTmap,
    moveCenter,
    setSelectedPoi,
    setWheelchairMark,
    setToiletMark,
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
        icon: "/images/icon/markerPresent.png",
        iconSize: new Tmapv2.Size(25, 32),
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
    height: window.innerHeight + "px", // 지도의 높이
    zoom: 17,
    zoomControl: false,
  });
  return map;
};

//지도의 사이즈를 지정한 값만큼 변경할 수 있는 함수입니다.
function fn_Resize() {}

function fn_Update() {
  var mapResize = document.getElementById("TMapApp"); //map의 div
  mapResize.style.width = "100%"; //map의 width 변경
  mapResize.style.height = window.innerHeight; //map의 height 변경
  //맵의 div의 사이즈가 외부 코드로 동적으로 바뀐 경우 호출합니다.
  map.resize(); //map 크기 재설정
}

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

function drawData(data) {
  console.log("drawData:", data);
  startMarker?.setMap(null);
  endMarker?.setMap(null);
  // 지도위에 선은 다 지우기
  new_polyLine.forEach((item) => {
    item.setMap(null);
  });
  currentTransferMark.forEach((item) => {
    item.setMap(null);
  });
  new_polyLine = [];
  currentTransferMark = [];
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
    let polyline;
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
      polyline = new Tmapv2.Polyline({
        path: ar_line,
        strokeColor: "#000000",
        strokeWeight: 6,
        map: map,
      });
    }
    if (leg.mode === "BUS" || leg.mode === "TRAIN" || leg.mode === "SUBWAY") {
      for (var j = 0; j < leg.passStopList.stationList.length; j++) {
        const item = leg.passStopList.stationList[j];
        const { lon: p1Lon, lat: p1Lat } = item;

        // step으로 하면 추가
        var startPt = new Tmapv2.LatLng(p1Lat, p1Lon);
        ar_line.push(startPt);
        // pointArray.push(leg);
      }
      let strokeColor = "#ffffff";
      if (leg.mode === "BUS") {
        strokeColor = "#ff00dd";
      }
      if (leg.mode === "TRAIN") {
        strokeColor = "#0000ff";
      }
      if (leg.mode === "SUBWAY") {
        strokeColor = "#00ff00";
      }
      polyline = new Tmapv2.Polyline({
        path: ar_line,
        strokeColor,
        strokeWeight: 6,
        map: map,
      });
    }
    if (leg.mode === "TRANSFER") {
      const marker = addMarker("llPass", leg.start?.lon, leg.start?.lat, 1);
      currentTransferMark.push(marker);
    }
    if (!polyline) continue;
    new_polyLine.push(polyline);
  }

  startMarker = addMarker(
    "llStart",
    selectedStartLocation?.lon,
    selectedStartLocation?.lat,
    1
  );
  endMarker = addMarker(
    "llEnd",
    selectedEndLocation?.lon,
    selectedEndLocation?.lat,
    2
  );
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
      imgURL = "/images/icon/markerStart.png";
      break;
    case "llPass":
      imgURL = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png";
      break;
    case "llEnd":
      imgURL = "/images/icon/markerEnd.png";
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

function routesPedestrian(result) {
  console.log(result);
  if (!result) {
    return;
  }
  const startx = selectedStartLocation.lat;
  const starty = selectedStartLocation.lon;
  const endx = selectedStartLocation.lat;
  const endy = selectedStartLocation.lon;
  const markerArr = [];
  const lineArr = [];
  const tData = [];
  var optionObj = {
    coordType: "WGS84GEO", //응답좌표 타입 옵션 설정 입니다.
    addressType: "A10", //주소타입 옵션 설정 입니다.
  };

  var startLatLng = new Tmapv2.LatLng(starty, startx);
  var endLatLng = new Tmapv2.LatLng(endy, endx);

  var resultData = result?.features;
  console.log("resultData: ", resultData);
  //결과 출력
  var appendHtml =
    "보행자 경로안내: 총 거리 : " +
    (resultData[0].properties.totalDistance / 1000).toFixed(1) +
    "km,";
  appendHtml +=
    " 총 시간 : " + (resultData[0].properties.totalTime / 60).toFixed(0) + "분";

  console.log(appendHtml);

  // 시작마커설정
  var marker_s = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(starty, startx),
    icon: "http://topopen.tmap.co.kr/imgs/start.png",
    iconSize: new Tmapv2.Size(24, 38),
    map: map,
  });

  // 도착마커설정
  var marker_e = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(endy, endx),
    icon: "http://topopen.tmap.co.kr/imgs/arrival.png",
    iconSize: new Tmapv2.Size(24, 38),
    map: map,
  });
  markerArr.push(marker_s);
  markerArr.push(marker_e);

  // GeoJSON함수를 이용하여 데이터 파싱 및 지도에 그린다.
  var jsonObject = new Tmapv2.extension.GeoJSON();
  var jsonForm = jsonObject.read(result);

  jsonObject.drawRoute(map, jsonForm, {}, function (e) {
    // 경로가 표출된 이후 실행되는 콜백 함수.

    for (var m of e.markers) {
      markerArr.push(m);
    }
    for (var l of e.polylines) {
      lineArr.push(l);
    }

    var positionBounds = new Tmapv2.LatLngBounds(); //맵에 결과물 확인 하기 위한 LatLngBounds객체 생성
    for (var polyline of e.polylines) {
      for (var latlng of polyline.getPath().path) {
        positionBounds.extend(latlng); // LatLngBounds의 객체 확장
      }
    }

    map.panToBounds(positionBounds);
    map.zoomOut();
  });

  // tData.getRoutePlanForPeopleJson(
  //   startLatLng,
  //   endLatLng,
  //   "출발지",
  //   "도착지",
  //   optionObj,
  //   params
  // );
}

main();

window.tmap = {
  routesPedestrian,
  attachTmap,
  moveCenter,
  setSelectedPoi,
  setWheelchairMark,
  setToiletMark,
  drawData,
  startX: selectedStartLocation?.lon,
  startY: selectedStartLocation?.lat,
  endX: selectedEndLocation?.lon,
  endY: selectedEndLocation?.lat,
};
