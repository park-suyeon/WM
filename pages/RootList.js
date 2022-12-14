import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import SearchHeader from "../components/rootc/SearchHeader";
import dynamic from "next/dynamic";
import StationLine from "../components/rootc/StationLineBar";
import Order from "../components/search/Order";
import TimeUnit from "../components/rootc/TimeUnit";
import FacilityWrapper from "../components/rootc/FacilityWrapper";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

const Content1 = styled.div`
  z-index: 1;
  top: 0;
  width: 100vw;
`;
const Contente2 = styled.div`
  background-color: white;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  border-top: solid 2.5px #ededed;
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content1>
        <SearchHeader></SearchHeader>
        <Order></Order>
      </Content1>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <FacilityWrapper></FacilityWrapper>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <FacilityWrapper></FacilityWrapper>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <FacilityWrapper></FacilityWrapper>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <FacilityWrapper></FacilityWrapper>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <FacilityWrapper></FacilityWrapper>
        {/* <Title title={data.name} options={data.option}></Title> */}
      </Contente2>
    </div>
  );
}
