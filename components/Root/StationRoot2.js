import styled from "styled-components";

const RootBlock2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 5px 5px 20px;
  position: relative;
  top: -15px;
  left: 8px;

  .transferBar {
    justify-content: center;
    border-left: 15px dashed #545454;
    height: 100px;
  }
  .transferWrapper {
    display: flex;
    flex-direction: row;
    height: 20px;
    position: relative;
    top: 40px;
    left: 10px;
    .text {
      font-size: 13px;
      margin-left: 5px;
    }
    .divisionline {
      border-left: solid 2px black;
      height: 20px;
      margin: 0px 4px 0px 4px;
    }
  }
`;

const StationRoot2 = (props) => {
  return (
    <RootBlock2>
      {/* <div className="lineWrapper"> */}
      <div className="transferBar"></div>
      <div className="transferWrapper">
        <div className="text">환승</div>
        <div className="divisionline "></div>
        <div className="text">휠체어 </div>
        <div className="text">5분</div>
      </div>
      {/* </div> */}
    </RootBlock2>
  );
};
export default StationRoot2;
