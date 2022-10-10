import styled from "styled-components";
const FastSearchBlock = styled.div`
  height: 50px;
  display: flex;
  overflow: scroll;
  align-items: center;
  & > .searchWrap {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    padding: 6px;
    margin-right: 6px;
    align-items: center;
    background-color: white;
    & > .icon {
      cursor: pointer;
      margin-right: 5px;
      height: 13px;
    }
    & > .text {
      cursor: pointer;
      font-size: 12px;
      white-space: nowrap;
    }
  }
`;
const FastSearch = (props) => {
  return (
    <FastSearchBlock>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\ramp.png" />
        <div className="text">경사로</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\charge.png" />
        <div className="text">휠체어 급속충전기</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\wc.png" />
        <div className="text">장애인 화장실</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\lift.png" />
        <div className="text">휠체어 리프트</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\elevator.png" />
        <div className="text">승강기</div>
      </div>
    </FastSearchBlock>
  );
};
export default FastSearch;
