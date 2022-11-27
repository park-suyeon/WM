import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 24px 24px 0px 24px;
  align-items: center;
  .logo {
    margin-right: 13px;
    cursor: pointer;
  }
  .searchBar {
    height: 40px;
    width: 100%;
    border-radius: 999px;
    border: 2px solid #1093ff;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding-left: 40px;
    box-shadow: 0px 6px 10px rgba(16, 147, 255, 0.2);
  }
  .icon {
    position: fixed;
    left: 105px;
    top: 40px;
    transform: scaleX(-1);
  }

  .pois-wrapper {
    position: absolute;
    z-index: 10001;
    top: 80px;
    left: 130px;
    background-color: white;
    padding: 20px;

    .poi {
      border: 1px solid gray;
      padding: 10px 30px;
      &:hover {
        background-color: skyblue;
        cursor: pointer;
      }
    }
  }

  .pois-fullcover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0 0 0 / 20%);
    z-index: 10000;
  }
`;

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [openResult, setOpenResult] = useState(false);
  const { data, loading, refetch } = useQuery(["search-result"], () => {
    if (process.env.NEXT_PUBLIC_TMAP_CLIENT_ID && searchText) {
      return axios
        .get(
          "https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
          {
            params: {
              appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
              searchKeyword: searchText,
              resCoordType: "WGS84GEO",
              reqCoordType: "WGS84GEO",
              count: 10,
            },
          }
        )
        .then((res) => res.data);
    }
  });
  // const data = searchResult;
  console.log("data : ", data);
  const pois = data?.searchPoiInfo?.pois.poi || [];
  return (
    <HeaderWrapper>
      <Link href="/">
        <img className="logo" src="/images/logo.png" />
      </Link>
      <input
        className="searchBar"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        onClick={() => {
          setOpenResult(true);
          refetch();
        }}
        className="icon"
        src="/images/icon/search.png"
      />
      {openResult && (
        <>
          <div className="pois-wrapper">
            {pois.map((poi) => {
              return (
                <div key={poi.pkey}>
                  <div
                    className="poi"
                    onClick={() => {
                      window.tmap.setSelectedPoi(poi);
                      setOpenResult(false);
                    }}
                  >
                    {poi.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => setOpenResult(false)}
            className="pois-fullcover"
          ></div>
        </>
      )}
    </HeaderWrapper>
  );
}
