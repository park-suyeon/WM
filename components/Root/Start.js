import styled from "styled-components";
import FacilityWrapper from "./FacilityWrapper";
const StartPoint = styled.div`
  display: flex;
  align-items: center;
  .iconWrapper {
    margin: 0px 0px 5px 20px;
    width: 30px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 30px;
      position: absolute;
    }
    .iconText {
      position: absolute;
      z-index: 10;
      font-size: 5px;
      color: white;
      padding-bottom: 4px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .start {
      font-weight: 700;
      font-size: 15px;
      margin-left: 20px;
      padding-bottom: 6px;
    }
  }
`;
const Start = (props) => {
  return (
    <StartPoint>
      <div className="iconWrapper">
        <img className="icon" src="\images\icon\pin_blue.png" />
        <div className="iconText">출발</div>
      </div>
      <div className="content">
        <div className="start">서초역 2호선</div>
        <FacilityWrapper></FacilityWrapper>
      </div>
    </StartPoint>
  );
};
export default Start;
