import styled from "styled-components";

const HeaderBlock = styled.div`
  background-color: #1093ff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  padding-bottom: 10px;
  .Wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 24px;
    .transportWrapper {
      display: flex;
      flex-direction: row;
      margin: 3px 5px 5px 5px;
      cursor: pointer;
      .img {
        margin: 0px;
      }
      .text {
        color: #ffffff;
        font-size: 15px;
        margin: 0px 0px 0px 3px;
      }
    }
  }
`;
const HeaderSelect = (props) => {
  return (
    <HeaderBlock>
      <div className="Wrapper">
        <div className="transportWrapper">
          <img className="img" src="/images/icon/taxi.png" />{" "}
          <div className="text">택시</div>
        </div>
        <div className="transportWrapper">
          <img className="img" src="/images/icon/subway.png" />
          <div className="text">지하철</div>
        </div>
        <div className="transportWrapper">
          <img className="img" src="/images/icon/wheelchair.png" />
          <div className="text">휠체어</div>
        </div>
      </div>
    </HeaderBlock>
  );
};
export default HeaderSelect;
