import { useEffect, useRef } from "react";
import useCoordinate from "../hooks/useCoordinate";

function App() {
  const mapElement = useRef(null);
  const [lat, lon] = useCoordinate();
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(lat, lon);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [lat, lon]);
  return <div ref={mapElement} style={{ minHeight: "400px" }} />;
}

export default App;
