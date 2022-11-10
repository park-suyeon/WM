import styled from "styled-components";

const AriveLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  .startStation {
    font-size: 18px;
    font-weight: bolder;
  }
  .showFacility {
    font-size: 14px;
    color: #545454;
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
`;
const Location2 = (props) => {
  return (
    <AriveLocation>
      <div className="wrapper">
        <img className="img" src="/images/icon/arrivepin.png" />
        <div className="startStation">명동역 4호선</div>
      </div>
    </AriveLocation>
  );
};
export default Location2;
