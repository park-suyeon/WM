import styled from "styled-components";
const RootBlock = styled.div`
  display: flex;
  flex-direction: column;

  .LineWrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    height: 80%;
    width: 10%;
    .LineBar1 {
      display: flex;
      position: relative;
      left: 20%;
      justify-content: center;
      border-left: 15px solid #3cb449;
      height: 100px;
    }
    .LineCircle1 {
      display: flex;
      align-items: center;
      justify-content: center;
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

    .TransferLine {
      display: flex;
      position: relative;
      left: 20%;
      justify-content: center;
      border-left: 15px dashed #c4c4c4;
      height: 100px;
    }
  }
`;
const RootLine = (props) => {
  return (
    <RootBlock>
      <div className="LineWrapper">
        <div className="LineCircle1">
          <div className="LineNumber1">2</div>
        </div>
        <div className="LineBar1"></div>
        <div className="LineCircle1">
          <div className="text1">도착</div>
        </div>
        <div className="TransferLine"></div>
        <div className="LineCircle1">
          <div className="LineNumber1">2</div>
        </div>
        <div className="LineBar1"></div>
        <div className="LineCircle1">
          <div className="text1">도착</div>
        </div>
      </div>
    </RootBlock>
  );
};
export default RootLine;
