import styled from "styled-components";
import TransferLine from "./TransferLine";
import TransferBlock from "./TransferLine";
const StationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;

  .LineWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;
    margin-bottom: 15px;
    align-items: center;
    .LineBar {
      display: flex;
      width: 80%;
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

    .TransferCircle2 {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
      left: 400%;
      justify-content: center;
      border-radius: 99999px;
      width: 30px;
      height: 30px;
      background-color: #0ab5eb;
      .Transfertext {
        font-size: 18px;
        font-weight: bolder;
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
      margin: 2px;
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
    </StationWrapper>
  );
};
export default StationLine;
