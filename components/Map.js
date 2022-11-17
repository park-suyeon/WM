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
import { useEffect } from "react";
import useCoordinate from "../hooks/useCoordinate";

const Tmap = () => {
  const [lat, lon] = useCoordinate();
  const dLat = 37.566481622437934;
  const dLon = 126.98502302169841;
  useEffect(() => {
    if (!lat) return;
    const script = document.createElement("script");
    script.innerHTML = `         
        if(!window.tmapControl?.setted) {
          window.tmapControl = {
            setted: true,
          }
        function initTmap() {
            var map = new Tmapv3.Map("TMapApp", {
                center: new Tmapv3.LatLng(${lat ? lat : dLat},${
      lon ? lon : dLon
    }),
                width: "600px",
                height: "600px",
                zoom:15
            });
          }
        

          initTmap();
        } 
   `;
    script.type = "text/javascript";
    script.async = "async";
    document.head?.appendChild(script);
  }, [lat, lon]);
  return <div id="TMapApp"></div>;
};

export default Tmap;
