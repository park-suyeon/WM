import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FastSearch from "../components/index/FastSearch";
import Header from "../components/detail/Header";
const Map = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/IndexMap.png");
`;
const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  .moveNav {
    padding: 0px 20px 20px 20px;
  }
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map></Map>

      <Content>
        <Header></Header>
        <div className="moveNav">
          <FastSearch></FastSearch>
        </div>
      </Content>
    </div>
  );
}
