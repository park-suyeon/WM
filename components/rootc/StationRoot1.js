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
    .startName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      margin-top: 5px;
      margin-left: 2px;
    }
    .arriveName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      /* margin-top: 5px; */
      margin-left: 2px;
      position: relative;
      top: 40px;
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
      position: relative;
      top: 15px;
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
  exit,
  direction,
  quick,
  time,
  start,
  arrive,
  info,
}) => {
  return (
    <RootBlock1
      exit={exit}
      direction={direction}
      quick={quick}
      time={time}
      start={start}
      arrive={arrive}
      info={info}
    >
      <div className="rootwrapper">
        <SubwayLine lineText={2}></SubwayLine>
        <div className="placeWrapper">
          <div className="placeline">
            <div className="startName">{start} </div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="exitText">{exit} </div>
          </div>
          <div className="placeline">
            <div className="directionText">{direction}</div>
            <img className="icon" src="/images/icon/toilet_black/.png" />
            <div className="transferText">안전 환승 </div>
            <div className="transferText">{quick} </div>
          </div>
          <div className="placeline">
            <div className="directionText">dd{info}</div>
          </div>
          <div className="placeline">
            <div className="timeText"> {time}분</div>
          </div>
          <div className="placeline">
            <div className="arriveName">{arrive} </div>
          </div>
        </div>
        <img className="moreicon" src="/images/icon/more.png" />
      </div>
    </RootBlock1>
  );
};
export default StationRoot1;
