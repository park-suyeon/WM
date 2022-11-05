import styled from "styled-components";
import { subwayLineColor } from "../../config/subwayLineColor";

const Transfer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding-bottom: 3px;
  left: ${(props) => props.left}%;

  .TransferCircle1 {
    display: flex;
    align-items: center;
    z-index: 2;
    position: absolute;
    left: -1.5px;
    justify-content: center;
    border-radius: 99999px;
    width: 30px;
    height: 30px;
    background-color: ${(props) => subwayLineColor[props.lineText]};
    .Transfertext {
      font-size: 18px;
      font-weight: bolder;
      color: white;
    }
  }

  .TransferLineBar1 {
    display: flex;
    width: ${(props) => props.width}px;
    height: 20px;
    z-index: 1;
    align-items: center;
    border-radius: 99px;
    background-color: ${(props) => subwayLineColor[props.lineText]};
    .TransferTime1 {
      position: absolute;
      display: flex;
      align-items: center;
      left: 40%;
      font-size: 12px;
      color: white;
    }
  }
`;
const TransferLine = ({ lineText, time, left, width }) => {
  return (
    <Transfer left={left} lineText={lineText} width={width}>
      <div className="TransferCircle1">
        <div className="Transfertext">{lineText}</div>
      </div>
      <div className="TransferLineBar1">
        <div className="TransferTime1">{time}분</div>
      </div>
    </Transfer>
  );
};
export default TransferLine;
