import styled from "styled-components";
const StationBlock = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 50px;
  margin-top: 30px;
  & > .line {
    width: 90%;
    height: 30px;
    align-items: center;
    background-color: #c66a28;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 13px;
    padding-right: 13px;
    margin-top: 10px;
    & > .previousStation {
      color: white;
      font-size: 14px;
    }
    & > .nextStation {
      color: white;
      font-size: 14px;
    }
  }
  & > .stationName {
    width: 40%;
    height: 50px;
    background-color: white;
    border: 2px solid #c66a28;
    border-radius: 30px;
    align-items: center;
    position: fixed;
    padding: 10px;
    & > .text {
      font-weight: 700;
      font-size: 18px;
      text-align: center;
    }
  }
`;
const Station = (props) => {
  return (
    <StationBlock>
      <div className="line">
        <div className="previousStation">공덕</div>
        <div className="nextStation">삼각지</div>
      </div>
      <div className="stationName">
        <div className="text">효창공원앞</div>
      </div>
    </StationBlock>
  );
};
export default Station;
