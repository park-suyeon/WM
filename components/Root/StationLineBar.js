import styled from "styled-components";
import TransferLine from "./TransferLine";
import TransferBlock from "./TransferLine";
const StationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: solid 3px #ededed;
  .LineWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;
    padding: 30px 0px 30px 0px;
    align-items: center;
    .LineBar {
      display: flex;
      width: 80%;
      border-width: 20px;
      border-radius: 99px;
      border-bottom: 20px solid #d9d9d9;
    }

    .TransferLineBar2 {
      display: flex;
      position: absolute;
      left: 450%;
      width: 150px;
      height: 20px;
      z-index: 1;
      align-items: center;
      border-radius: 99px;
      background-color: #0ab5eb;
      .TransferTime2 {
        position: absolute;
        display: flex;
        align-items: center;
        left: 50%;
        font-size: 12px;
        color: white;
      }
    }
  }
  .iconCircle {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    border-radius: 99999px;
    width: 25px;
    height: 25px;
    background-color: #c4c4c4;
    .icon {
      width: 15px;
      height: 16px;
      margin: 2px;
    }
  }

  .facilityWrapper {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    .icon {
      width: 15px;
      height: 16px;
      margin: 2px;
    }

    .faciltyContent {
      display: flex;
      flex-direction: row;
      margin: 3px 3px 3px 0px;
      .facilitytext {
        font-size: 13px;
        color: #545454;
        padding: 0px 2px 0px 2px;
      }
    }
    .division {
      display: flex;
      position: fixed;
      border-left: 2px solid #545454;
      height: 25px;
      margin: 5px;
    }
  }
`;
const StationLine = (props) => {
  return (
    <StationWrapper>
      <div className="LineWrapper">
        <div className="LineBar">
          <div className="iconCircle">
            <img className="icon" src="/images/icon/wheelchair.png" />
            <TransferLine
              lineText={2}
              time={6}
              left={150}
              width={110}
            ></TransferLine>
            <TransferLine
              lineText={4}
              time={10}
              left={800}
              width={140}
            ></TransferLine>
          </div>
        </div>
      </div>
      <div className="facilityWrapper">
        <div className="faciltyContent">
          <img className="icon" src="/images/icon/elevator_black.png" />
          <div className="facilitytext">엘리베이터 4회</div>
        </div>

        <div className="faciltyContent">
          <img className="icon" src="/images/icon/lift_black.png" />
          <div className="facilitytext">리프트 0회</div>
        </div>
      </div>
    </StationWrapper>
  );
};
export default StationLine;
