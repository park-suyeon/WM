import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { set } from "nprogress";
import { useRef, useState } from "react";
import styled from "styled-components";
import testPublicTrans from "../testPublicTrans.json";

const SearchBlock = styled.div`
  //모바일
  @media screen and (max-width: 768px) {
    background-color: #1093ff;
    padding: 20px 15px 0px 15px;
    display: flex;
    justify-content: flex-end;
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 10px;
      .xicon {
        width: 18px;
        margin-bottom: 30px;
      }
      .searchBtn {
        background-color: #1093ff;
        border: none;
        .icon {
          width: 20px;
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      width: 90%;
      .searchBar {
        height: 45px;
        width: 100%;
        border-radius: 15px;
        border: none;
        background-color: white;
        padding: 10px;
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    .swapicon {
      position: absolute;
      top: 60px;
      right: 10px;
    }

    .center-poi {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .pois-wrapper {
        position: absolute;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        top: 130px;
        background-color: white;
        z-index: 50;
        align-items: center;
        border-radius: 20px;
        .poi {
          padding: 10px;
          border-radius: 20px;
        }
        .poi:hover {
          background-color: #e0f4ff;
          cursor: pointer;
        }
      }

      .pois-fullcover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0 0 0 / 20%);
      }
    }
    .routes {
      background-color: white;
      position: absolute;
      top: 100px;
      right: 50px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  //데스크탑
  @media screen and (min-width: 769px) {
    background-color: #1093ff;
    padding: 20px 15px 0px 15px;
    display: flex;
    justify-content: flex-end;
    width: 500px;
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 10px;
      .xicon {
        width: 18px;
        margin-bottom: 23px;
      }
      .searchBtn {
        background-color: #1093ff;
        border: none;
        align-content: center;
        justify-content: center;
        .icon {
          width: 20px;
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      width: 90%;
      .searchBar {
        height: 45px;
        width: 100%;
        border-radius: 15px;
        border: none;
        background-color: white;
        padding: 10px;
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    .swapicon {
      position: absolute;
      top: 60px;
      right: 10px;
    }

    .center-poi {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .pois-wrapper {
        position: absolute;
        padding: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 4px;
        top: 130px;
        left: 15px;
        z-index: 50;
        align-items: center;
        border-radius: 20px;
        .poi {
          padding: 10px;
          border-radius: 20px;
        }
        .poi:hover {
          background-color: #e0f4ff;
          cursor: pointer;
        }
      }

      .pois-fullcover {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0 0 0 / 20%);
      }
    }
    .routes {
      background-color: white;
      position: absolute;
      top: 100px;
      right: 50px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
const SearchHeader = ({
  setPage,
  setFaster,
  setOnlySubway,
  setLessTransfer,
  locationInfo,
  startSearchText,
  endSearchText,
  setEndSearchText,
  setStartSearchText,
}) => {
  const [openResult, setOpenResult] = useState(false);
  const [pois, setPois] = useState([]);
  const isStartPoi = useRef(false);
  if (locationInfo && window.tmap) {
    window.tmap.setSelectedPoi(
      {
        frontLat: locationInfo.lat,
        frontLon: locationInfo.lon,
        name: locationInfo.name,
      },
      isStartPoi.current ? "start" : "end"
    );
    setTimeout(() => {
      localStorage.setItem("locationInfo", null);
    }, 2000);
  }
  const { data: startData, refetch: startRefetch } = useQuery(
    ["search-start-result"],
    () => {
      if (process.env.NEXT_PUBLIC_TMAP_CLIENT_ID && startSearchText) {
        return axios
          .get(
            "https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
            {
              params: {
                appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
                searchKeyword: startSearchText,
                resCoordType: "WGS84GEO",
                reqCoordType: "WGS84GEO",
                count: 10,
              },
            }
          )
          .then((res) => {
            setPois(res.data?.searchPoiInfo?.pois.poi || []);
            isStartPoi.current = true;
            return res.data;
          });
      }
      return [];
    }
  );
  const { data: endData, refetch: endRefetch } = useQuery(
    ["search-end-result"],
    () => {
      if (process.env.NEXT_PUBLIC_TMAP_CLIENT_ID && endSearchText) {
        return axios
          .get(
            "https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
            {
              params: {
                appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
                searchKeyword: endSearchText,
                resCoordType: "WGS84GEO",
                reqCoordType: "WGS84GEO",
                count: 10,
              },
            }
          )
          .then((res) => {
            setPois(res.data?.searchPoiInfo?.pois.poi || []);
            isStartPoi.current = false;
            return res.data;
          });
      }
      return [];
    }
  );

  const getRoute = async () => {
    try {
      const { startX, startY, endX, endY } = window.tmap;
      const { faster, onlySubway, lessTransfer } = (
        await axios.post("/api/route", {
          startX,
          startY,
          endX,
          endY,
        })
      ).data;
      const res = testPublicTrans;

      setFaster(faster);
      setOnlySubway(onlySubway);
      setLessTransfer(lessTransfer);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  // const data = searchResult;
  return (
    <SearchBlock>
      <div className="left">
        <input
          className="searchBar"
          placeholder="출발지 입력"
          value={startSearchText}
          onChange={(e) => setStartSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setOpenResult(true);
            startRefetch();
          }}
        />
        <input
          className="searchBar"
          placeholder="도착지 입력"
          value={endSearchText}
          onChange={(e) => setEndSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setOpenResult(true);
            endRefetch();
          }}
        />
      </div>
      <div className="right">
        <img
          className="xicon"
          src="/images/icon/x.png"
          onClick={() => setPage("index")}
        />
        <button
          className="searchBtn"
          onClick={() => {
            getRoute();
          }}
        >
          <img className="icon" src="/images/icon/search_white.png" />
        </button>
      </div>

      {openResult && (
        <div className="center-poi">
          <div className="pois-wrapper">
            {pois.map((poi) => {
              return (
                <div key={poi.pkey}>
                  <div
                    className="poi"
                    onClick={() => {
                      window.tmap.setSelectedPoi(
                        poi,
                        isStartPoi.current ? "start" : "end"
                      );
                      if (isStartPoi.current) {
                        setStartSearchText(poi.name);
                      } else {
                        setEndSearchText(poi.name);
                      }
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
        </div>
      )}
      {/* {route && (
        <div className='routes'>
          {route.map((v, index) => {
            if (v.mode === 'WALK') {
              <div key={index}>
                <div>걷기</div>
                <div>{v.start.name}</div>
                <div>{v.end.name}</div>
                <div>{v.steps.map((step) => step.description + ' -> ')}</div>
              </div>;
            }
            return (
              <div key={index}>
                <div>{v.mode}</div>
                <div>{v.start.name}</div>
                <div>{v.end.name}</div>
              </div>
            );
          })}
        </div>
      )} */}
    </SearchBlock>
  );
};
export default SearchHeader;
