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
    .stationName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      margin-top: 5px;
      padding: 1px;
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
    top: 100px;
    right: 10%;
    cursor: pointer;
  }
`;
const StationRoot3 = (props) => {
  return (
    <RootBlock3>
      <div className="rootwrapper">
        <SubwayLine lineText={4}></SubwayLine>
        <div className="placeWrapper">
          <div className="placeline">
            <div className="stationName">사당</div>
          </div>
          <div className="placeline">
            <div className="directionText">당고개행</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="transferText">빠른 환승 </div>
            <div className="transferText">4-1</div>
          </div>
          <div className="placeline">
            <div className="timeText">20분</div>
          </div>
          <div className="placeline">
            <div className="stationName">명동</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="exitText">3번 출구</div>
          </div>
        </div>
        <img className="moreicon" src="/images/icon/more.png" />
      </div>
    </RootBlock3>
  );
};
export default StationRoot3;
