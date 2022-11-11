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
      margin: 0px 0px 0px 4px;
    }
  }
`;

const StationRoot2 = ({ transferway, transfertime }) => {
  return (
    <RootBlock2>
      <div className="transferBar"></div>
      <div className="transferWrapper">
        <div className="text">환승</div>
        <div className="divisionline "></div>
        <div className="text">{transferway} </div>
        <div className="text">{transfertime}분</div>
      </div>
    </RootBlock2>
  );
};
export default StationRoot2;
