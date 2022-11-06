import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import SearchHeader from "../components/Root/SearchHeader";
import dynamic from "next/dynamic";
import Station from "../components/subway/Station";
import StationLine from "../components/Root/StationLineBar";
import RootLine from "../components/Root/StationRoot";
import TransportSelect from "../components/Root/HeaderSelect";
import ViewTime from "../components/Root/TimeUnit";
import ChooseWays from "../components/Root/ChooseWays";
import Location1 from "../components/Root/Location";
import Location2 from "../components/Root/Location2";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const Content1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
`;
const Contente2 = styled.div`
  position: absolute;
  background-color: none;
  height: 78vh;
  bottom: 0px;
  left: 0;
  width: 80%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Map></Map> */}

      <Content1>
        <SearchHeader></SearchHeader>
        <ChooseWays></ChooseWays>
      </Content1>

      <Contente2>
        <ViewTime></ViewTime>
        <Location1></Location1>
        <RootLine></RootLine>
        <Location2></Location2>
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
