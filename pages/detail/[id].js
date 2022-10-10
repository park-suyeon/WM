import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../components/detail/Header";
import ShareCallBox from "../../components/detail/ShareCall";
import FastSearch from "../../components/index/FastSearch";
import Title from "../../components/detail/Title";
import Photo from "../../components/detail/Photo";
import MainLocation from "../../components/detail/Location";
import Button from "../../components/detail/Button";
import OptionIcon from "../../components/detail/OptionIcon";

const Map = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/IndexMap.png");
`;
const Content1 = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
`;
const Contente2 = styled.div`
  position: fixed;
  background-color: white;
  top: 260px;
  left: 0;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Content1>
        <Header></Header>
      </Content1>
      <Contente2>
        <Title></Title>
        <ShareCallBox></ShareCallBox>
        <MainLocation></MainLocation>
        <OptionIcon></OptionIcon>
        <Photo></Photo>
        <Button text="등록 및 수정"></Button>
      </Contente2>
    </div>
  );
}
