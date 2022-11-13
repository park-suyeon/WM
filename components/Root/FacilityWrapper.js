import styled from "styled-components";
const Facility = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 10px;
  .icon {
    width: 15px;
    margin-right: 4px;
  }
  .facilitytext {
    font-size: 13px;
    color: #545454;
    padding: 0px 2px 0px 2px;
  }
  .faciltyContent {
    display: flex;
    flex-direction: row;
    margin-right: 10px;
  }
  .division {
    display: flex;
    position: fixed;
    border-left: 2px solid #545454;
    height: 25px;
    margin: 5px;
  }
`;

const FacilityWrapper = (props) => {
  return (
    <Facility>
      <div className="faciltyContent">
        <img className="icon" src="/images/icon/elevator_black.png" />
        <div className="facilitytext">엘리베이터 4회</div>
      </div>
      <div className="faciltyContent">
        <img className="icon" src="/images/icon/lift_black.png" />
        <div className="facilitytext">리프트 0회</div>
      </div>
    </Facility>
  );
};
export default FacilityWrapper;
