import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import SearchHeader from "../components/root/SearchHeader";
import dynamic from "next/dynamic";
import StationLineBar from "../components/root/StationLine";
import TransportSelect from "../components/root/TransportSelect";
import TimeUnit from "../components/root/ViewTime";
import FacilityWrapper from "../components/root/FacilityWrapper";
import Order from "../components/search/Order";
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
        <TransportSelect></TransportSelect>
        <Order></Order>
      </Content1>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLineBar></StationLineBar>
        <FacilityWrapper></FacilityWrapper>
      </Contente2>

      {/* <Title title={data.name} options={data.option}></Title> */}
    </div>
  );
}
// export async function getServerSideProps() {
//   await mongodbconnect();
//   const placeList = await placemodel.find();
//   return { props: { placeList: placeList } };
// }
