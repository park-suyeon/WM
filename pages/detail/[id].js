import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../components/detail/Header";
import ShareCallBox from "../../components/detail/ShareCall";
import FastSearch from "../../components/index/FastSearch";
import Title from "../../components/detail/Title";
import Photo from "../../components/detail/Photo";
import MainLocation from "../../components/detail/Location";
import ButtonBox from "../../components/index/ButtonBox";
import OptionIcon from "../../components/detail/OptionIcon";
import MorePhoto from "../../components/detail/MorePhoto";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../components/Map"), { ssr: false });
const Content1 = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
`;
const Content2 = styled.div`
  position: fixed;
  z-index: 100;
  background-color: white;
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
  const router = useRouter();
  const id = router.query.id;
  const { isLoading, error, data } = useQuery(["place", id], () =>
    axios(`/api/place/${id}`).then((res) => res.data)
  );
  if (isLoading || !data) return "로딩중";
  const title = data.options.map((title) => title.name);
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
        <Title title={data.name} poi={data}></Title>
        <ShareCallBox></ShareCallBox>
        <OptionIcon options={data.options}></OptionIcon>
        <MainLocation title={data.name} address={data.address}></MainLocation>
        {/* <Photo></Photo> */}
        <MorePhoto
          id={id}
          charger={""}
          information={""}
          runway={""}
          elevator={""}
          lift={""}
          restroom={""}
          ect={""}
          updateDay={data.updatedAt}
          createDay={data.createdAt}
        ></MorePhoto>
      </Content2>
    </div>
  );
}
