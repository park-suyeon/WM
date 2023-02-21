import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import SearchHeader from "./rootc/SearchHeader";
import Order from "./search/Order";
import StationRoot1 from "./rootc/StationRoot1";
import StationRoot2 from "./rootc/StationRoot2";
import StationRoot3 from "./rootc/StationRoot3";
import Start from "./rootc/Start";
import Destination from "./rootc/Destination";
import TimeTransfer from "./rootc/TimeTransfer";
import { useEffect, useState } from "react";
import SubwayLine from "./rootc/SubwayLine";

const Content1 = styled.div`
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;
const Contente2 = styled.div`
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: -1;
  .icon {
    margin: 7px;
    width: 15px;
  }
`;

export default function Root({ setPage, className }) {
  const [faster, setFaster] = useState();
  const [isPedestrian, setIsPedestrian] = useState();
  const [onlySubway, setOnlySubway] = useState();
  const [lessTransfer, setLessTransfer] = useState();
  const [currentOrder, setCurrentOrder] = useState("onlySubway"); // lessTransfer | faster
  const locationInfo = JSON.parse(localStorage.getItem("locationInfo"));
  const [startSearchText, setStartSearchText] = useState(
    locationInfo?.isStart ? locationInfo.name : ""
  );
  const [endSearchText, setEndSearchText] = useState(
    locationInfo && !locationInfo?.isStart ? locationInfo.name : ""
  );
  let selectedPath; //css consol.log();찍어서 보고 어떻게 표현할지 수정

  if (currentOrder === "onlySubway") {
    selectedPath = onlySubway;
  }
  if (currentOrder === "lessTransfer") {
    selectedPath = lessTransfer;
  }
  if (currentOrder === "faster") {
    selectedPath = faster;
  }

  useEffect(() => {
    if (window.tmap && selectedPath) {
      if (isPedestrian && currentOrder === "onlySubway") {
        console.log(selectedPath);
        window.tmap.routesPedestrian(selectedPath);
      } else {
        window.tmap.drawData(selectedPath);
      }
    }
  }, [selectedPath, currentOrder, isPedestrian]);

  console.log("selectedPath : ", selectedPath);
  const totalTime = Math.floor(selectedPath?.totalTime / 60);
  const transferCount =
    selectedPath?.legs?.filter((leg) => leg.mode === "TRANSFER")?.length || 0;
  const fare = selectedPath?.fare?.regular.totalFare;
  const [startText] = useState(startSearchText);
  const [endText] = useState(endSearchText);
  let PathList;
  if (isPedestrian === false || currentOrder !== "onlySubway") {
    PathList = selectedPath?.legs?.map((leg, index) => {
      if (leg.mode === "BUS") {
        return (
          <StationRoot1
            key={index}
            color={leg.routeColor}
            start={leg.start.name}
            direction={leg.route + "번 버스"}
            // info={subwayNumber}
            time={Math.floor(leg.sectionTime / 60)}
            arrive={leg.end.name}
            mode={<img src="images\icon\bus.png" />}
          ></StationRoot1>
        );
      }
      if (leg.mode === "SUBWAY") {
        return (
          <StationRoot1
            key={index}
            color={leg.routeColor}
            start={leg.start.name}
            direction={"지하철" + " " + leg.route}
            // info={subwayNumber}
            time={Math.floor(leg.sectionTime / 60)}
            arrive={leg.end.name}
            mode={<img className="icon" src="images\icon\subway.png" />}
            quick={"안전환승"}
          ></StationRoot1>
        );
      }
      if (leg.mode === "WALK") {
        return (
          <StationRoot2
            key={index}
            start={index === 0 ? startText : leg.start.name}
            direction={leg.distance}
            info={leg.steps}
            time={Math.floor(leg.sectionTime / 60)}
            arrive={
              index === selectedPath.legs.length - 1 ? endText : leg.end.name
            }
          ></StationRoot2>
        );
      }
      if (leg.mode === "TRANSFER") {
        return (
          <StationRoot2
            key={index}
            start={leg.start.name}
            direction={leg.distance}
            // info={leg.steps}
            time={Math.floor(leg.sectionTime / 60)}
            arrive={leg.end.name}
          ></StationRoot2>
        );
      }
    });
  } else {
    PathList = (
      <StationRoot2
        start={selectedPath?.features?.[0].properties.facilityName}
        direction={selectedPath?.features?.[0].properties.totalDistance}
        info={selectedPath?.features?.map((path, index) => path.properties)}
        time={Math.floor(selectedPath?.features?.[0].properties.totalTime / 60)}
        arrive={selectedPath?.features?.[0].properties.facilityName}
      ></StationRoot2>
    );
  }
  return (
    <div className={className}>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content1>
        <SearchHeader
          setPage={setPage}
          setFaster={setFaster}
          setOnlySubway={setOnlySubway}
          setLessTransfer={setLessTransfer}
          locationInfo={locationInfo}
          startSearchText={startSearchText}
          endSearchText={endSearchText}
          setEndSearchText={setEndSearchText}
          setStartSearchText={setStartSearchText}
          setIsPedestrian={setIsPedestrian}
        ></SearchHeader>
        <Order
          currentOrder={currentOrder}
          setCurrentOrder={setCurrentOrder}
        ></Order>
      </Content1>

      {selectedPath && (
        <Contente2>
          {/* exit, direction, quick, time, start, arrive */}
          <TimeTransfer
            time={totalTime}
            timeunit={"분"}
            transfer={transferCount}
            fare={fare}
          ></TimeTransfer>
          <Start startPlace={startSearchText}></Start>

          {PathList}

          <Destination finishPlace={endSearchText}></Destination>
          {/* <Title title={data.name} options={data.option}></Title> */}
        </Contente2>
      )}
    </div>
  );
}
