import styled from "styled-components";

const StartLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  justify-content: flex-end;
  .startStation {
    font-size: 18px;
    font-weight: bolder;
  }
  .showFacility {
    font-size: 13px;
    color: #545454;
    padding-left: 2px;
  }
  .img {
    width: 25px;
    height: 31.6px;
    margin-right: 2px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2px 0px 2px 0px;
  }
  .division {
    border-left: solid 2px #545454;
    height: 20px;
    margin: 0px 4px 0px 4px;
  }
`;
const Location = (props) => {
  return (
    <StartLocation>
      <div className="wrapper">
        <img className="img" src="/images/icon/locationpin.png" />
        <div className="startStation">서초역 2호선</div>
      </div>
      <div className="wrapper">
        <div className="showFacility">외부환승 </div>
        <div className="showFacility">0회</div>
        <div className="division"></div>
        <div className="showFacility">엘리베이터 </div>
        <div className="showFacility">4회</div>
        <div className="division"></div>
        <div className="showFacility">리프트 </div>
        <div className="showFacility"> 0회</div>
      </div>
    </StartLocation>
  );
};
export default Location;
