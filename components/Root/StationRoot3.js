import styled from "styled-components";
import SubwayLine from "./SubwayLine";
const RootBlock3 = styled.div`
  .rootwrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    top: -30px;
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
      margin-top: 5px;
      margin-left: 2px;
      position: relative;
      top: 50px;
    }
    .icon {
      margin-top: 8px;
      margin-left: 15px;
      width: 17px;
      height: 17px;
    }
    .transferText {
      margin-top: 5px;
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
      top: 20px;
    }
    .exitText {
      margin-top: 5px;
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
      position: relative;
      top: 45px;
    }
    .exiticon {
      margin-top: 8px;
      margin-left: 15px;
      width: 17px;
      height: 17px;
      position: relative;
      top: 45px;
    }
  }
  .moreicon {
    width: 15px;
    height: 3px;
    position: absolute;
    top: 100px;
    right: 10%;
    cursor: pointer;
  }
`;
const StationRoot3 = ({ exit, direction, quick, time, start, arrive }) => {
  return (
    <RootBlock3
      exit={exit}
      direction={direction}
      quick={quick}
      time={time}
      start={start}
      arrive={arrive}
    >
      <div className="rootwrapper">
        <SubwayLine lineText={4}></SubwayLine>
        <div className="placeWrapper">
          <div className="placeline">
            <div className="startName">{start}</div>
          </div>
          <div className="placeline">
            <div className="directionText">{direction}</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="transferText">빠른 환승 </div>
            <div className="transferText">{quick}</div>
          </div>
          <div className="placeline">
            <div className="timeText">{time}분</div>
          </div>
          <div className="placeline">
            <div className="arriveName">{arrive}</div>
            <img className="exiticon" src="/images/icon/toilet_black.png" />
            <div className="exitText">{exit}번 출구</div>
          </div>
        </div>
        <img className="moreicon" src="/images/icon/more.png" />
      </div>
    </RootBlock3>
  );
};
export default StationRoot3;
