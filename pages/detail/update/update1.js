import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../../components/detail/Header";
import FastSearch from "../../../components/index/FastSearch";
import Title from "../../../components/detail/Title";
import Step1 from "../../../components/detail/Step1";
import ShareCallBox from "../../../components/detail/ShareCall";
import ButtonBox from "../../../components/index/ButtonBox";
import Map from "../../../components/Map";

const Content1 = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
`;
const Content2 = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #ebf8ff;
  height: 70vh;
  bottom: 0px;
  left: 0;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
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
      <Content2>
        <Title></Title>
        <ShareCallBox></ShareCallBox>
        <Step1></Step1>
        <ButtonBox text="다음" />
      </Content2>
    </div>
  );
}