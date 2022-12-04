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

const Content1 = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
`;
const Contente2 = styled.div`
  background-color: white;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export default function Root({ setPage, className }) {
  const [faster, setFaster] = useState();
  const [onlySubway, setOnlySubway] = useState();
  const [lessTransfer, setLessTransfer] = useState();
  const [currentOrder, setCurrentOrder] = useState("onlySubway"); // lessTransfer | faster

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
      window.tmap.drawData(selectedPath);
    }
  }, [selectedPath, currentOrder]);

  console.log("selectedPath : ", selectedPath);
  const totalTime = Math.floor(selectedPath?.totalTime / 60);
  const transferCount = selectedPath?.legs.filter(
    (leg) => leg.mode === "TRANSFER"
  ).length;
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
          ></TimeTransfer>
          <Start startPlace={selectedPath?.legs[0].start.name}></Start>
          <StationRoot1
            start={"서초"}
            exit={2}
            direction={"방배"}
            quick={"3-4"}
            time={5}
            arrive={"사당"}
          ></StationRoot1>
          <StationRoot2 transferway={"휠체어"} transfertime={5}></StationRoot2>
          <StationRoot3
            start={"사당"}
            exit={3}
            direction={"당고개행"}
            quick={"4-1"}
            time={20}
            arrive={"명동"}
          ></StationRoot3>
          <Destination></Destination>
          {/* <Title title={data.name} options={data.option}></Title> */}
        </Contente2>
      )}
    </div>
  );
}
