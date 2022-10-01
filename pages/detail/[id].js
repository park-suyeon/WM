import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import FastSearch from "../../components/index/FastSearch";
import Menubar from "../../components/index/Menubar";
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
`;
const Header = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  & > .logo {
    margin-right: 13px;
  }
  & > .searchBar {
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 2px solid #1093ff;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    & > input {
      border: none;
      font-size: 18px;
    }
    & > img {
      margin-right: 15px;
    }
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
        <Header>
          <img className="logo" src="/images/logo.png" />
          <div className="searchBar">
            <img src="/images/icon/search.png" />
            <input></input>
          </div>
        </Header>
      </Content>
    </div>
  );
}
