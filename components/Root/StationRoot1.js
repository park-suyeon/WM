import styled from "styled-components";

const RootBlock1 = styled.div`
  .rootwrapper {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .lineWrapper {
    display: flex;
    flex-direction: column;
    margin: 5px 5px 5px 20px;
    .startLineCircle {
      width: 30px;
      height: 30px;
      background-color: #3cb449;
      border-radius: 99999px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      .startLineText {
        color: white;
        font-size: 20px;
        font-weight: bolder;
      }
      .arriveLineText {
        color: white;
        font-size: 13px;
      }
    }
    .stationLine {
      display: flex;
      position: relative;
      top: -2px;
      left: 8px;
      margin-bottom: -5px;
      border-left: 15px solid #3cb449;
      height: 100px;
    }
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
    }
    .icon {
      margin-top: 8px;
      margin-left: 15px;
      width: 17px;
      height: 17px;
    }
    .purpleText {
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
    .blackText {
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
  }
  .moreicon {
    width: 15px;
    height: 3px;
    position: relative;
    top: 100px;
    right: -30%;
    cursor: pointer;
  }
`;
const StationRoot1 = (props) => {
  return (
    <RootBlock1>
      <div className="rootwrapper">
        <div className="lineWrapper">
          <div className="startLineCircle">
            <div className="startLineText">2</div>
          </div>
          <div className="stationLine"></div>
          <div className="startLineCircle">
            <div className="arriveLineText">하차</div>
          </div>
        </div>
        <div className="placeWrapper">
          <div className="placeline">
            <div className="stationName">서초</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="purpleText">2번 출구</div>
          </div>
          <div className="placeline">
            <div className="blackText">방배 방향</div>
            <img className="icon" src="/images/icon/toilet_black.png" />
            <div className="purpleText">빠른 환승 </div>
            <div className="purpleText">3-4</div>
          </div>
          <div className="placeline">
            <div className="timeText">5분</div>
          </div>
          <div className="placeline">
            <div className="stationName">사당</div>
          </div>
        </div>
        <img className="moreicon" src="/images/icon/more.png" />
      </div>
    </RootBlock1>
  );
};
export default StationRoot1;
