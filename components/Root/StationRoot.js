import styled from "styled-components";
const RootBlock = styled.div`
  .LineWrapper {
    display: flex;
    position: relative;
    left: 20px;
    width: 10%;
    height: 50%;
    .LineBar1 {
      display: flex;
      position: absolute;
      left: 10px;
      top: 30px;
      justify-content: center;
      border-left: 15px solid #3cb449;
      height: 100px;
    }
    .LineCircle1 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 10px;
      left: 2.5px;
      z-index: 1;
      height: 30px;
      width: 30px;
      border-radius: 99999px;
      background-color: #3cb449;
      margin: -1.5px 0px -2px 0px;
      .text1 {
        font-size: 13px;
        color: white;
        font-weight: bold;
      }
      .LineNumber1 {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        font-size: 20px;
        color: white;
        font-weight: bolder;
      }
    }
    .LineCircle2 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 130px;
      left: 2.5px;
      z-index: 1;
      height: 30px;
      width: 30px;
      border-radius: 99999px;
      background-color: #3cb449;
      margin: -1.5px 0px -2px 0px;
      .text2 {
        font-size: 13px;
        color: white;
        font-weight: bold;
      }
    }
  }
  .stationBlock {
    display: flex;
    flex-direction: row;
    .stationName {
      font-size: 18px;
      font-weight: bold;
      position: relative;
      left: 60px;
      top: 0px;
    }
    .stationicon {
      width: 18px;
      height: 17px;
      position: relative;
      left: 70px;
      top: 2px;
    }
    .exit {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 77px;
      font-size: 15px;
      color: #c248ad;
    }
  }

  .TransferLine {
    display: flex;
    position: relative;
    left: 20%;
    justify-content: center;
    border-left: 15px dashed #c4c4c4;
    height: 100px;
  }
`;
const StationRoot = (props) => {
  return (
    <RootBlock>
      <div className="LineWrapper">
        <div className="LineCircle1">
          <div className="LineNumber1">2</div>
        </div>
        <div className="LineBar1"></div>
        <div className="LineCircle2">
          <div className="text2">출발</div>
        </div>
      </div>
      <div className="stationBlock">
        <div className="stationName">서초</div>
        <img className="stationicon" src="/images/icon/toilet_black.png" />
        <div className="exit">2번출구</div>
      </div>
      <div className="stationBlock">
        <div className="exit">방배 방향 | </div>
        <img className="stationicon" src="/images/icon/toilet_black.png" />
      </div>
      <div className="exit">5분</div>
    </RootBlock>
  );
};
export default StationRoot;
