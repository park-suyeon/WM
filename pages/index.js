import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FastSearch from "../components/index/FastSearch";
import Facilities from "../components/subway/Facilities";
import Header from "../components/detail/Header";
import dynamic from "next/dynamic";
import Station from "../components/subway/Station";
import useCoordinate from "../hooks/useCoordinate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PresentPosition from "../components/index/PresentPosition";
import LoginButton from "../components/index/LoginButton";
import { useEffect, useState } from "react";
import RouteButton from "../components/index/RouteButton";
const Root = dynamic(() => import("../components/Root"), { ssr: false });
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
      z-index: 1000;
      width: 100vw;
      bottom: 0;
    }
    .Content2 {
      display: flex;
      bottom: 0;
      right: 0;
      width: 100vw;
      padding-right: 10px;
      padding-bottom: 10px;
      margin-left: 10px;
      flex-direction: column;
    }

    .Content3 {
      background-color: white;
      left: 0;
      bottom: 0;
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
      height: 500px;
      bottom: 0;
    }
    .Content2 {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      width: 500px;
      padding-left: 10px;
    }

    .Content3 {
      position: fixed;
      background-color: white;
      bottom: 0px;
      left: 0;
      width: 500px;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px 10px 0px 0px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    }
  }
`;

const RootWrapper = styled.div`
  .root {
    opacity: 1;
    &.hide {
      opacity: 0;
      z-index: -1;
    }
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    z-index: 10000;
  }
`;

export default function Home() {
  if (typeof window === "undefined") return "";
  const locationInfo = JSON.parse(localStorage.getItem("locationInfo"));

  const [lat, lon] = useCoordinate();
  const [fastSearch, setFastSearch] = useState();
  const [page, setPage] = useState(locationInfo ? "root" : "index");
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

  const {
    isLoading: toiletLoding,
    error: toiletError,
    data: toiletData,
  } = useQuery(["toilet"], () =>
    axios.get(`/api/toilet`).then((res) => res.data)
  );

  useEffect(() => {
    if (fastSearch === "charger") {
      window.tmap.setWheelchairMark(wheelchairData || []);
    }
  }, [fastSearch]);

  useEffect(() => {
    if (fastSearch === "toilet") {
      window.tmap.setToiletMark(toiletData || []);
    }
  }, [fastSearch]);
  if (isLoading) return null;
  return (
    <>
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
            <RouteButton setPage={setPage}></RouteButton>
            <PresentPosition></PresentPosition>
            <LoginButton></LoginButton>
          </div>
          <div className="Content3">
            <Station
              name={data.name}
              left={data.left}
              right={data.right}
            ></Station>
            <Facilities data={data}></Facilities>
          </div>
        </div>
        <RootWrapper className={`${page === "index" ? "hide" : ""}`}>
          <Root
            className={`${page === "index" ? "hide " : ""}` + "root"}
            setPage={setPage}
          />
        </RootWrapper>
      </Index>
    </>
  );
}
