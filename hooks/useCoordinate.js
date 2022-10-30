import { useEffect, useState } from "react";

const useCoordinate = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    function success(event) {
      setLatitude(event.coords.latitude); // 위도
      setLongitude(event.coords.longitude); // 경도
    }
    function error(err) {
      console.log(err);
    }

    console.log("geo", window.navigator.geolocation);
    if (window.navigator.geolocation) {
      // geolocation 지원할 경우 현재 위치 get
      window.navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);
  return [latitude, longitude];
};
export default useCoordinate;
