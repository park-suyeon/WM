import styled from "styled-components";

const Recommendation = styled.div`
  background-color: none;
  display: flex;
  flex-direction: row;
  width: 100vw;
  border-bottom: solid 3px #ededed;
  cursor: pointer;
  .Wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .text {
      color: black;
      font-size: 18px;
      font-weight: bolder;
      margin: 5px 5px 5px 10px;
    }
    .img {
      padding-top: 5px;
    }
  }
`;
const ChooseWays = (props) => {
  return (
    <Recommendation>
      <div className="Wrapper">
        <div className="text">휠체어 추천순</div>
        <img className="img" src="/images/icon/arrow.png" />
      </div>
    </Recommendation>
  );
};
export default ChooseWays;
