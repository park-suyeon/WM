import styled from "styled-components";
import { subwayLineColor } from "../../config/subwayLineColor";

const Subway = styled.div`
  .lineWrapper {
    display: flex;
    flex-direction: column;
    margin: 5px 5px 5px 20px;
    .startLineCircle {
      width: 30px;
      height: 30px;
      /* background-color: #3cb449; */
      background-color: ${(props) => subwayLineColor[props.lineText]};
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
      border-left: 15px solid ${(props) => subwayLineColor[props.lineText]};
      height: 100px;
    }
  }
`;
const SubwayLine = ({ lineText }) => {
  return (
    <Subway lineText={lineText}>
      <div className="lineWrapper">
        <div className="startLineCircle">
          <div className="startLineText">{lineText}</div>
        </div>
        <div className="stationLine"></div>
        <div className="startLineCircle">
          <div className="arriveLineText">하차</div>
        </div>
      </div>
    </Subway>
  );
};
export default SubwayLine;
