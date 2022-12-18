import { useState } from "react";
import styled from "styled-components";
import FacilityWrapper from "./FacilityWrapper";
const StartPoint = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;

  .iconWrapper {
    margin: 0px -15px 0px 25px;
    width: 70px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 30px;
    }
    .iconText {
      position: relative;
      z-index: 10;
      font-size: 10px;
      color: white;
      left: -32px;
      top: -4px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .start {
      font-weight: 700;
      font-size: 18px;
      margin-left: 2px;
    }
  }
`;
const Start = ({ startPlace }) => {
  const [name] = useState(startPlace);
  return (
    <StartPoint>
      <div className="iconWrapper">
        <img className="icon" src="\images\icon\pin_blue.png" />
        <div className="iconText">출발</div>
      </div>
      <div className="content">
        <div className="start">{name}</div>
        {/* <FacilityWrapper firstcount={4} secondcount={0}></FacilityWrapper> */}
      </div>
    </StartPoint>
  );
};
export default Start;
