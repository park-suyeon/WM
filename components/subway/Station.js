import styled from "styled-components";
import { subwayLineColor } from "../../config/subwayLineColor";
const StationBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
  .line {
    width: 90%;
    height: 25px;
    align-items: center;
    background-color: ${(props) => subwayLineColor[props.line]};
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
    border: 2px solid ${(props) => subwayLineColor[props.line]};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
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
    margin-bottom: 5px;
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
const Station = ({ name, left, right, line }) => {
  return (
    <StationBlock line={line}>
      <div className="line">
        <div className="previousStation">{left.split("-")[1]}</div>
        <div className="nextStation">{right.split("-")[1]}</div>
      </div>
      <div className="stationName">
        <div className="text">{name}</div>
      </div>
      {/* <div className="distanceWrapper">
        <div className="exit">3번 출구</div>
        <div className="distance">50m</div>
      </div> */}
    </StationBlock>
  );
};
export default Station;
