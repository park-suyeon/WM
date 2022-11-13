import { useEffect, useRef } from "react";
import useCoordinate from "../hooks/useCoordinate";

// function App() {
//   const mapElement = useRef(null);
//   const [lat, lon] = useCoordinate();
//   useEffect(() => {
//     const { naver } = window;
//     if (!mapElement.current || !naver) return;

//     // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
//     const location = new naver.maps.LatLng(lat, lon);
//     const mapOptions = {
//       center: location,
//       zoom: 17,
//       zoomControl: true,
//       zoomControlOptions: {
//         position: naver.maps.Position.TOP_RIGHT,
//       },
//     };
//     const map = new naver.maps.Map(mapElement.current, mapOptions);
//     new naver.maps.Marker({
//       position: location,
//       map,
//     });
//   }, [lat, lon]);
//   return <div ref={mapElement} style={{ minHeight: "1000px" }} />;
// }
function App() {
  const mapElement = useRef(null);
  const [lat, lon] = useCoordinate();
  // const { Tmapv3 } = window;
  // useEffect(() => {
  //   if (!Tmapv3) return;
  //   var map = new Tmapv3.Map("tmap_div", {
  //     // 지도가 생성될 div
  //     center: new Tmapv3.LatLng(lat, lon),
  //     width: "100%", // 지도의 넓이
  //     height: "400px", // 지도의 높이
  //     zoom: 16, // 지도 줌레벨
  //   });
  // }, [lat, lon, Tmapv3]);
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = `//apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=${process.env.NEXT_PUBLIC_TMAP_CLIENT_ID}`;
  //   script.type = "text/javascript";
  //   script.async = "async";
  //   document.head.appendChild(script);
  //   const onLoadTMap = () => {
  //     console.log("tmap load1");
  //     console.log("tmap load2");
  //     var map = new window.Tmapv3.Map("tmap_div", {
  //       // 지도가 생성될 div
  //       center: new window.Tmapv3.LatLng(lat, lon),
  //       width: "100%", // 지도의 넓이
  //       height: "400px", // 지도의 높이
  //       zoom: 16, // 지도 줌레벨
  //     });
  //   };
  //   script.addEventListener("load", onLoadTMap);

  //   return () => script.removeEventListener("load", onLoadTMap);
  // }, []);

  return <div id="tmap_div" style={{ minHeight: "1000px" }} />;
}
export default App;
