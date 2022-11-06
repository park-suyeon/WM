import styled from "styled-components";
const RootBlock = styled.div`
  display: flex;
  flex-direction: column;
  .iconWrapper {
    display: flex;
    align-items: center;
    margin-top: 1.5px;
    .icon {
      width: 15px;
      height: 16px;
    }
    .text {
      margin-left: 5px;
      font-size: 15px;
      color: #c248ad;
    }
  }

  .Wrapper1 {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 60px;
    top: 180px;
    .LineMinute1 {
      font-size: 15px;
    }
  }
  .Wrapper2 {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 60px;
    top: 310px;
    .LineMinute2 {
      font-size: 15px;
    }
  }
  .Wrapper3 {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 60px;
    top: 420px;
    .LineMinute3 {
      font-size: 15px;
    }
  }
  .Wrapper4 {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    top: 245px;
    .LineMinute4 {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .Wrapper5 {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    top: 480px;
    .LineMinute5 {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .Wrapper6 {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 60px;
    top: 370px;
    .LineMinute6 {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .LineWrapper1 {
    display: flex;
    /* flex-direction: column; */
    position: absolute;
    left: 20px;
    height: 400px;

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
      .LineNumber1 {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        font-size: 20px;
        color: white;
        font-weight: bolder;
      }
      .text1 {
        font-size: 13px;
        color: white;
        font-weight: bold;
      }
    }
    .LineCircle2 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 255px;
      left: 2.5px;
      z-index: 1;
      height: 30px;
      width: 30px;
      border-radius: 99999px;
      background-color: #0ab5eb;
      margin: -1.5px 0px -2px 0px;
      .LineNumber2 {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        font-size: 20px;
        color: white;
        font-weight: bolder;
      }
    }
    .LineBar2 {
      display: flex;
      position: absolute;
      left: 8px;
      top: 25px;
      border-left: 15px solid #0ab5eb;
      height: 100px;
    }
  }
  .StartCircle {
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
    .StartText {
      font-size: 13px;
      color: white;
      font-weight: bold;
    }
  }
  .ArriveCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 110px;
    left: -0.5px;
    z-index: 1;
    height: 30px;
    width: 30px;
    border-radius: 99999px;
    background-color: #0ab5eb;
    margin: -1.5px 0px -2px 0px;
    .ArriveText {
      font-size: 13px;
      color: white;
      font-weight: bold;
    }
  }
  .TransferBar {
    display: flex;
    position: absolute;
    left: 10px;
    top: 155px;
    justify-content: center;
    border-left: 15px dashed #545454;
    height: 100px;
  }
  .stationBlock1 {
    display: flex;
    .stationName {
      font-size: 18px;
      font-weight: bold;
      position: relative;
      left: 60px;
      top: 10px;
    }
    .stationicon {
      width: 15px;
      height: 16px;
      position: relative;
      left: 68px;
      top: 12px;
    }
    .exit {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 77px;
      top: 10px;
      font-size: 15px;
      color: #c248ad;
    }
  }
`;
const StationRoot = (props) => {
  return (
    <RootBlock>
      <div className="LineWrapper1">
        <div className="LineCircle1">
          <div className="LineNumber1">2</div>
        </div>
        <div className="LineBar1"></div>
        <div className="StartCircle">
          <div className="StartText">하차</div>
        </div>
        <div className="TransferBar"></div>
        <div className="LineCircle2">
          <div className="LineNumber2">4</div>
          <div className="LineBar2"></div>
          <div className="ArriveCircle">
            <div className="ArriveText">하차</div>
          </div>
        </div>
      </div>
      <div className="stationBlock1">
        <div className="stationName">서초</div>
        <img className="stationicon" src="/images/icon/toilet_black.png" />
        <div className="exit">2번출구</div>
      </div>
      <div className="Wrapper1">
        <div className="LineMinute1">5분</div>
      </div>
      <div className="Wrapper4">
        <div className="LineMinute4">사당역</div>
        <div className="iconWrapper">
          <img className="icon" src="/images/icon/toilet_black.png" />
          <div className="text">4번 승강장</div>
        </div>
      </div>
      <div className="Wrapper2">
        <div className="LineMinute2">환승 | 휠체어 5분</div>
      </div>
      <div className="Wrapper6">
        <div className="LineMinute6">사당</div>
      </div>
      <div className="Wrapper3">
        <div className="LineMinute3">20분</div>
      </div>
      <div className="Wrapper5">
        <div className="LineMinute5">명동</div>
        <div className="iconWrapper">
          <img className="icon" src="/images/icon/toilet_black.png" />
          <div className="text">4번 승강장</div>
        </div>
      </div>
    </RootBlock>
  );
};
export default StationRoot;
