import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCoordinate from "../hooks/useCoordinate";
import LoginButton from "./index/LoginButton";
import PresentPosition from "./index/PresentPosition";

const MapButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;
const TmapBlock = styled.div`
  position: relative;

  #TMapApp {
    width: 100%;
    height: 600px;
    background-color: gray;
  }
`;
const Tmap = () => {
  console.log("map render");
  useEffect(() => {
    window.tmap?.attachTmap();
  }, []);

  return (
    <TmapBlock>
      <div id="TMapApp"></div>
      <Script type="text/javascript" src="/tmap.js"></Script>
    </TmapBlock>
  );
};

export default Tmap;
