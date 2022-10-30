import styled from "styled-components";
const StationBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 30px;
  .line {
    width: 90%;
    height: 25px;
    align-items: center;
    background-color: #c66a28;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 7.5px;
    .previousStation {
      color: white;
      font-size: 13px;
    }
    .nextStation {
      color: white;
      font-size: 13px;
    }
  }
  .stationName {
    width: 40%;
    height: 40px;
    background-color: white;
    border: 2px solid #c66a28;
    border-radius: 30px;
    align-items: center;
    /* position: fixed; */
    padding: 10px;
    .text {
      font-weight: 700;
      font-size: 17px;
      text-align: center;
    }
  }
  .distanceWrapper {
    display: flex;
    margin-top: 15px;
    .exit {
      font-size: 12px;
      margin-right: 6px;
    }
    .distance {
      font-size: 12px;
      color: #c248ad;
    }
  }
`;
const Station = (props) => {
  return (
    <StationBlock>
      <div className="line">
        <div className="previousStation">공덕</div>
        <div className="nextStation">삼각지</div>
      </div>
      <div className="stationName">
        <div className="text">효창공원앞</div>
      </div>
      <div className="distanceWrapper">
        <div className="exit">3번 출구</div>
        <div className="distance">50m</div>
      </div>
    </StationBlock>
  );
};
export default Station;
