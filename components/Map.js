import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCoordinate from "../hooks/useCoordinate";

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
    height: 900px;
    background-color: #e0f4ff;
  }
`;
const Tmap = () => {
  useEffect(() => {
    const tmapApp = document.getElementById("TMapApp").childNodes.length === 0;
    if (!tmapApp) {
      window.tmap?.attachTmap();
    }
  }, []);

  return (
    <TmapBlock>
      <div id="TMapApp"></div>
      <Script type="text/javascript" src="/tmap.js"></Script>
    </TmapBlock>
  );
};

export default Tmap;
