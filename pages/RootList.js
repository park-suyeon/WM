import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import SearchHeader from "../components/Root/SearchHeader";
import dynamic from "next/dynamic";
import Station from "../components/subway/Station";
import StationLine from "../components/Root/StationLineBar";
import Order from "../components/search/Order";
import HeaderSelect from "../components/Root/HeaderSelect";
import TimeUnit from "../components/Root/TimeUnit";
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
        <HeaderSelect></HeaderSelect>
        <Order></Order>
      </Content1>
      <Contente2>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        <TimeUnit></TimeUnit>
        <StationLine></StationLine>
        {/* <Title title={data.name} options={data.option}></Title> */}
      </Contente2>
    </div>
  );
}
// export async function getServerSideProps() {
//   await mongodbconnect();
//   const placeList = await placemodel.find();
//   return { props: { placeList: placeList } };
// }
