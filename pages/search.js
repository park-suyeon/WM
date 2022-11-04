import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FastSearch from "../components/index/FastSearch";
import Facilities from "../components/subway/Facilities";
import Header from "../components/search/Header";
import dynamic from "next/dynamic";
import Station from "../components/subway/Station";
import RecommendPlace from "../components/index/RecommendPlace";
import useCoordinate from "../hooks/useCoordinate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchResult from "../components/search/SearchResult";
import Order from "../components/search/Order";
const Content = styled.div`
  overflow: scroll;
`;
export default function Home() {
  const data = {
    name: "스타벅스 효창공원앞점",
    options: ["경사로", "장애인화장실"],
    newAddress: "서울 용산구 백범로 313",
  };
  return (
    <div>
      <Head>
        <title>WMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Header></Header>
      <Order></Order>
      <Content>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
        <SearchResult
          title={data.name}
          options={data.options}
          address={data.newAddress}
        ></SearchResult>
      </Content>
    </div>
  );
}
