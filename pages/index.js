import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FastSearch from "../components/index/FastSearch";
import Facilities from "../components/subway/Facilities";
import Header from "../components/detail/Header";
import dynamic from "next/dynamic";
import Station from "../components/subway/Station";
import RecommendPlace from "../components/index/RecommendPlace";
import useCoordinate from "../hooks/useCoordinate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PresentPosition from "../components/index/PresentPosition";
import LoginButton from "../components/index/LoginButton";
import { useEffect, useState } from "react";
const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Index = styled.div`
  //모바일
  @media screen and (max-width: 768px) {
    .Content1 {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      .moveNav {
        padding: 0px 0px 0px 20px;
      }
    }
    .ContentWrapper {
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 100vw;
      bottom: 0;
    }
    .Content2 {
      z-index: 10;
      position: absolute;
      display: flex;
      justify-content: flex-end;
      width: 100vw;
      padding-right: 10px;
    }

    .Content3 {
      z-index: 10;
      position: fixed;
      background-color: white;
      bottom: 0px;
      left: 0;
      width: 100vw;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px 10px 0px 0px;
      box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    }
  }
  //데스크탑
  @media screen and (min-width: 769px) {
    .Content1 {
      position: fixed;
      top: 0;
      left: 0;
      width: 500px;
      .moveNav {
        padding: 0px 0px 0px 20px;
      }
    }
    .ContentWrapper {
      position: fixed;
      display: flex;
      flex-direction: column;
      z-index: 1000;
      width: 100vw;
      bottom: 0;
    }
    .Content2 {
      display: flex;
      justify-content: flex-end;
      bottom: 0;
      left: 0;
      width: 100vw;
      padding-right: 10px;
      padding-bottom: 10px;
      margin-left: 10px;
    }

    .Content3 {
      background-color: white;
      left: 0;
      bottom: 0;
      width: 100%;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0px 10px 10px 0px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    }
  }
`;

export default function Home() {
  const [lat, lon] = useCoordinate();
  const [fastSearch, setFastSearch] = useState();
  const {
    isLoading,
    error,
    data: data,
  } = useQuery(["subway", lat, lon], () =>
    axios
      .get(`/api/subway/close`, { params: { lat, lon } })
      .then((res) => res.data)
  );
  const {
    isLoading: wheelchairLoding,
    error: wheelchairError,
    data: wheelchairData,
  } = useQuery(["wheelchair"], () =>
    axios.get(`/api/wheelchair`).then((res) => res.data)
  );
  useEffect(() => {
    if (fastSearch === "charger") {
      window.tmap.setWheelchairMark(wheelchairData || []);
    }
  }, [fastSearch]);
  console.log("wheelchairdata", wheelchairData);
  if (isLoading) return null;
  console.log("map : ", Map);
  return (
    <Index>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
        <mets
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></mets>
      </Head>
      <Map></Map>

      <div className="Content1">
        <Header></Header>
        <div className="moveNav">
          <FastSearch
            fastSearch={fastSearch}
            setFastSearch={setFastSearch}
          ></FastSearch>
        </div>
      </div>
      <div className="ContentWrapper">
        <div className="Content2">
          <PresentPosition></PresentPosition>
          <LoginButton></LoginButton>
        </div>
        <div className="Content3">
          <Station
            title={data.name}
            left={data.left}
            right={data.right}
          ></Station>
          <Facilities data={data}></Facilities>
          {/* <RecommendPlace
            title={data.name}
            options={[data.options]}
          ></RecommendPlace> */}
        </div>
      </div>
    </Index>
  );
}
