import styled from "styled-components";
const DestinationPoint = styled.div`
  display: flex;
  align-items: center;
  .iconWrapper {
    margin: 0px 0px 5px 30px;
    width: 50px;
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
      font-size: 5px;
      color: white;
      left: -25px;
      top: -3px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .finish {
      font-weight: 700;
      font-size: 18px;
      padding-bottom: 6px;
    }
  }
`;
const Destination = ({ finishPlace }) => {
  return (
    <DestinationPoint>
      <div className="iconWrapper">
        <img className="icon" src="\images\icon\pin_blue.png" />
        <div className="iconText">도착</div>
      </div>
      <div className="content">
        <div className="finish">{finishPlace}</div>
      </div>
    </DestinationPoint>
  );
};
export default Destination;
