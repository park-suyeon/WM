import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

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
    top: 70px;
    left: 98px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    .pois-imd-wrapper {
      display: flex;
      align-items: center;
      border-radius: 20px;
      .poi {
        padding: 10px 30px;
      }
      .search_img {
        position: absolute;
      }
      &:hover {
        background-color: #e0f4ff;
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
  const router = useRouter();
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

  const clickPoi = (poi) => async () => {
    window.tmap.setSelectedPoi(poi);
    try {
      const resPoi = await axios.get(`/api/place/${poi.name}/name`);
      window.location.href = `/detail/${resPoi.data._id}`;
    } catch (err) {
      const resPoi = await axios.post(`/api/place`, {
        name: poi.name,
        lat: poi.frontLat,
        lon: poi.frontLon,
        address: `${poi.upperAddrName} ${poi.middleAddrName} ${poi.lowerAddrName} ${poi.roadName} ${poi.firstNo}-${poi.secondNo}`,
      });
      window.location.href = `/detail/${resPoi.data._id}`;
    } finally {
      setOpenResult(false);
    }
  };
  // const data = searchResult;
  const pois = data?.searchPoiInfo?.pois.poi || [];
  return (
    <HeaderWrapper>
      <Link href="/">
        <img className="logo" src="/images/logo.png" />
      </Link>
      <input
        className="searchBar"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          setOpenResult(true);
          refetch();
        }}
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
                <div className="pois-imd-wrapper" key={poi.pkey}>
                  <div className="poi" onClick={clickPoi(poi)}>
                    {poi.name}
                  </div>
                  <img
                    className="search_img"
                    src="/images/icon/search_gray.png"
                  />
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
