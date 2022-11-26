import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCoordinate from "../hooks/useCoordinate";
import LoginButton from "./index/LoginButton";
import PresentPosition from "./index/PresentPosition";

const MapButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;
const TmapBlock = styled.div`
  position: relative;

  .routes {
    background-color: white;
    position: absolute;
    top: 100px;
    right: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
const Tmap = () => {
  console.log("map render");
  const [route, setRoute] = useState();
  const getRoute = async () => {
    try {
      const { startX, startY, endX, endY } = window.tmap;
      const { data: res } = await axios.post("/api/route", {
        startX,
        startY,
        endX,
        endY,
      });
      setRoute(res.metaData.plan.itineraries?.[0]?.legs);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  return (
    <TmapBlock>
      <div id="TMapApp"></div>
      <MapButtons>
        <PresentPosition></PresentPosition>
        <LoginButton></LoginButton>
      </MapButtons>
      {route && (
        <div className="routes">
          {route.map((v, index) => {
            if (v.mode === "WALK") {
              <div key={index}>
                <div>걷기</div>
                <div>{v.start.name}</div>
                <div>{v.end.name}</div>
                <div>{v.steps.map((step) => step.description + " -> ")}</div>
              </div>;
            }
            return (
              <div key={index}>
                <div>{v.mode}</div>
                <div>{v.start.name}</div>
                <div>{v.end.name}</div>
              </div>
            );
          })}
        </div>
      )}
      <Script type="text/javascript" src="/tmap.js"></Script>
    </TmapBlock>
  );
};

export default Tmap;
