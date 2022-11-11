import styled from "styled-components";
import SubwayLine from "./SubwayLine";

const RootBlock1 = styled.div`
  .rootwrapper {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
  }
  .placeWrapper {
    display: flex;
    flex-direction: column;
  }
  .placeline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .stationName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      margin-top: 5px;
      margin-left: 2px;
    }
    .icon {
      margin-top: 8px;
      margin-left: 15px;
      width: 17px;
      height: 17px;
    }
    .transferText {
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
    .directionText {
      font-size: 13px;
      color: black;
      margin-top: 5px;
      padding-left: 3px;
    }
    .timeText {
      font-size: 13px;
      color: black;
      margin-top: 5px;
      padding-left: 3px;
    }
    .exitText {
      margin-top: 5px;
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
  }
  .moreicon {
    width: 15px;
    height: 3px;
    position: absolute;
    top: 400px;
    right: 10%;
    cursor: pointer;
  }
`;
const StationRoot1 = ({
  lineText,
  time,
  exit,
  direction,
  start,
  arrive,
  transfer,
}) => {
  return (
    <RootBlock1
      time={time}
      exit={exit}
      direction={direction}
      start={start}
      arrive={arrive}
      transfer={transfer}
    >
      <div className="rootwrapper">
        <SubwayLine lineText={2}></SubwayLine>
        <div className="placeWrapper">
          <div className="placeline">
            <div className="stationName">{(start = "서초")}</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="exitText">{exit}2번 출구</div>
          </div>
          <div className="placeline">
            <div className="directionText">{direction}방배 방향</div>
            <img className="icon" src="/images/icon/toilet_black/.png" />
            <div className="transferText">빠른 환승 </div>
            <div className="transferText">{transfer}3-4</div>
          </div>
          <div className="placeline">
            <div className="timeText">{time} 5분</div>
          </div>
          <div className="placeline">
            <div className="stationName">사당 {arrive}</div>
          </div>
        </div>
        <img className="moreicon" src="/images/icon/more.png" />
      </div>
    </RootBlock1>
  );
};
export default StationRoot1;
