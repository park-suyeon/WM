import styled from "styled-components";
const FastSearchBlock = styled.div`
  height: 52px;
  display: flex;
  overflow: scroll;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  & > .searchWrap {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    padding: 8px 10px 8px 10px;
    margin-right: 10px;
    align-items: center;
    background-color: white;

    & > .icon {
      cursor: pointer;
      margin-right: 7px;
      height: 14px;
    }
    & > .text {
      cursor: pointer;
      font-size: 13px;
      white-space: nowrap;
    }
  }
`;
const FastSearch = (props) => {
  return (
    <FastSearchBlock>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\charge_blue.png" />
        <div className="text">휠체어 급속충전기</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\toilet_blue.png" />
        <div className="text">장애인 화장실</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\restaurant.png" />
        <div className="text">맛집</div>
      </div>
      <div className="searchWrap">
        <img className="icon" src="\images\icon\cafe.png" />
        <div className="text">카페</div>
      </div>
    </FastSearchBlock>
  );
};
export default FastSearch;
