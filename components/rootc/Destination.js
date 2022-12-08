import styled from "styled-components";
const DestinationPoint = styled.div`
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
    .finish {
      font-weight: 700;
      font-size: 18px;
      margin-left: 10px;
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
