var Tmapv2;
var map;
var currentLocation;
var selectedLocation;
var currentMarker;
var selectedPoiMarker;
var wheelchairMarkerList = [];
var restroomMarkerList = [];
/**
 * global variable
 * tmap
 *    moveCenter
 */
function setRestroomMark(markList) {
  console.log(markList);
  markList.forEach((element) => {
    var lonlat = new Tmapv2.LatLng(element.lat, element.lon);
    const mark = new Tmapv2.Marker({
      position: lonlat, //Marker의 중심좌표 설정.
      map: map, //Marker가 표시될 Map 설정..
      // label: '현재위치', //Marker의 라벨.
      title: element.placeName, //Marker 타이틀.
    });
    restroomMarkerList.push(mark);
  }); //화장실 마크 표시
}
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
  console.log("lat lon : ", lat, lon);
  lat = lat.split(".").join("");
  lon = lon.split(".").join("");
  console.log("[]", [...lat]);
  lat = [...[...lat].slice(0, 2), ".", ...[...lat].slice(2, 9)].join("");
  lon = [...[...lon].slice(0, 3), ".", ...[...lon].slice(3, 10)].join("");

  return {
    lat: Number(lat),
    lon: Number(lon),
  };
};

function setSelectedPoi(poi) {
  if (selectedPoiMarker) selectedPoiMarker.setMap(null);
  // const {lat, lon} = poiLatLngConverter(poi);
  const lat = poi.frontLat;
  const lon = poi.frontLon;
  selectedLocation = { lat, lon, name: poi.name };
  var lonlat = new Tmapv2.LatLng(lat, lon);
  selectedPoiMarker = new Tmapv2.Marker({
    position: lonlat, //Marker의 중심좌표 설정.
    map: map, //Marker가 표시될 Map 설정..
    // label: '현재위치', //Marker의 라벨.
    title: poi.name, //Marker 타이틀.
  });
  map.setCenter(lonlat); // 지도의 중심 좌표를 설정합니다.

  window.tmap = {
    moveCenter,
    setSelectedPoi,
    setWheelchairMark,
    setRestroomMark,
    startX: currentLocation?.lon,
    startY: currentLocation?.lat,
    endX: selectedLocation?.lon,
    endY: selectedLocation?.lat,
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

function moveCenter() {
  if (!currentLocation) {
    alert("위치정보가 필요합니다.");
    return;
  }
  console.log("currentLoca : ", currentLocation);
  var lonlat = new Tmapv2.LatLng(currentLocation.lat, currentLocation.lon);
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
  startX: currentLocation?.lon,
  startY: currentLocation?.lat,
  endX: selectedLocation?.lon,
  endY: selectedLocation?.lat,
};
