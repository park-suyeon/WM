import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import testPublicTrans from '../testPublicTrans.json';

const SearchBlock = styled.div`
  background-color: #1093ff;
  padding: 24px 10px 0px 15px;
  display: flex;
  flex-direction: column;
  .searchBar {
    height: 45px;
    width: 90%;
    border-radius: 15px;
    border: none;
    background-color: white;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .swapicon {
    position: absolute;
    top: 60px;
    right: 10px;
  }
  .xicon {
    position: absolute;
    top: 20px;
    right: 15px;
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
      padding: 20px;
      background-color: skyblue;
      display: flex;
      flex-direction: column;
      gap: 4px;
      z-index: 50;

      .poi {
        padding: 20px;
        font-size: 20px;
      }
      .poi:hover {
        background-color: white;
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
`;
const SearchHeader = ({
  setPage,
  setFaster,
  setOnlySubway,
  setLessTransfer,
}) => {
  const locationInfo = JSON.parse(localStorage.getItem('locationInfo'));
  const router = useRouter();
  console.log('location Info  :', locationInfo);
  const [startSearchText, setStartSearchText] = useState(
    locationInfo?.isStart ? locationInfo.name : ''
  );
  const [endSearchText, setEndSearchText] = useState(
    locationInfo && !locationInfo?.isStart ? locationInfo.name : ''
  );
  const [openResult, setOpenResult] = useState(false);
  const [pois, setPois] = useState([]);
  const isStartPoi = useRef(false);
  if (locationInfo && window.tmap) {
    window.tmap.setSelectedPoi(
      { frontLat: locationInfo.lat, frontLon: locationInfo.lon },
      isStartPoi.current ? 'start' : 'end'
    );
    setTimeout(() => {
      localStorage.setItem('locationInfo', null);
    }, 2000);
  }
  const { data: startData, refetch: startRefetch } = useQuery(
    ['search-start-result'],
    () => {
      if (process.env.NEXT_PUBLIC_TMAP_CLIENT_ID && startSearchText) {
        return axios
          .get(
            'https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result',
            {
              params: {
                appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
                searchKeyword: startSearchText,
                resCoordType: 'WGS84GEO',
                reqCoordType: 'WGS84GEO',
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
    ['search-end-result'],
    () => {
      if (process.env.NEXT_PUBLIC_TMAP_CLIENT_ID && endSearchText) {
        return axios
          .get(
            'https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result',
            {
              params: {
                appKey: process.env.NEXT_PUBLIC_TMAP_CLIENT_ID,
                searchKeyword: endSearchText,
                resCoordType: 'WGS84GEO',
                reqCoordType: 'WGS84GEO',
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
        await axios.post('/api/route', {
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
      console.log('err: ', err);
    }
  };
  console.log('poi : ', pois);
  // const data = searchResult;
  return (
    <SearchBlock>
      <img
        className='xicon'
        src='/images/icon/x.png'
        onClick={() => setPage('index')}
      />
      <input
        className='searchBar'
        placeholder='출발지 입력'
        value={startSearchText}
        onChange={(e) => setStartSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          setOpenResult(true);
          startRefetch();
        }}
      />
      <input
        className='searchBar'
        placeholder='도착지 입력'
        value={endSearchText}
        onChange={(e) => setEndSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          setOpenResult(true);
          endRefetch();
        }}
      />
      <button
        onClick={() => {
          getRoute();
        }}
      >
        길찾기
      </button>
      {openResult && (
        <div className='center-poi'>
          <div className='pois-wrapper'>
            {pois.map((poi) => {
              return (
                <div key={poi.pkey}>
                  <div
                    className='poi'
                    onClick={() => {
                      window.tmap.setSelectedPoi(
                        poi,
                        isStartPoi.current ? 'start' : 'end'
                      );
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
            className='pois-fullcover'
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
